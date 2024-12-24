"use client";
// import { doCheckout } from "@/app/actions";
// import { useAuth } from "@/hooks/useAuth";
// import { useCart } from "@/hooks/useCart";
import { getRefinedOrderedItems } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const carts = [
  {
    id: "665f5e3bfb99260cb949f291",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
  {
    id: "665f5e3bfb99260cb949f292",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
  {
    id: "665f5e3bfb99260cb949f293",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
  {
    id: "665f5e3bfb99260cb949f294",
    title: "Vintage Leather Sofa",
    availability: true,
    stock: 1,
    brand: "ElegantHome",
    category: "sofa",
    sku: "SOFA456",
    original_price: 899.99,
    offer_price: 799.99,
    summary: "A luxurious vintage leather sofa for classic interiors.",
    details:
      "Crafted with premium leather and sturdy wooden frame, this sofa offers both style and comfort.",
    thumbnail:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1591290953364-109131700de0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    reviews: ["review_id_4", "review_id_5"],
    rating: 4,
    color: "brown",
    sizes: ["2 seater", "3 seater"],
    total_sold: 93,
    createdAt: "2024-05-17T09:20:15.210+00:00",
    updatedAt: {
      $date: "2024-12-13T12:58:20.142Z",
    },
  },
];

const OrderSummary = ({ lang, dictionary }) => {
  // const { carts } = useCart();
  // const { auth } = useAuth();
  const router = useRouter();

  const handleOrder = async (e) => {
    e.preventDefault();
    const refinedCarts = getRefinedOrderedItems(carts);

    const orderNo = parseInt(Math.random() * 1000000);

    const finalData = {
      products: refinedCarts,
      orderNo,
      shipping_address: auth?.shipping_address,
      billing_address: auth?.billing_address,
    };

    const res = await doCheckout(finalData);
    console.log(res);
    if (res.status === 201) {
      toast.success("Order Complete");
      router.push(`/${lang}/ordersummary/${orderNo}`);
    }
  };

  return (
    <div className="col-span-4 border shadow-md dark:border-primary p-4 rounded">
      <h4 className="text-gray-800 dark:text-gray-200 text-lg mb-4 font-medium uppercase">
        {dictionary?.order_summary}
      </h4>
      <div className="space-y-2">
        {carts?.map((cartItem) => (
          <div key={cartItem?.id} className="flex justify-between">
            <div>
              <h5 className="text-gray-800 dark:text-gray-300 font-medium">
                {cartItem?.title}
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Size: {cartItem?.sizes[0]}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              x{cartItem?.quantity || 2}
            </p>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              ${cartItem?.total_price || 22}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p className="dark:text-gray-300">subtotal</p>
        <p className="dark:text-gray-300">$1280</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 dark:border-gray-600 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p className="dark:text-gray-300">shipping</p>
        <p className="dark:text-gray-300">Free</p>
      </div>

      <div className="flex justify-between text-gray-800 dark:text-gray-300 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>$1280</p>
      </div>

      <form onSubmit={handleOrder}>
        <div className="flex items-center mb-4 mt-2">
          <input
            required
            type="checkbox"
            name="aggrement"
            id="aggrement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
          />
          <label
            htmlFor="aggrement"
            className="text-gray-600 dark:text-gray-400 ml-3 cursor-pointer text-sm"
          >
            {dictionary.have_agree}{" "}
            <Link href="#" className="text-primary">
              {dictionary.terms_condition}
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:shadow-night-button my-transition font-medium"
        >
          Place order
        </button>
      </form>
    </div>
  );
};

export default OrderSummary;
