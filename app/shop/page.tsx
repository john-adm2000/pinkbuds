import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

        {/* Page Header */}

        <section className="mx-auto max-w-7xl px-6 py-16">

          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Premium Collection
          </span>

          <h1 className="mt-5 text-5xl font-bold">
            Shop Fresh Flowers
          </h1>

          <p className="mt-4 max-w-2xl text-gray-500">
            Discover handcrafted bouquets, premium roses, lilies,
            anniversary flowers and gifts delivered fresh across India.
          </p>

        </section>

        {/* Shop Layout */}

        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-4">

          {/* Sidebar */}

          <aside className="rounded-3xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-2xl font-bold">
              Filters
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="mb-3 font-semibold">
                  Categories
                </h3>

                <ul className="space-y-2 text-gray-600">

                  <li>🌹 Roses</li>
                  <li>🌸 Lilies</li>
                  <li>💐 Bouquets</li>
                  <li>🪴 Plants</li>
                  <li>🎁 Gifts</li>

                </ul>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">
                  Price
                </h3>

                <input
                  type="range"
                  className="w-full"
                />

              </div>

            </div>

          </aside>

          {/* Product Area */}

          <div className="lg:col-span-3">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                120 Products
              </h2>

              <select className="rounded-xl border px-4 py-2">

                <option>Latest</option>

                <option>Price Low → High</option>

                <option>Price High → Low</option>

                <option>Best Selling</option>

              </select>

            </div>

            <ProductGrid />

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}