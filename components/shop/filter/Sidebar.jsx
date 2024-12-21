import { Suspense } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";

const Sidebar = async ({ category, allCategories, dictionary }) => {
  const selectedCategories = category && decodeURI(category).split("|");
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <Suspense>
          <CategoryFilter categories={allCategories} dictionary={dictionary} />

          <PriceFilter dictionary={dictionary} />

          <SizeFilter
            allCategories={allCategories}
            selectedCategories={selectedCategories}
            dictionary={dictionary}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Sidebar;
