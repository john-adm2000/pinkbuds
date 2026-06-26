export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button className="rounded-full bg-pink-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-pink-700 transition">
        Shop Now →
      </button>

      <button className="rounded-full border-2 border-pink-600 px-8 py-4 font-semibold text-pink-600 hover:bg-pink-50 transition">
        Explore Collection
      </button>
    </div>
  );
}