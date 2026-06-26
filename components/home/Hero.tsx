import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-white to-pink-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">

        {/* LEFT */}

        <div>

          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            🌸 Fresh Flowers • Same Day Delivery
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
            Fresh Flowers
            <br />
            For Every
            <br />
            <span className="text-pink-600">
              Beautiful Moment
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Handcrafted bouquets made with love and delivered fresh
            across India. Celebrate birthdays, anniversaries,
            weddings and every special moment.
          </p>

          <HeroButtons />

          <HeroStats />

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80"
            alt="Flower Bouquet"
            className="rounded-[40px] shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}