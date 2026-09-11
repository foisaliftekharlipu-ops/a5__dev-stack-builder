import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with logo.png */}
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="DevStack Icon" 
              className="w-8 h-8 object-contain rounded-md"
            />
            <span className="text-xl font-bold text-[#0f172a] tracking-tight">
              Dev<span className="text-[#e62072]">Stack</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="text-slate-900 font-semibold">Home</a>
            <a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-sm font-semibold text-[#0f172a] hover:text-[#e62072] transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 rounded-full text-white font-semibold text-sm bg-[#e62072] hover:bg-[#d41865] transition-all shadow-sm">
              Sign Up
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 pt-2 pb-6 space-y-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-semibold text-slate-900">Home</a>
          <a href="#technologies" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700">Technologies</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700">Contact</a>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button className="w-full py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-700">
              Sign In
            </button>
            <button className="w-full py-2.5 rounded-full text-white font-semibold text-sm bg-[#e62072]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;