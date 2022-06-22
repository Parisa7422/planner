import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Goal", GoalSchema);
