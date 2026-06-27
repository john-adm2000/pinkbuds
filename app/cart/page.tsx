"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";

import Navbar from "@/components/layout/Navbar";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="mb-8">

            <h1 className="text-4xl font-bold">
              Shopping Cart
            </h1>

            <p className="mt-2 text-gray-500">
              Review your selected flowers.
            </p>

          </div>

          {cart.length === 0 ? (

            <EmptyCart />

          ) : (

            <div className="grid gap-10 lg:grid-cols-3">

              <div className="lg:col-span-2 rounded-3xl bg-white p-6 shadow-lg">

                {cart.map((item) => (

                  <CartItem
                    key={item.id}
                    item={item}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                  />

                ))}

              </div>

              <CartSummary />

            </div>

          )}

        </div>

      </main>
    </>
  );
}