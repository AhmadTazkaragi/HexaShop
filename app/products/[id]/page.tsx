import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Product } from "@/types/product";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: Promise<{ id: string }>;
};

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return (await res.json()) as Product;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  return {
    title: product ? `${product.title} | Hexashop` : "Product | Hexashop",
    description: product?.description ?? "Product details",
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <main className="py-10">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-md h-auto object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>
          <p className="text-xl font-bold text-green-600 mb-5">
            ${product.price}
          </p>
          <button
            type="button"
            onClick={() => console.log(`Added to cart: ${product.title}`)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
