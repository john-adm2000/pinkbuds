"use client";

import { useState } from "react";

type CouponBoxProps = {
  onApply: (code: string) => void;
};

export default function CouponBox({
  onApply,
}: CouponBoxProps) {
  const [code, setCode] = useState("");

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-2xl font-bold">
        Coupon Code
      </h2>

      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Enter coupon code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-pink-500"
        />

        <button
          onClick={() => onApply(code)}
          className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700"
        >
          Apply
        </button>

      </div>

      <p className="mt-4 text-sm text-gray-500">
        Try:
        <span className="ml-2 rounded bg-pink-100 px-2 py-1 font-semibold text-pink-600">
          WELCOME10
        </span>
      </p>

    </div>
  );
}