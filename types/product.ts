export interface Product {
  id: number;
  slug: string;

  name: string;
  category: string;
  description: string;

  price: number;
  oldPrice: number;

  rating: number;
  reviews: number;

  discount: string;

  stock: number;

  featured: boolean;
  bestseller: boolean;

  image: string;
  gallery: string[];

  sku: string;
  brand: string;
}