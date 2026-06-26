export default function FeatureBar() {
  const features = [
    {
      icon: "🚚",
      title: "Same Day Delivery",
      desc: "Fast delivery across India",
    },
    {
      icon: "🌸",
      title: "Fresh Flowers",
      desc: "Handpicked every morning",
    },
    {
      icon: "🛡️",
      title: "Secure Payment",
      desc: "100% Safe Checkout",
    },
    {
      icon: "🎁",
      title: "Gift Packaging",
      desc: "Beautiful premium wrapping",
    },
  ];

  return (
    <section className="mx-auto -mt-10 max-w-7xl px-6 relative z-10">
      <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-xl md:grid-cols-4">
        {features.map((item) => (
          <div key={item.title} className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-3xl">
              {item.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}