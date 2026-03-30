import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    ts: { type: Date, default: Date.now },
    path: { type: String, default: "/" },
    sessionId: { type: String, default: "unknown" },
    meta: { type: Object, default: {} },
  },
  { versionKey: false }
);

export default mongoose.model("Event", EventSchema);
