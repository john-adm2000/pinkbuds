"use client";

type FreeShippingBarProps = {
  subtotal: number;
};

export default function FreeShippingBar({
  subtotal,
}: FreeShippingBarProps) {
  const target = 999;

  const progress = Math.min(
    (subtotal / target) * 100,
    100
  );

  const remaining = Math.max(
    target - subtotal,
    0
  );

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-lg">

      {subtotal >= target ? (

        <p className="font-semibold text-green-600">
          🎉 Congratulations! You unlocked FREE Shipping.
        </p>

      ) : (

        <>
          <p className="mb-4 text-gray-600">
            Add
            <span className="font-semibold text-pink-600">
              {" "}₹{remaining}
            </span>
            {" "}more to get FREE shipping.
          </p>

          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-pink-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>
        </>

      )}

    </div>
  );
}