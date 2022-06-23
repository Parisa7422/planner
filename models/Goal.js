import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Please provide title"] },
  content: { type: String, required: true },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});

export default mongoose.model("Goal", GoalSchema);
