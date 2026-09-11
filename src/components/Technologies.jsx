import React, { useEffect, useState } from "react";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error("Error loading technologies:", err));
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (!isAlreadyAdded) {
      setSelectedStack((prev) => [...prev, tech]);
    }
  };

  const handleRemove = (item) => {
    setSelectedStack((prev) => prev.filter((tech) => tech.id !== item.id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <section id="technologies" className="w-full bg-[#fcfcfd] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172b]">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Pick technologies to build your ideal stack.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => {
              const isSelected = selectedStack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${tech.badgeStyle}`}
                      >
                        {tech.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-[#0f172b] mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-3">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                    {/* Category, Level & Rating */}
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-4 pt-2 border-t border-slate-50">
                      <span className="bg-slate-50 px-2 py-0.5 rounded text-[11px] font-medium text-slate-600">
                        {tech.category}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {tech.level}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-slate-700 text-xs">
                        <span className="text-amber-400">★</span> {tech.rating}
                      </span>
                    </div>

                    {/* Add Button */}
                    <button
                      onClick={() => handleAddToStack(tech)}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                          : "bg-[#0f172b] text-white hover:bg-slate-800 active:scale-[0.98]"
                      }`}
                      disabled={isSelected}
                    >
                      {isSelected ? "Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sidebar: Your Stack */}
          <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold text-[#0f172b]">Your Stack</h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              {selectedStack.length === 0
                ? "No technologies selected yet."
                : `${selectedStack.length} ${
                    selectedStack.length === 1
                      ? "Technology"
                      : "Technologies"
                  } Selected`}
            </p>

            {/* Empty State vs Selected Items */}
            {selectedStack.length === 0 ? (
              <div className="border border-dashed border-slate-200 rounded-2xl py-8 px-4 flex items-center justify-center">
                <span className="text-xs text-slate-400 font-normal">
                  Your stack is empty.
                </span>
              </div>
            ) : (
              <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
                {selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/60"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                      />
                      <div>
                        <span className="text-xs font-semibold text-slate-700 block leading-none">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(item)}
                      className="text-slate-400 hover:text-red-500 p-1 rounded-md transition-colors"
                      title="Remove"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Remove All Button */}
            {selectedStack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full mt-6 py-2.5 rounded-xl border border-red-200 text-red-500 text-xs font-semibold hover:bg-red-50 active:scale-[0.98] transition-all"
              >
                Remove All
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;