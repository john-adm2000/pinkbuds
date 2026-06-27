"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import ProductGrid from "@/components/shop/ProductGrid";
import SearchBar from "@/components/shop/SearchBar";

import { products } from "@/components/data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Latest");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    switch (sort) {
      case "Price Low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "Price High":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "Rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "Best Selling":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;

      default:
        break;
    }

    return filtered;
  }, [search, category, sort]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

        {/* Header */}
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

                <ul className="space-y-2">

                  {[
                    "All",
                    "Roses",
                    "Lilies",
                    "Bouquets",
                    "Gifts",
                    "Tulips",
                  ].map((item) => (

                    <li
                      key={item}
                      onClick={() => setCategory(item)}
                      className={`cursor-pointer rounded-lg px-3 py-2 transition ${
                        category === item
                          ? "bg-pink-100 font-semibold text-pink-600"
                          : "text-gray-600 hover:bg-pink-50"
                      }`}
                    >
                      {item}
                    </li>

                  ))}

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

          {/* Products */}
          <div className="lg:col-span-3">

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <h2 className="text-2xl font-bold">
                {filteredProducts.length} Products
              </h2>

              <div className="flex flex-col gap-4 md:flex-row">

                <SearchBar
                  search={search}
                  setSearch={setSearch}
                />

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-xl border px-4 py-2"
                >
                  <option value="Latest">Latest</option>
                  <option value="Price Low">Price Low → High</option>
                  <option value="Price High">Price High → Low</option>
                  <option value="Rating">Rating</option>
                  <option value="Best Selling">Best Selling</option>
                </select>

              </div>

            </div>

            <ProductGrid products={filteredProducts} />

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}