import ProductCard from "@/components/Products/ProductCard";
import { Product } from "@/types/product";

export const metadata = {
  title: "Products | Hexashop",
  description: "Browse our products",
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Products</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}