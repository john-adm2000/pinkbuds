export default function FeaturedProducts() {
  return (
    <section className="px-8 pb-20">
      <h3 className="mb-10 text-center text-3xl font-bold">
        🌼 Best Sellers
      </h3>

      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-xl bg-white p-5 text-center shadow-md">
          <h4 className="text-lg font-semibold">Red Roses</h4>
          <p className="text-gray-500">₹499</p>

          <button className="mt-4 rounded-full bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
            Add to Cart
          </button>
        </div>

        <div className="rounded-xl bg-white p-5 text-center shadow-md">
          <h4 className="text-lg font-semibold">White Lilies</h4>
          <p className="text-gray-500">₹699</p>

          <button className="mt-4 rounded-full bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
            Add to Cart
          </button>
        </div>

        <div className="rounded-xl bg-white p-5 text-center shadow-md">
          <h4 className="text-lg font-semibold">Mixed Bouquet</h4>
          <p className="text-gray-500">₹899</p>

          <button className="mt-4 rounded-full bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
            Add to Cart
          </button>
        </div>

      </div>
    </section>
  );
}