import Event from "../models/Event.js";

export async function createEvent(req, res, next) {
  try {
    const { type, ts, path, sessionId, meta } = req.body ?? {};

    if (!type) {
      return res.status(400).json({ message: "Missing required field: type" });
    }

    await Event.create({
      type,
      ts: ts ? new Date(ts) : undefined,
      path: path || "/",
      sessionId: sessionId || "unknown",
      meta: meta || {},
    });

    return res.status(204).end();
  } catch (err) {
    return next(err);
  }
}
