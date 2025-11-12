import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true }, // Image URL or path
    link: { type: String, required: false },  // Optional external link
  },
  { timestamps: true }
);

export default mongoose.model("Certificate", certificateSchema);
