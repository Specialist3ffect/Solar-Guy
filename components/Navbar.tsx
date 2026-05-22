"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookClick = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☀️</span>
            <span className="text-xl font-bold text-gray-900">Solar Guy</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#benefits"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              Testimonials
            </a>
          </div>

          <button
            onClick={handleBookClick}
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Book Free Consult
          </button>
        </div>
      </div>
    </nav>
  );
}
