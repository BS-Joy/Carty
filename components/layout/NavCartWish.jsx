// import { auth } from "@/auth";
// import { getCartsByUser, getWishListByUser } from "@/db/queries";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import Link from "next/link";

const NavCartWish = async ({ dictionary, lang }) => {
  //   const session = await auth();
  //   const carts = await getCartsByUser(session?.user?.id || session?.user?._id);
  //   const wishes = await getWishListByUser(
  //     session?.user?.id || session?.user?._id
  //   );
  //   const count = carts?.reduce(
  //     (total, cart) => total + parseInt(cart.quantity),
  //     0
  //   );
  return (
    <>
      <Link
        href={`/${lang}/wish`}
        className={`text-center w-9 mr-2 ${
          lang === "bn" && "mr-6"
        } text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition relative flex flex-col items-center`}
      >
        <FaHeart size={"1.4rem"} />
        <div className="text-xs leading-5">{dictionary?.wish}</div>
        <div className="absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {0}
          {/* {wishes?.length || 0} */}
        </div>
      </Link>

      {/* cart link */}
      <Link
        href={`/${lang}/cart`}
        className="text-center text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition relative"
      >
        <FaCartShopping size={"1.4rem"} />
        <div className="text-xs leading-5">{dictionary?.cart}</div>
        <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
          {/* {count || 0} */}
          {0}
        </div>
      </Link>
    </>
  );
};

export default NavCartWish;
