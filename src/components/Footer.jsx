import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10 border-b border-slate-100">
          
          {/* Brand Info (Centered on Mobile, Left-aligned on Desktop) */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center">
              <img 
                src="/logo-text.png" 
                alt="DevStack Full Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mt-4 max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links with Dots on Mobile */}
            <div className="flex items-center gap-2 sm:gap-4 mt-6 text-xs sm:text-sm font-semibold text-slate-700">
              <a href="#github" className="hover:text-[#e62072] transition-colors">GitHub</a>
              <span className="text-slate-300">•</span>
              <a href="#twitter" className="hover:text-[#e62072] transition-colors">Twitter</a>
              <span className="text-slate-300">•</span>
              <a href="#linkedin" className="hover:text-[#e62072] transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Links: Hidden on Mobile as per design, visible on desktop */}
          <div className="hidden md:block">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Product</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500 font-normal">
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500 font-normal">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500 font-normal">
              <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar (Centered on Mobile) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;