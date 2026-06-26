import PremiumProductCard from "./PremiumProductCard";

export default function PremiumProducts() {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Pink Roses",
      price: "₹699",
      oldPrice: "₹999",
      discount: "-30%",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
      title: "White Lily Bouquet",
      price: "₹899",
      oldPrice: "₹1199",
      discount: "-25%",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80",
      title: "Mixed Flower Basket",
      price: "₹1299",
      oldPrice: "₹1699",
      discount: "-20%",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-14 text-center">

        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
          BEST SELLERS
        </span>

        <h2 className="mt-5 text-5xl font-bold">
          Premium Collection
        </h2>

        <p className="mt-4 text-gray-500">
          Handcrafted bouquets loved by thousands of happy customers.
        </p>

      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (
          <PremiumProductCard
            key={product.title}
            image={product.image}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
          />
        ))}

      </div>

    </section>
  );
}