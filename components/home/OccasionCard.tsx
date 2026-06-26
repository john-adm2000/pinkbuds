type OccasionCardProps = {
  emoji: string;
  title: string;
};

export default function OccasionCard({
  emoji,
  title,
}: OccasionCardProps) {
  return (
    <div className="group cursor-pointer rounded-3xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-pink-300">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-5xl transition group-hover:scale-110">
        {emoji}
      </div>

      <h3 className="mt-5 text-lg font-semibold">
        {title}
      </h3>

    </div>
  );
}