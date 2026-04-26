import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hexashop",
  description:
    "Discover a world of endless shopping possibilities.",
};

export default function HomePage() {
  return (
    <main className="py-10 md:py-16 ">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Your one-stop e-commerce destination!
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover endless shopping possibilities from home.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-md transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <Image
            src="/Hero1.svg"
            alt="Hero"
            width={560}
            height={350}
            className="w-full max-w-[560px] h-auto object-contain"
            priority
          />
        </div>
      </section>
    </main>
  );
}