import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  return (
    <>
      <AnnouncementBar />

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-pink-600">
            🌸 PinkBuds
          </div>

          {/* Navigation */}
          <nav className="hidden gap-8 md:flex">
            <a href="#" className="hover:text-pink-600 transition">
              Home
            </a>

            <a href="#" className="hover:text-pink-600 transition">
              Shop
            </a>

            <a href="#" className="hover:text-pink-600 transition">
              Occasions
            </a>

            <a href="#" className="hover:text-pink-600 transition">
              Contact
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <button className="rounded-full border px-4 py-2 hover:bg-pink-50">
              ❤️
            </button>

            <button className="rounded-full bg-pink-600 px-5 py-2 text-white hover:bg-pink-700">
              Cart 🛒
            </button>

          </div>

        </div>
      </header>
    </>
  );
}