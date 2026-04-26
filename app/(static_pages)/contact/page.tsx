import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hexashop - Contact",
  description: "Get in touch with Hexashop support team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-160px)] flex items-center justify-center py-10 md:py-14">
      <section className="w-full max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-green-600 dark:text-green-400 mb-3">
          Contact Us
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          We’d love to hear from you
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Send your message and our team will reply as soon as possible.
        </p>

        <form className="space-y-4 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 md:p-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111] px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111] px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111] px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your message"
            />
          </div>

          <button
            type="submit"
            className="inline-block rounded-md bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
