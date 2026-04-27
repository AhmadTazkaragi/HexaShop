import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import { ThemeProvider } from "@/context/ThemeProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hexashop",
  description: "Your one-stop e-commerce destination",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
    <body
  className={`${montserrat.className} min-h-screen flex flex-col bg-white text-black dark:bg-[#111] dark:text-white transition-colors duration-300`}
>
        <ThemeProvider>
          <NavBar />

          <main className="flex-1">
            <Container>{children}</Container>
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}