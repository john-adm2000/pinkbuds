"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ShopSidebar from "@/components/shop/ShopSidebar";
import ProductGrid from "@/components/shop/ProductGrid";

import { products } from "@/components/data/products";

import {
  filterProducts,
  sortProducts,
} from "@/lib/productUtils";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Latest");
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(
      products,
      search,
      category
    ).filter((product) => product.price <= maxPrice);

    return sortProducts(filtered, sort);
  }, [search, category, sort, maxPrice]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

        <ShopHeader
          title="Shop Fresh Flowers"
          description="Discover handcrafted bouquets, premium roses, lilies, anniversary flowers and gifts delivered fresh across India."
        />

        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 lg:grid-cols-4">

          <ShopSidebar
            category={category}
            setCategory={setCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />

          <div className="lg:col-span-3">

            <ShopToolbar
              totalProducts={filteredProducts.length}
              search={search}
              setSearch={setSearch}
              sort={sort}
              setSort={setSort}
            />

            <ProductGrid
              products={filteredProducts}
            />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}