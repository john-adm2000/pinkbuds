import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "luxury-pink-roses",
    sku: "PB-ROSE-001",
    brand: "PinkBuds",

    name: "Luxury Pink Roses",
    category: "Roses",

    description:
      "Fresh premium pink rose bouquet with elegant wrapping. Perfect for birthdays, anniversaries and romantic occasions.",

    price: 699,
    oldPrice: 999,

    rating: 4.9,
    reviews: 128,

    discount: "-30%",

    stock: 15,

    featured: true,
    bestseller: true,

    image: "/images/products/rose.png",

    gallery: [
      "/images/products/rose.png",
      "/images/products/rose.png",
      "/images/products/rose.png",
    ],
  },

  {
    id: 2,
    slug: "white-lily-bouquet",
    sku: "PB-LILY-001",
    brand: "PinkBuds",

    name: "White Lily Bouquet",
    category: "Lilies",

    description:
      "Elegant white lily bouquet for weddings, anniversaries and special celebrations.",

    price: 899,
    oldPrice: 1199,

    rating: 4.8,
    reviews: 96,

    discount: "-25%",

    stock: 10,

    featured: true,
    bestseller: false,

    image: "/images/products/lily.png",

    gallery: [
      "/images/products/lily.png",
      "/images/products/lily.png",
      "/images/products/lily.png",
    ],
  },

  {
    id: 3,
    slug: "mixed-flower-basket",
    sku: "PB-BASKET-001",
    brand: "PinkBuds",

    name: "Mixed Flower Basket",
    category: "Bouquets",

    description:
      "Beautiful mixed flower basket made with fresh seasonal flowers.",

    price: 1299,
    oldPrice: 1699,

    rating: 5.0,
    reviews: 212,

    discount: "-20%",

    stock: 8,

    featured: true,
    bestseller: true,

    image: "/images/products/basket.png",

    gallery: [
      "/images/products/basket.png",
      "/images/products/basket.png",
      "/images/products/basket.png",
    ],
  },

  {
    id: 4,
    slug: "red-rose-box",
    sku: "PB-GIFT-001",
    brand: "PinkBuds",

    name: "Red Rose Box",
    category: "Gifts",

    description:
      "Luxury red rose gift box crafted for unforgettable moments.",

    price: 1499,
    oldPrice: 1999,

    rating: 4.9,
    reviews: 88,

    discount: "-25%",

    stock: 12,

    featured: false,
    bestseller: true,

    image: "/images/products/giftbox.png",

    gallery: [
      "/images/products/giftbox.png",
      "/images/products/giftbox.png",
      "/images/products/giftbox.png",
    ],
  },

  {
    id: 5,
    slug: "romantic-bouquet",
    sku: "PB-BOUQUET-001",
    brand: "PinkBuds",

    name: "Romantic Bouquet",
    category: "Bouquets",

    description:
      "Romantic bouquet prepared with premium fresh flowers for your loved ones.",

    price: 999,
    oldPrice: 1399,

    rating: 4.7,
    reviews: 65,

    discount: "-20%",

    stock: 20,

    featured: false,
    bestseller: false,

    image: "/images/products/bouquet.png",

    gallery: [
      "/images/products/bouquet.png",
      "/images/products/bouquet.png",
      "/images/products/bouquet.png",
    ],
  },

  {
    id: 6,
    slug: "pink-tulips",
    sku: "PB-TULIP-001",
    brand: "PinkBuds",

    name: "Pink Tulips",
    category: "Tulips",

    description:
      "Premium pink tulips bouquet with fresh blossoms and elegant wrapping.",

    price: 799,
    oldPrice: 1099,

    rating: 4.8,
    reviews: 104,

    discount: "-25%",

    stock: 18,

    featured: true,
    bestseller: false,

    image: "/images/products/tulip.png",

    gallery: [
      "/images/products/tulip.png",
      "/images/products/tulip.png",
      "/images/products/tulip.png",
    ],
  },
];