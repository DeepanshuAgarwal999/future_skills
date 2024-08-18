import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);
