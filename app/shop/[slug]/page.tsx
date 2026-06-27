import { notFound } from "next/navigation";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";

import { products } from "@/components/data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50">

        <div className="mx-auto max-w-7xl px-6 py-10">

          {/* Breadcrumb */}

          <div className="mb-8 text-sm text-gray-500">

            <Link
              href="/"
              className="hover:text-pink-600"
            >
              Home
            </Link>

            {" / "}

            <Link
              href="/shop"
              className="hover:text-pink-600"
            >
              Shop
            </Link>

            {" / "}

            <span className="text-pink-600">
              {product.name}
            </span>

          </div>

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Gallery */}

            <ProductGallery
              images={product.gallery}
              name={product.name}
            />

            {/* Product Details */}

            <div>

              <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
                {product.category}
              </span>

              <h1 className="mt-6 text-5xl font-bold">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-3">

                <span className="text-yellow-500">
                  ⭐ {product.rating}
                </span>

                <span className="text-gray-500">
                  ({product.reviews} Reviews)
                </span>

              </div>

              <div className="mt-6 flex items-center gap-4">

                <span className="text-4xl font-bold text-pink-600">
                  ₹{product.price}
                </span>

                <span className="text-xl text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>

              </div>

              <div className="mt-6">

                {product.stock > 0 ? (
                  <span className="font-semibold text-green-600">
                    ✓ In Stock ({product.stock})
                  </span>
                ) : (
                  <span className="font-semibold text-red-600">
                    Out Of Stock
                  </span>
                )}

              </div>

              <p className="mt-8 leading-8 text-gray-600">
                {product.description}
              </p>

              <ProductActions
                product={product}
              />

            </div>

          </div>

        </div>

      </main>
    </>
  );
}