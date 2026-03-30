import { BadRequestError } from "jodiedowney-errors";
import Quote from "../models/Quote.js";
import { sendQuoteNotification } from "../config/mailer.js";
import { quoteSchema } from "@das/shared";

export const submitQuote = async (req, res, next) => {
  try {
    const result = quoteSchema.safeParse(req.body);
    if (!result.success) {
      throw new BadRequestError(
        result.error.issues.map((e) => e.message).join(", ")
      );
    }

    const { name, vehicleYear, vehicleMakeModel, requestedPackage, phone, email, timeframe } =
      result.data;

    const newQuote = await Quote.create({
      name,
      vehicleYear,
      vehicleMakeModel,
      requestedPackage,
      phone,
      email,
      ...(timeframe ? { timeframe } : {}),
    });

    await sendQuoteNotification(newQuote);

    res.status(201).json({
      message: "Quote request submitted successfully.",
      quote: newQuote,
    });
  } catch (error) {
    next(error);
  }
};
