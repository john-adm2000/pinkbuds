import OccasionCard from "./OccasionCard";

export default function Occasions() {
  const occasions = [
    { emoji: "🌹", title: "Roses" },
    { emoji: "🎂", title: "Birthday" },
    { emoji: "❤️", title: "Anniversary" },
    { emoji: "💐", title: "Bouquets" },
    { emoji: "🪴", title: "Plants" },
    { emoji: "🎁", title: "Gifts" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-4 text-center text-4xl font-bold">
        Shop By Occasion
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
        Choose the perfect flowers for every special moment.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {occasions.map((item) => (
          <OccasionCard
            key={item.title}
            emoji={item.emoji}
            title={item.title}
          />
        ))}
      </div>

    </section>
  );
}