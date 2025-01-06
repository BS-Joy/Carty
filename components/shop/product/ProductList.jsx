"use client";

import { useEffect, useState } from "react";
import { Suspense } from "react";
// import ProductCard from "./ProductCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CardSkeleton from "@/components/loading/CardSkeleton";
import Empty from "@/components/Empty";
import PaginationComponent from "./Pagination";
// import ProductCard2 from "./ProductCard2";
import ProductCard3 from "./ProductCard3";
// import PageLoader from "@/components/loading/PageLoader";

const ProductList = ({
  total_products,
  products,
  dictionary,
  lang,
  wishList,
}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const initialPage = parseInt(params.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(total_products / 6);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // useEffect(() => {
  //   setCurrentPage(initialPage);
  // }, [initialPage]);

  // useEffect(() => {
  //   const pageParams = params.get("page");
  //   if (pageParams) {
  //     setCurrentPage(parseInt(pageParams));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (currentPage === 1) {
  //     params.delete("page");
  //     replace(`${pathName}?${params}`);
  //   } else if (currentPage !== 1) {
  //     params.set("page", currentPage);
  //     replace(`${pathName}?${params}`);
  //   } else {
  //     params.delete("page");
  //   }
  // }, [currentPage]);

  return (
    <div className="col-span-3">
      {products?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products?.map((product) => (
              <Suspense key={product.id} fallback={<CardSkeleton />}>
                {/* <ProductCard
                  product={product}
                  dictionary={dictionary}
                  lang={lang}
                  // wishList={wishList}
                /> */}
                <ProductCard3
                  product={product}
                  dictionary={dictionary}
                  lang={lang}
                  // wishList={wishList}
                />
              </Suspense>
            ))}
          </div>
          <div className="mt-12 mx-auto flex justify-center">
            {/* Pagination controls */}
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </div>
        </>
      ) : (
        <Empty msg="No product found." />
      )}
    </div>
  );
};

export default ProductList;

{
  /* <ul className="flex justify-center">
              {[...Array(totalPages).keys()].map((_item, index) => (
                <li key={index} className="mx-1">
                  <button
                    className={`px-3 py-1 rounded ${
                      currentPage === index + 1 ? "bg-primary" : "bg-gray-200"
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul> */
}
