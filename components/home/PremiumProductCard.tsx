type ProductProps = {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
};

export default function PremiumProductCard({
  image,
  title,
  price,
  oldPrice,
  discount,
}: ProductProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Discount */}
        <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-sm font-semibold text-white">
          {discount}
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          ❤️
        </button>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="text-yellow-500">
          ⭐⭐⭐⭐⭐
        </div>

        <h3 className="mt-3 text-xl font-semibold">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-3">

          <span className="text-2xl font-bold text-pink-600">
            {price}
          </span>

          <span className="text-gray-400 line-through">
            {oldPrice}
          </span>

        </div>

        <button className="mt-6 w-full rounded-full bg-pink-600 py-3 text-white transition hover:bg-pink-700">
          Add To Cart
        </button>

      </div>

    </div>
  );
}