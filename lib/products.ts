import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "MacBook Air M3",
    price: 1299,
    description: "Apple laptop",
    category: "laptop",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "NovaBook Pro 15",
    price: 1099,
    description: "Powerful performance for creators.",
    category: "laptop",
    image:
      "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "GamingForce G5",
    price: 1399,
    description: "Gaming laptop with dedicated GPU.",
    category: "laptop",
    image:
      "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Galaxy Grand prime",
    price: 999,
    description: "Apple smartphone",
    category: "mobile",
    image:
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    title: "PixelCore M1",
    price: 599,
    description: "Clean UI and excellent camera.",
    category: "mobile",
    image:
      "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    title: "UltraPhone 16",
    price: 1099,
    description: "Top-tier phone for power users.",
    category: "mobile",
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 7,
    title: "Samsung Odyssey G5",
    price: 429,
    description: "Gaming monitor",
    category: "screens",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 8,
    title: "UltraView 27 QHD",
    price: 299,
    description: "Sharp QHD monitor for office.",
    category: "screens",
    image:
      "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 9,
    title: "ProColor 32 4K",
    price: 549,
    description: "4K color-accurate display.",
    category: "screens",
    image:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 10,
    title: "StudioDisplay 27",
    price: 499,
    description: "Design-focused IPS panel.",
    category: "screens",
    image:
      "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const getProducts = () => products;
export const getProductById = (id: number) => products.find((p) => p.id === id);