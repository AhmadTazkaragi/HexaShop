export type ProductCategory = "laptop" | "mobile" | "screens";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
};