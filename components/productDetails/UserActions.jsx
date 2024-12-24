"use client";
import ProductQuantity from "./ProductQuantity";
import { FaBagShopping, FaHeart, FaTrash } from "react-icons/fa6";
// import { addToCart, controlWishList } from "@/app/actions";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserActions = ({
  dictionary,
  productId,
  productSizes,
  stock,
  lang,
  isWished,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(productSizes[0] || "");
  // const { auth } = useAuth();
  const router = useRouter();
  const pathName = usePathname();

  const handleAddToCart = async () => {
    if (!auth) {
      router.push(`/${lang}/login?proId=${productId}&quantity=quantity`);
    } else {
      const response = await addToCart(
        productId,
        quantity,
        selectedSize,
        auth?.id || auth?._id
      );
      if (response.status === 204) {
        router.refresh();
        toast.success(response.msg, {
          position: "bottom-center",
        });
      }
    }
  };

  const handleWishList = async () => {
    if (!auth) {
      router.push(`/${lang}/login?proId=${productId}`);
    } else {
      const response = await controlWishList(
        productId,
        auth?.id || auth?._id,
        pathName
      );
      if (response.status === 200) {
        router.refresh();
        toast.success(response.msg, {
          position: "bottom-center",
        });
      } else if (response.status === 201) {
        router.refresh();
        toast.success(response.msg, {
          position: "bottom-center",
        });
      }
    }
  };

  return (
    <>
      {/* product quantity */}
      {stock > 0 && (
        <div className="flex flex-col gap-2">
          <ProductQuantity
            dictionary={dictionary}
            quantity={quantity}
            setQuantity={setQuantity}
            stock={stock}
          />
          <div className="flex flex-col">
            <h4 htmlFor="phone" className="text-gray-600 dark:text-gray-200">
              Sizes
            </h4>

            {productSizes?.length > 0 ? (
              <div className="flex gap-2">
                {productSizes?.map((size) => (
                  <button
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                    className={`text-sm border border-gray-200 rounded-sm h-6 px-5 cursor-pointer shadow-sm text-gray-600 dark:text-gray-300 hover:bg-primary hover:border-primary hover:text-white dark:hover:text-white ${
                      selectedSize === size &&
                      "bg-primary border-primary text-white dark:text-white"
                    }`}
                    key={size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <p value="Default">Default</p>
            )}
          </div>
        </div>
      )}

      {/* user actions */}
      <div className="mt-6 flex gap-3 border-b border-gray-200 dark:border-gray-500 pb-5 pt-5">
        <form action={handleAddToCart}>
          <button
            disabled={!stock}
            type="submit"
            className={`bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary dark:hover:font-semibold transition disabled:cursor-not-allowed disabled:bg-red-400 disabled:hover:bg-red-400 disabled:hover:text-white`}
          >
            <FaBagShopping /> {dictionary?.add_to_cart}
          </button>
        </form>

        <form action={handleWishList}>
          <button
            type="submit"
            className="border border-gray-300 text-gray-600 dark:text-gray-300 dark:hover:text-primary px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary hover:border-primary transition"
          >
            {isWished ? <FaTrash /> : <FaHeart />}{" "}
            {isWished
              ? dictionary?.remove_from_wishlist
              : dictionary?.add_to_wishlist}
          </button>
        </form>
      </div>
    </>
  );
};

export default UserActions;
