"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type DeliveryOption =
  | "standard"
  | "same-day"
  | "midnight";

interface CheckoutContextType {
  deliveryOption: DeliveryOption;

  setDeliveryOption: (
    option: DeliveryOption
  ) => void;

  deliveryCharge: number;
}

const CheckoutContext =
  createContext<CheckoutContextType | null>(
    null
  );

export function CheckoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [deliveryOption, setDeliveryOption] =
    useState<DeliveryOption>("standard");

  const deliveryCharge =
    deliveryOption === "same-day"
      ? 199
      : deliveryOption === "midnight"
      ? 299
      : 0;

  return (
    <CheckoutContext.Provider
      value={{
        deliveryOption,
        setDeliveryOption,
        deliveryCharge,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context =
    useContext(CheckoutContext);

  if (!context) {
    throw new Error(
      "useCheckout must be used inside CheckoutProvider"
    );
  }

  return context;
}