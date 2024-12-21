"use client";
// import { controlCartQuantity, deleteCart } from "@/app/actions";
import { FaTrash } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartProductCard = ({ cart, lang }) => {
  const handleDelete = async () => {
    const response = await deleteCart(
      cart?.id,
      cart?.user_id,
      cart?.product_id
    );
    toast.success(response.msg, {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      {/* thumbnail */}
      <div className="w-28">
        <Image
          src={cart?.thumbnail}
          alt="product 6"
          className="w-full"
          width={112}
          height={83}
        />
      </div>

      {/* basic informations */}
      <div className="w-1/3">
        <Link href={`/${lang}/shop/${cart?.product_id}`}>
          <h2 className="text-gray-800 text-xl font-medium uppercase hover:text-primary transition">
            {cart?.title}
          </h2>
        </Link>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span className="text-green-600">
            {cart?.availability ? "In Stock" : "Out Of Stock"}
          </span>
        </p>
        <p className="text-gray-500 text-sm">
          Quantity: <span className="text-primary">{cart?.quantity}</span>
        </p>
        <p className="text-gray-500 text-sm">
          Size: <span className="text-blue-500">{cart?.size}</span>
        </p>
      </div>

      {/* price */}
      <div className="flex flex-col items-end">
        <div className="text-primary text-lg font-semibold">
          $ {cart?.price}
        </div>
        <div className="text-primary text-lg font-semibold">
          <span className="text-gray-500">Total: </span>${" "}
          {cart?.total_price?.toFixed(2)}
        </div>
      </div>

      {/* button */}
      <form action={handleDelete}>
        <button
          type="submit"
          className="px-6 py-2 flex items-center gap-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
        >
          <FaTrash />
          Remove From Cart
        </button>
      </form>
    </div>
  );
};

export default CartProductCard;
