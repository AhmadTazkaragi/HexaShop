import type { Metadata } from "next";
import ProductCard from "@/components/Products/ProductCard";
import { Product } from "@/types/product";

export const metadata: Metadata = {
  title: "Products | Hexashop",
  description: "Browse all products",
};

export const dynamic = "force-dynamic"; // يمنع prerender وقت build
export const revalidate = 0;

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) return [];
    const data = (await res.json()) as Product[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products available right now.</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}