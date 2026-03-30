import { describe, it, expect, vi, beforeAll, afterAll, afterEach } from "vitest";
import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../app.js";

// Mock the mailer so no real emails are sent during tests
vi.mock("../config/mailer.js", () => ({
  sendQuoteNotification: vi.fn().mockResolvedValue(undefined),
}));

let mongod;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

afterEach(async () => {
  // Clear all quotes between tests
  await mongoose.connection.db.collection("quotes").deleteMany({});
});

const validQuote = {
  name: "Jane Smith",
  vehicleYear: "2020",
  vehicleMakeModel: "Toyota Camry",
  requestedPackage: "Full ceramic coating",
  email: "jane@example.com",
  phone: "615-555-0101",
};

describe("POST /api/submit", () => {
  it("returns 201 and saves the quote with valid data", async () => {
    const res = await request(app).post("/api/submit").send(validQuote);

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Quote request submitted successfully.");
    expect(res.body.quote.name).toBe(validQuote.name);
    expect(res.body.quote.email).toBe(validQuote.email);
  });

  it("returns 201 with an optional timeframe field", async () => {
    const res = await request(app)
      .post("/api/submit")
      .send({ ...validQuote, timeframe: "asap" });

    expect(res.status).toBe(201);
    expect(res.body.quote.timeframe).toBe("asap");
  });

  it("returns 400 when a required field is missing", async () => {
    const { email: _removed, ...missingEmail } = validQuote;
    const res = await request(app).post("/api/submit").send(missingEmail);

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("returns 400 for an invalid email format", async () => {
    const res = await request(app)
      .post("/api/submit")
      .send({ ...validQuote, email: "not-an-email" });

    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/invalid email/i);
  });

  it("returns 400 for a non-4-digit vehicle year", async () => {
    const res = await request(app)
      .post("/api/submit")
      .send({ ...validQuote, vehicleYear: "20" });

    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(/4-digit/i);
  });

  it("returns 400 for an invalid timeframe value", async () => {
    const res = await request(app)
      .post("/api/submit")
      .send({ ...validQuote, timeframe: "tomorrow" });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
