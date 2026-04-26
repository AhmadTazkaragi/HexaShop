"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { useTheme } from "@/context/ThemeProvider";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="py-6 bg-white dark:bg-[#111] text-black dark:text-white transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
      <Container>
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider uppercase">
            <Link href="/">HEXASHOP</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            <Button />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-xl hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            
            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="text-xl hover:opacity-70 transition-opacity"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Menu Button */}
            <button
              className="p-2 rounded"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2">
              <Button />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;