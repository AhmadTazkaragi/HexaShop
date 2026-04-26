"use client";

import Link from "next/link";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
      <Link href={`/products/${product.id}`} className="block">
        <div className="bg-gray-50 dark:bg-[#111] rounded-xl h-52 flex items-center justify-center p-4 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <h3 className="font-semibold text-sm md:text-base line-clamp-2 min-h-[2.8rem]">
          {product.title}
        </h3>
      </Link>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold text-green-600">${product.price}</span>

        <button
          type="button"
          onClick={() => console.log(`Added to cart: ${product.title}`)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}


