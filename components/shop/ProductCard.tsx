import Image from "next/image";

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  discount: string;
};

export default function ProductCard({
  image,
  name,
  price,
  oldPrice,
  rating,
  reviews,
  discount,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}

      <div className="relative overflow-hidden">

        <Image
  src={image}
  alt={name}
  width={600}
  height={600}
  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
/>
        />

        <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-sm font-semibold text-white">
          {discount}
        </span>

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:scale-110 transition">
          ❤️
        </button>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="text-yellow-500">

          ⭐⭐⭐⭐⭐

          <span className="ml-2 text-sm text-gray-500">
            ({reviews})
          </span>

        </div>

        <h3 className="mt-3 text-xl font-semibold">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-3">

          <span className="text-2xl font-bold text-pink-600">
            ₹{price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{oldPrice}
          </span>

        </div>

        <div className="mt-4 text-sm text-green-600">
          🚚 Delivery Tomorrow
        </div>

        <button className="mt-6 w-full rounded-full bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700">
          Add To Cart
        </button>

      </div>

    </div>
  );
}