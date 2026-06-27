type ShopHeaderProps = {
  title: string;
  description: string;
};

export default function ShopHeader({
  title,
  description,
}: ShopHeaderProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
        Premium Collection
      </span>

      <h1 className="mt-5 text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-4 max-w-2xl text-gray-500">
        {description}
      </p>

    </section>
  );
}