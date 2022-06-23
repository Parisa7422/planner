import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  text: { type: String },
});

export default mongoose.model("Quote", QuoteSchema);
