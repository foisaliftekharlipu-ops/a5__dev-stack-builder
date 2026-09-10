import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-200">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[66px]">
          

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 -ml-2 text-gray-700 hover:text-[#d91b7e] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2.5 select-none">
              <img
                src="/logo.png"
                alt="DevStack Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-base font-bold tracking-tight text-slate-900">
                <span className="font-bold text-[#0f172b]">Dev </span>
                <span className="font-bold text-[#e70a7b]">Stack</span>
              </span>
            </a>
          </div>


          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[15px]">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`transition-colors duration-150 ${
                    isActive
                      ? "text-[#d91b7e] font-semibold"
                      : "text-[#0f172b]/80 hover:text-[#d91b7e]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button className="text-[15px] font-semibold text-[#0f172b] hover:text-[#d91b7e] transition-colors px-2 py-1.5">
              Sign In
            </button>
            <button className="text-[14px] font-semibold text-white px-6 py-2.5 rounded-full bg-[#d91b7e] hover:bg-[#c0156e] active:scale-95 transition-all shadow-sm">
              Sign Up
            </button>
          </div>

        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1 shadow-md">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "text-[#d91b7e] font-semibold bg-pink-50"
                    : "text-[#0f172b] hover:text-[#d91b7e] hover:bg-pink-50/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;