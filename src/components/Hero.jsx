import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-8 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-[#0f172a] block">
                Build Your Ideal
              </span>
              <span className="brand-gradient bg-clip-text text-transparent block mt-1">
                Development Stack
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 sm:mt-5 max-w-md lg:max-w-xl">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
              <button className="flex-1 sm:flex-initial px-6 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm brand-gradient hover:opacity-95 shadow-sm transition-all active:scale-[0.98]">
                Explore Technologies
              </button>
              <button className="flex-1 sm:flex-initial px-6 py-3 rounded-xl text-slate-600 font-medium text-xs sm:text-sm bg-white border border-slate-200 hover:bg-slate-50 transition-all active:scale-[0.98]">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
            <div className="w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px]">
              <img
                src="/banner-stack.png"
                alt="Development Stack Illustration"
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;