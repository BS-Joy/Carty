import { CategoryModel } from "@/models/categoryModel";
import { replaceMongoIdInArray } from "@/utils";

export const getCategories = async () => {
  try {
    const categories = await CategoryModel.find().lean();

    const l = replaceMongoIdInArray(categories);
    return l;
  } catch (err) {
    throw new Error(err);
  }
};
