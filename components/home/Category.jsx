// import { getAllCategories } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";
import Empty from "../Empty";
import { blurImageUrl } from "@/utils/getBlurImage";
import { Suspense } from "react";
import ImageSkeleton from "../loading/ImageSkeleton";
import { getDictionary } from "@/app/dictionaries/dictionaries";

const categories = [
  {
    id: 1,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Random image 1
    category_name: "Category 1",
  },
  {
    id: 2,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Random image 2
    category_name: "Category 2",
  },
  {
    id: 3,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Random image 3
    category_name: "Category 3",
  },
  {
    id: 4,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Random image 4
    category_name: "Category 4",
  },
  {
    id: 5,
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Random image 5
    category_name: "Category 5",
  },
];

const Category = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  // const categories = await getAllCategories();
  return (
    <>
      <div className="container py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          {dictionary?.shop_by_category}
        </h2>
        {categories?.length > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <Suspense key={category?.id} fallback={<ImageSkeleton />}>
                <div
                  key={category?.id}
                  className="relative overflow-hidden group rounded"
                >
                  <Image
                    src={category?.thumbnail}
                    alt="category 1"
                    className="w-full max-h-[308px] transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    width={493}
                    height={308}
                    placeholder="blur"
                    blurDataURL={blurImageUrl}
                  />
                  <Link
                    href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition duration-500"
                  >
                    {category?.category_name}
                  </Link>
                </div>
              </Suspense>
            ))}
          </div>
        ) : (
          <Empty msg="Sorry! No categories available to show." />
        )}
      </div>
    </>
  );
};

export default Category;
