"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { totalPrice } = useCart();

  const shipping = totalPrice > 999 ? 0 : 99;

  const gst = Math.round(totalPrice * 0.18);

  const grandTotal = totalPrice + shipping + gst;

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>

          <span>
            {shipping === 0 ? "FREE" : `₹${shipping}`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹{gst}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>Total</span>

          <span className="text-pink-600">
            ₹{grandTotal}
          </span>

        </div>

      </div>

      <button className="mt-8 w-full rounded-full bg-pink-600 py-4 font-semibold text-white transition hover:bg-pink-700">
        Proceed To Checkout
      </button>

      <Link
        href="/shop"
        className="mt-4 block text-center text-pink-600 hover:underline"
      >
        Continue Shopping
      </Link>

    </div>
  );
}