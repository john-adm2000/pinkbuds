export default function AnnouncementBar() {
  return (
    <div className="bg-pink-600 text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 py-2 px-4">

        <span>🚚 Free Same Day Delivery</span>

        <span className="hidden md:block">
          🌸 Fresh Flowers Handcrafted Daily
        </span>

        <span className="hidden lg:block">
          💳 100% Secure Payments
        </span>

      </div>
    </div>
  );
}