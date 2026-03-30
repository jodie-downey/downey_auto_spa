import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  vehicleYear: z
    .string()
    .regex(/^\d{4}$/, "Vehicle year must be a 4-digit year"),
  vehicleMakeModel: z.string().min(1, "Vehicle make/model is required").max(100),
  requestedPackage: z.string().min(1, "Package is required").max(100),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{7,20}$/, "Invalid phone number"),
  timeframe: z.enum(["asap", "week", "month", "unknown"]).optional(),
});
