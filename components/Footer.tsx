export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">☀️</span>
              <span className="text-xl font-bold text-white">Solar Guy</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Helping homeowners across the country go solar — honestly,
              transparently, and without the pressure.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Benefits", href: "#benefits" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Book Consult", href: "#book" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="tel:+12158057864"
                  className="hover:text-green-400 transition-colors"
                >
                  📞 (215) 805-7864
                </a>
              </li>
              <li>
                <a
                  href="mailto:cmanemcfadden@trinity-solar.com"
                  className="hover:text-green-400 transition-colors"
                >
                  ✉️ cmanemcfadden@trinity-solar.com
                </a>
              </li>
              <li className="text-gray-500 text-xs mt-2">
                {/* TODO: Replace with your actual service area */}
                Serving the greater Phoenix area & beyond
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} Solar Guy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
