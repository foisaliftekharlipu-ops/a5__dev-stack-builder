import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white pt-2 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-10 lg:pr-6 xl:pl-12 xl:pr-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          
          <div className="lg:col-span-5 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold leading-[1.14]">
              <span className="text-[#0f172b] block">
                Build Your Ideal
              </span>
              <span className="bg-gradient-to-r from-[#ff4d2d] via-[#e11d74] via-[#b8129e] via-[#8a1eb2] to-[#6c35de] bg-clip-text text-transparent block mt-1">
                Development Stack
              </span>
            </h1>

            <p className="text-[#596780] text-[15px] sm:text-[14px] leading-[1.65] font-[450] mt-5">
              Explore frontend, backend, database, and tooling options,
              <p>compare them side by side, and put together the stack that fits your</p> next project.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <button className="px-6 py-3 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-[#ff6b35] to-[#ec3b83] hover:opacity-95 shadow-sm transition-all active:scale-[0.98]">
                Explore Technologies
              </button>
              <button className="px-6 py-3 rounded-xl text-slate-600 font-medium text-sm bg-white border border-slate-200 hover:bg-slate-50 transition-all active:scale-[0.98]">
                Learn More
              </button>
            </div>
          </div>

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