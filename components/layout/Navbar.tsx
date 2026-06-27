"use client";

import Link from "next/link";

import AnnouncementBar from "./AnnouncementBar";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <>
      <AnnouncementBar />

      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold text-pink-600"
          >
            🌸 PinkBuds
          </Link>

          {/* Navigation */}

          <nav className="hidden gap-8 md:flex">

            <Link
              href="/"
              className="transition hover:text-pink-600"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="transition hover:text-pink-600"
            >
              Shop
            </Link>

            <Link
              href="#"
              className="transition hover:text-pink-600"
            >
              Occasions
            </Link>

            <Link
              href="#"
              className="transition hover:text-pink-600"
            >
              Contact
            </Link>

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-3">

            <button className="rounded-full border px-4 py-2 transition hover:bg-pink-50">
              ❤️
            </button>

            <button className="relative rounded-full bg-pink-600 px-5 py-2 text-white transition hover:bg-pink-700">

              🛒 Cart

              {cartCount > 0 && (

                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">

                  {cartCount}

                </span>

              )}

            </button>

          </div>

        </div>

      </header>
    </>
  );
}