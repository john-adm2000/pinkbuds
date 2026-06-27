"use client";

import Link from "next/link";
import Image from "next/image";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Product Image */}

      <Link
        href={`/shop/${product.slug}`}
        className="relative block overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-sm font-semibold text-white">
          {product.discount}
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:scale-110"
        >
          ❤️
        </button>
      </Link>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-center gap-2">

          <span className="font-semibold text-yellow-500">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            ({product.reviews})
          </span>

        </div>

        <Link href={`/shop/${product.slug}`}>

          <h3 className="mt-3 text-xl font-semibold hover:text-pink-600 transition">
            {product.name}
          </h3>

        </Link>

        <p className="mt-2 text-sm text-gray-500">
          {product.brand}
        </p>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold text-pink-600">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>

        </div>

        <div className="mt-3">

          {product.stock > 0 ? (

            <span className="text-sm font-medium text-green-600">
              ✓ In Stock
            </span>

          ) : (

            <span className="text-sm font-medium text-red-600">
              Out of Stock
            </span>

          )}

        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 w-full rounded-full bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700"
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}