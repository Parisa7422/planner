import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  noteTitle: { type: String },
  noteContent: { type: String, required: [true, "Please provide the content"] },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});

export default mongoose.model("Note", NoteSchema);
