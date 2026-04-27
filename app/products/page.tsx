import ProductCard from "@/components/Products/ProductCard";
import { getProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getProducts();

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