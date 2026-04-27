"use client";

import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-[#161616]">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-44 object-contain mb-3"
          loading="lazy"
        />
        <h3 className="font-semibold line-clamp-2 min-h-[3rem]">{product.title}</h3>
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold text-green-600">${product.price}</span>
        <button
          type="button"
          onClick={() => console.log(`Added to cart: ${product.title}`)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition cursor-pointer text-sm"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}


