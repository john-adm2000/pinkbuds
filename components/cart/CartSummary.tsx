"use client";
import FreeShippingBar from "./FreeShippingBar";
import { useMemo, useState } from "react";
import Link from "next/link";

import { useCart } from "@/context/CartContext";
import CouponBox from "./CouponBox";

export default function CartSummary() {
  const { totalPrice } = useCart();

  const [discount, setDiscount] = useState(0);

  const shipping = totalPrice > 999 ? 0 : 99;

  const gst = Math.round((totalPrice - discount) * 0.18);

  const grandTotal = useMemo(() => {
    return totalPrice - discount + shipping + gst;
  }, [totalPrice, shipping, gst, discount]);

  const applyCoupon = (code: string) => {
    const coupon = code.trim().toUpperCase();

    if (coupon === "WELCOME10") {
      setDiscount(Math.round(totalPrice * 0.1));

      alert("Coupon Applied Successfully 🎉");
    } else {
      setDiscount(0);

      alert("Invalid Coupon");
    }
  };

  return (
    <div className="space-y-6">

      <CouponBox onApply={applyCoupon} />
        <FreeShippingBar
          subtotal={totalPrice}
       />

      <div className="rounded-3xl border bg-white p-6 shadow-lg">

        <h2 className="mb-6 text-2xl font-bold">
          Order Summary
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
          </div>

          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span>₹{gst}</span>
          </div>

          <hr />

          <div className="flex justify-between text-2xl font-bold">

            <span>Total</span>

            <span className="text-pink-600">
              ₹{grandTotal}
            </span>

          </div>

        </div>

        <button className="mt-8 w-full rounded-full bg-pink-600 py-4 font-semibold text-white hover:bg-pink-700">
          Proceed To Checkout
        </button>

        <Link
          href="/shop"
          className="mt-5 block text-center text-pink-600 hover:underline"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}