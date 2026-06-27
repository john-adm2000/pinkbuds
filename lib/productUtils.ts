import { Product } from "@/types/product";

export function filterProducts(
  products: Product[],
  search: string,
  category: string
): Product[] {
  return products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });
}

export function sortProducts(
  products: Product[],
  sort: string
): Product[] {
  const sorted = [...products];

  switch (sort) {
    case "Price Low":
      sorted.sort((a, b) => a.price - b.price);
      break;

    case "Price High":
      sorted.sort((a, b) => b.price - a.price);
      break;

    case "Rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;

    case "Best Selling":
      sorted.sort((a, b) => b.reviews - a.reviews);
      break;

    default:
      break;
  }

  return sorted;
}