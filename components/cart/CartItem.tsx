"use client";

import Image from "next/image";

import { CartItem as Item } from "@/context/CartContext";

type Props = {
  item: Item;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  removeFromCart: (id: number) => void;
};

export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: Props) {
  return (
    <div className="flex gap-4 border-b py-5">

      <Image
        src={item.image}
        alt={item.name}
        width={90}
        height={90}
        className="rounded-xl object-cover"
      />

      <div className="flex flex-1 flex-col">

        <h3 className="font-semibold">
          {item.name}
        </h3>

        <p className="mt-1 text-pink-600 font-bold">
          ₹{item.price}
        </p>

        <div className="mt-4 flex items-center gap-3">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="h-8 w-8 rounded-full border"
          >
            -
          </button>

          <span className="font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="h-8 w-8 rounded-full border"
          >
            +
          </button>

        </div>

      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>

    </div>
  );
}