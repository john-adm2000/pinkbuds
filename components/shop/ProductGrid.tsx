import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {

  if (products.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-20 text-center shadow">

        <h2 className="text-2xl font-bold">
          😔 No Products Found
        </h2>

        <p className="mt-3 text-gray-500">
          Try another search or category.
        </p>

      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          oldPrice={product.oldPrice}
          rating={product.rating}
          reviews={product.reviews}
          discount={product.discount}
        />

      ))}

    </div>
  );
}