"use client";
import { useEffect } from "react";
import CartProductCard from "./CartProductCard";
import { FaArrowRight } from "react-icons/fa6";
import Empty from "@/components/Empty";
import Link from "next/link";
// import { useCart } from "@/hooks/useCart";

const CartProductList = ({ cartProducts, session, lang }) => {
  // const { setCarts } = useCart();

  // useEffect(() => {
  //   if (cartProducts?.length > 0 && session?.user?.email) {
  //     setCarts(cartProducts);
  //     localStorage.setItem("carts", JSON.stringify(cartProducts));
  //   } else {
  //     setCarts([]);
  //   }
  // }, [cartProducts.length, session]);
  return (
    <>
      {/* <!-- cart --> */}
      <div className="mx-auto space-y-4 max-w-6xl w-full">
        {cartProducts?.length > 0 ? (
          cartProducts?.map((product) => (
            <CartProductCard key={product?.id} cart={product} lang={lang} />
          ))
        ) : (
          <div>
            <Empty msg={"Your cart is empty!"} />
            <div className="flex justify-center">
              <Link
                href={`/${lang}/shop`}
                className="border border-primary bg-primary text-white px-5 py-3 rounded hover:bg-transparent hover:text-primary"
              >
                Explore all products
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* check out button */}
      {cartProducts?.length > 0 && (
        <div className="mt-8 flex justify-end space-y-4 max-w-6xl w-full mx-auto">
          <Link
            href={`/${lang}/checkout`}
            className="px-6 py-2 flex items-center gap-2 text-center text-sm text-primary border border-primary rounded hover:text-white hover:bg-primary hover:border-primary my-transition uppercase font-roboto font-medium"
          >
            Proceed to Checkout
            <FaArrowRight />
          </Link>
        </div>
      )}
    </>
  );
};

export default CartProductList;
