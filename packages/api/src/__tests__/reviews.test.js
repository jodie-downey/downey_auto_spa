import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import app from "../app.js";

vi.mock("axios");
vi.mock("../config/mailer.js", () => ({
  sendQuoteNotification: vi.fn().mockResolvedValue(undefined),
}));

import axios from "axios";

const mockPlace = {
  displayName: { text: "Downey Auto Spa" },
  rating: 4.9,
  userRatingCount: 87,
  reviews: [
    {
      rating: 5,
      text: { text: "Amazing service, my car looks brand new!" },
      authorAttribution: {
        displayName: "Jane Doe",
        uri: "https://www.google.com/maps/contrib/123",
      },
      publishTime: "2024-06-01T00:00:00Z",
    },
    {
      rating: 4,
      text: { text: "Great work, will be back." },
      authorAttribution: {
        displayName: "John Smith",
        uri: "https://www.google.com/maps/contrib/456",
      },
      publishTime: "2024-05-15T00:00:00Z",
    },
  ],
};

describe("GET /api/reviews", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.stubEnv("GOOGLE_PLACE_ID", "ChIJ2WhtOE-5ZYgRJDJLH_jFRfI");
    vi.stubEnv("GOOGLE_API_KEY", "test-api-key");
  });

  it("returns 200 with correctly shaped review data", async () => {
    axios.get.mockResolvedValue({ data: mockPlace });

    const res = await request(app).get("/api/reviews");

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Downey Auto Spa");
    expect(res.body.rating).toBe(4.9);
    expect(res.body.totalReviews).toBe(87);
    expect(res.body.reviews).toHaveLength(2);
  });

  it("maps review fields to the expected frontend shape", async () => {
    axios.get.mockResolvedValue({ data: mockPlace });

    const res = await request(app).get("/api/reviews");
    const review = res.body.reviews[0];

    expect(review.author_name).toBe("Jane Doe");
    expect(review.author_url).toBe("https://www.google.com/maps/contrib/123");
    expect(review.rating).toBe(5);
    expect(review.text).toBe("Amazing service, my car looks brand new!");
  });

  it("calls the Places API (New) endpoint with correct headers", async () => {
    axios.get.mockResolvedValue({ data: mockPlace });

    await request(app).get("/api/reviews");

    expect(axios.get).toHaveBeenCalledWith(
      "https://places.googleapis.com/v1/places/ChIJ2WhtOE-5ZYgRJDJLH_jFRfI",
      expect.objectContaining({
        headers: expect.objectContaining({
          "X-Goog-Api-Key": "test-api-key",
          "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
        }),
      })
    );
  });

  it("falls back to 'Anonymous' when authorAttribution is missing", async () => {
    axios.get.mockResolvedValue({
      data: {
        ...mockPlace,
        reviews: [{ rating: 5, text: { text: "No attribution here." }, publishTime: "2024-01-01T00:00:00Z" }],
      },
    });

    const res = await request(app).get("/api/reviews");

    expect(res.status).toBe(200);
    expect(res.body.reviews[0].author_name).toBe("Anonymous");
    expect(res.body.reviews[0].author_url).toBeNull();
  });

  it("returns 500 when Google returns no data", async () => {
    axios.get.mockResolvedValue({ data: null });

    const res = await request(app).get("/api/reviews");

    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Failed to load reviews");
  });

  it("returns 500 when axios throws", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    const res = await request(app).get("/api/reviews");

    expect(res.status).toBe(500);
    expect(res.body.message).toBe("Server error fetching reviews");
  });
});
