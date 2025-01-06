"use client";
// import { addToCart, controlWishList } from "@/app/actions";
import { blurImageUrl } from "@/utils/getBlurImage";
import { FaEye, FaHeart, FaMagnifyingGlass, FaStar } from "react-icons/fa6";
import { FaRegHeart as FaHeartSolid } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProductCard = ({ product, dictionary, lang, wishList }) => {
  const rating = Array.from(Array(product?.rating));
  // const { auth } = useAuth();
  const router = useRouter();
  const pathName = usePathname();

  // const isWished = wishList?.some((wishProduct) => {
  //   return wishProduct?.product_id === product?.id;
  // });

  const isWished = false;

  const handleAddToCart = async () => {
    if (!auth) {
      router.push(`/${lang}/login?proId=${product?.id}&quantity=1`);
    } else {
      const response = await addToCart(
        product?.id,
        1,
        product?.sizes[0],
        auth?.id || auth?._id
      );
      if (response.status === 204) {
        toast.success(response.msg);
      }
    }
  };

  const handleWishList = async () => {
    if (!auth) {
      router.push(`/${lang}/login?proId=${product?.id}`);
    } else {
      const response = await controlWishList(
        product?.id,
        auth?.id || auth?._id,
        pathName
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
    <div className="bg-white dark:bg-dark shadow rounded overflow-hidden group flex flex-col justify-between">
      {/* product image */}
      <div className="relative">
        <Image
          src={product?.thumbnail}
          alt="product 1"
          className="w-full h-auto"
          width={358}
          height={265}
          placeholder="blur"
          blurDataURL={blurImageUrl}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 my-transition">
          <Link
            href={`/${lang}/shop/${product.id}`}
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <FaEye />
          </Link>
          <form action={handleWishList}>
            <button
              type="submit"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              {isWished ? <FaHeartSolid /> : <FaHeart />}
            </button>
          </form>
        </div>
      </div>

      {/* product details */}
      <div className="p-4">
        <Link href={`/${lang}/shop/${product?.id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary my-transition">
            {product?.title}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">
            ${product?.offer_price}
          </p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.original_price}
          </p>
          {!product?.availability && (
            <span className="text-sm text-primary font-semibold">
              (Out of stock)
            </span>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            {rating?.map((r, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div className="text-xs text-gray-500 ml-3">
            ({product?.reviews?.length})
          </div>
        </div>
      </div>

      {/* add to cart */}
      <form action={handleAddToCart}>
        <button
          disabled={!product?.availability}
          type="submit"
          className="block w-full py-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:bg-red-400 disabled:hover:bg-red-400 disabled:hover:text-white my-transition"
        >
          {dictionary?.add_to_cart}
        </button>
      </form>
    </div>
  );
};

export default ProductCard;
