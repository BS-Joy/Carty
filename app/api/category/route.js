import { CategoryModel } from "@/models/categoryModel";
import { replaceMongoIdInArray } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const categoryLists = await CategoryModel.find().lean();

    const categories = replaceMongoIdInArray(categoryLists);

    return NextResponse.json(categories);
  } catch (err) {
    throw new Error(err);
  }
};
