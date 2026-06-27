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
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Product Image */}

      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-sm font-semibold text-white">
          {discount}
        </span>

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:scale-110">
          ❤️
        </button>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-center gap-2 text-sm">

          <span className="font-semibold text-yellow-500">
            ⭐ {rating}
          </span>

          <span className="text-gray-500">
            ({reviews} Reviews)
          </span>

        </div>

        <h3 className="mt-3 text-xl font-semibold">
          {name}
        </h3>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-2xl font-bold text-pink-600">
            ₹{price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{oldPrice}
          </span>

        </div>

        <p className="mt-4 text-sm text-green-600">
          🚚 Delivery Tomorrow
        </p>

        <button className="mt-6 w-full rounded-full bg-pink-600 py-3 font-semibold text-white transition hover:bg-pink-700">
          Add To Cart
        </button>

      </div>

    </div>
  );
}