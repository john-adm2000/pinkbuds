export interface Product {
  id: number;
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
}