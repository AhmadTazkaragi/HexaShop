import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hexashop - About",
  description: "Learn more about Hexashop and our mission.",
};

const features = [
  {
    title: "Trusted Quality",
    desc: "We carefully select products to ensure quality and reliability.",
  },
  {
    title: "Fast Delivery",
    desc: "Quick and secure shipping to get your order on time.",
  },
  {
    title: "Customer First",
    desc: "Friendly support team ready to help you anytime.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-10 md:py-14">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-green-600 dark:text-green-400 mb-3">
            About Hexashop
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Your trusted online shopping destination
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hexashop is built to make shopping simple, fast, and enjoyable. We
            provide curated products, secure checkout, and a smooth experience
            across all devices.
          </p>

          <div className="flex gap-3">
            <Link
              href="/products"
              className="px-5 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white transition"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

    
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-5"
          >
            <h2 className="font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.desc}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
