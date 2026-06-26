import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  discount: string;
  image: string;
};

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
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