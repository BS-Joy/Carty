"use client";

// import { addToCart, controlWishList } from "@/app/actions";
import { FaBagShopping, FaTrash } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const WishProductCard = ({ product, lang }) => {
  const router = useRouter();
  // const { auth } = useAuth();
  const pathName = usePathname();

  const handleAddToCart = async () => {
    if (!auth) {
      router.push(`/${lang}/login?proId=${product?.product_id}`);
    } else {
      const response = await addToCart(
        product?.product_id,
        1,
        product?.sizes[0],
        auth?.id || auth?._id
      );
      if (response.status === 204) {
        toast.success(response.msg, {
          position: "bottom-center",
        });
      }
    }
  };

  const handleWishList = async () => {
    if (!auth) {
      router.push(`/${lang}/login?proId=${product?.product_id}`);
    } else {
      const response = await controlWishList(
        product?.product_id,
        auth?.id || auth?._id,
        pathName,
        lang
      );
      if (response.status === 200) {
        toast.success(response.msg, {
          position: "bottom-center",
        });
      } else if (response.status === 201) {
        toast.success(response.msg, {
          position: "bottom-center",
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-between border gap-6 p-4 rounded shadow dark:border-primary">
      {/* thumbnail */}

      <div className="flex gap-6 items-center">
        <div className="w-28">
          <Image
            src={product?.thumbnail}
            alt="product 6"
            className="w-full rounded"
            width={112}
            height={83}
          />
        </div>

        {/* details */}
        <div>
          <Link href={`/${lang}/shop/${product?.product_id}`}>
            <h2 className="text-gray-800 dark:text-gray-300 text-xl font-medium uppercase hover:text-primary transition">
              {product?.title}
            </h2>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Availability:{" "}
            <span className="text-green-600">
              {product?.availability ? "In Stock" : "Out of Stock"}
            </span>
            {/* price */}
            <span className="text-primary text-lg font-semibold">
              $ {product?.price}
            </span>
          </p>
        </div>
      </div>

      {/* buttons */}
      <div className=" flex gap-4 items-center">
        <form action={handleAddToCart}>
          <button
            type="submit"
            className="px-6 flex items-center gap-2 py-2 text-center text-sm text-white bg-primary border border-primary rounded  my-transition uppercase font-medium hover:shadow-night-button hover:bg-primary hover:text-white"
          >
            <FaBagShopping />
            add to cart
          </button>
        </form>

        <form action={handleWishList}>
          <button
            type="submit"
            className="px-6 flex items-center gap-2 py-2 text-center text-sm text-white bg-primary border border-primary rounded  my-transition uppercase font-medium hover:shadow-night-button hover:bg-primary hover:text-white"
          >
            <FaTrash />
            remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default WishProductCard;
