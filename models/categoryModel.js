import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  category_name: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
});

export const CategoryModel =
  mongoose.models.Category ?? mongoose.model("Category", CategorySchema);
