import ShareProduct from "./ShareProduct";
import { FaStar } from "react-icons/fa";
// import { getCategoryName } from "@/db/queries";
import UserActions from "./UserActions";

const ProductDetails = async ({ product, dictionary, lang, isWished }) => {
  const rating = Array.from(Array(product?.rating));
  // const category_name = await getCategoryName(product?.category);
  const category_name = "sofa";
  return (
    <div>
      <h2 className="text-3xl font-medium uppercase mb-2">{product?.title}</h2>

      {/* rating and reviews */}
      <div className="flex items-center mb-4">
        <div className="flex gap-1 text-sm text-yellow-400">
          {rating?.map((r, index) => (
            <span key={index}>
              <FaStar />
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-500 ml-3">
          ({product?.reviews?.length} Reviews)
        </div>
      </div>

      {/* basic details */}
      <div className="space-y-2">
        <p className="text-gray-800 dark:text-gray-300 font-semibold space-x-2">
          <span>{dictionary?.availability}: </span>
          <span className="text-green-600">
            {product?.availability ? (
              "In Stock"
            ) : (
              <span className="text-primary">Out of Stock</span>
            )}
          </span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 dark:text-gray-300 font-semibold">
            {dictionary?.brand}:{" "}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            {product?.brand}
          </span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 dark:text-gray-300 font-semibold">
            {dictionary?.category}:{" "}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            {category_name}
          </span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 dark:text-gray-300 font-semibold">
            {dictionary?.sku}:{" "}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            {product?.sku}
          </span>
        </p>
      </div>

      {/* price */}
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">
          ${product?.offer_price}
        </p>
        <p className="text-base text-gray-400 line-through">
          ${product?.original_price}
        </p>
      </div>

      {/* summary */}
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {product?.summary}
      </p>

      <UserActions
        dictionary={dictionary}
        productId={product?.id}
        stock={product?.stock}
        lang={lang}
        isWished={isWished}
        productSizes={product?.sizes}
      />

      {/* social share */}
      <ShareProduct title={product?.title} />
    </div>
  );
};

export default ProductDetails;
