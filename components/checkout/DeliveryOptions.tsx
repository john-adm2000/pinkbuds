"use client";

import {
  DeliveryOption,
  useCheckout,
} from "@/context/CheckoutContext";

type Option = {
  id: DeliveryOption;
  title: string;
  description: string;
};

const options: Option[] = [
  {
    id: "standard",
    title: "Standard Delivery",
    description: "Delivered in 2-3 Days",
  },
  {
    id: "same-day",
    title: "Same Day Delivery",
    description: "Delivered Today (+₹199)",
  },
  {
    id: "midnight",
    title: "Midnight Delivery",
    description: "Delivered between 11PM - 12AM (+₹299)",
  },
];

export default function DeliveryOptions() {
  const {
    deliveryOption,
    setDeliveryOption,
  } = useCheckout();

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">
        Delivery Options
      </h2>

      <div className="space-y-4">

        {options.map((option) => (

          <label
            key={option.id}
            className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition

            ${
              deliveryOption === option.id
                ? "border-pink-600 bg-pink-50"
                : "border-gray-200"
            }`}
          >

            <div>

              <p className="font-semibold">
                {option.title}
              </p>

              <p className="text-sm text-gray-500">
                {option.description}
              </p>

            </div>

            <input
              type="radio"
              checked={
                deliveryOption === option.id
              }
              onChange={() =>
                setDeliveryOption(option.id)
              }
            />

          </label>

        ))}

      </div>

    </div>
  );
}