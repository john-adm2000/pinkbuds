import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">

      <div className="text-7xl">
        🛒
      </div>

      <h2 className="mt-6 text-2xl font-bold">
        Your Cart is Empty
      </h2>

      <p className="mt-3 text-gray-500">
        Looks like you haven't added any flowers yet.
      </p>

      <Link
        href="/shop"
        className="mt-8 rounded-full bg-pink-600 px-8 py-3 font-semibold text-white transition hover:bg-pink-700"
      >
        Continue Shopping
      </Link>

    </div>
  );
}