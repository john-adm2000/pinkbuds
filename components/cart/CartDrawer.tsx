"use client";

import { useCart } from "@/context/CartContext";

import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  open,
  onClose,
}: Props) {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}

      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Shopping Cart
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        {/* Cart Content */}

        <div className="flex-1 overflow-y-auto px-6">

          {cart.length === 0 ? (

            <EmptyCart />

          ) : (

            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            ))

          )}

        </div>

        {/* Footer */}

        {cart.length > 0 && (

          <div className="border-t p-6">

            <div className="mb-6 flex items-center justify-between">

              <span className="text-lg font-semibold">
                Total
              </span>

              <span className="text-2xl font-bold text-pink-600">
                ₹{totalPrice}
              </span>

            </div>

            <button className="w-full rounded-full bg-pink-600 py-4 font-semibold text-white transition hover:bg-pink-700">
              Proceed To Checkout
            </button>

          </div>

        )}

      </aside>
    </>
  );
}