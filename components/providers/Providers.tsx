"use client";

import { ReactNode } from "react";

import { CartProvider } from "@/context/CartContext";
import { CheckoutProvider } from "@/context/CheckoutContext";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CartProvider>

      <CheckoutProvider>

        {children}

      </CheckoutProvider>

    </CartProvider>
  );
}