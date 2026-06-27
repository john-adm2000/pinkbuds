"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

type ProductActionsProps = {
  product: Product;
};

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const router = useRouter();

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);

    router.push("/cart");
  };

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <button
        onClick={handleAddToCart}
        className="rounded-full bg-pink-600 px-8 py-4 font-semibold text-white transition hover:bg-pink-700"
      >
        Add To Cart
      </button>

      <button
        onClick={handleBuyNow}
        className="rounded-full border border-pink-600 px-8 py-4 font-semibold text-pink-600 transition hover:bg-pink-50"
      >
        Buy Now
      </button>

    </div>
  );
}