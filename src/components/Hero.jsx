import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-2 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-10 lg:pr-6 xl:pl-12 xl:pr-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          {/* Left Column: Heading & Details */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-normal text-slate-900 leading-tight">
              <span className="text-[#0f172b] block">Build Your Ideal</span>
              <span className="brand-gradient-text block">Development Stack</span>
            </h1>

            <p className="text-slate-500 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white brand-gradient shadow-md hover:opacity-95 active:scale-95 transition-all"
              >
                Explore Technologies
              </a>

              <a
                href="#learn-more"
                className="px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 active:scale-95 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: 7 cols */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
            <div className="w-full flex justify-center lg:justify-end lg:-mr-12 xl:-mr-20">
              <img
                src="/banner-stack.png"
                alt="Development Stack Illustration"
                className="w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none lg:translate-x-6 xl:translate-x-12"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;