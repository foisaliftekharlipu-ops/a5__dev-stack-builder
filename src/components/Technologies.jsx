import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const TECH_ICONS = {
  React: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  "Vue.js": (
    <svg viewBox="0 0 261.76 226.69" className="w-8 h-8">
      <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" />
      <path d="M161.096.001l-30.225 52.351L100.647.001H52.846l78.026 135.145 78.026-135.145z" fill="#34495e" />
    </svg>
  ),
  Svelte: (
    <svg viewBox="0 0 102 120" className="w-7 h-7">
      <path
        d="M89.7 19.3C78.4 5.2 58.7.6 42.1 6.8c-7.6 2.8-14.7 7.7-19.9 14.3-13.8 17.5-12.7 42.4 2.8 58.5l2.4 2.4-1.8 2.8c-2.4 3.7-3.9 7.9-4.5 12.3-.9 6.8 1 13.6 5.2 19 11.3 14.1 31 18.7 47.6 12.5 7.6-2.8 14.7-7.7 19.9-14.3 13.8-17.5 12.7-42.4-2.8-58.5l-2.4-2.4 1.8-2.8c2.4-3.7 3.9-7.9 4.5-12.3.9-6.9-1-13.7-5.2-19.1z"
        fill="#ff3e00"
      />
      <circle cx="50" cy="60" r="14" fill="#ffffff" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path d="M16 2.5l12 6.9v13.8L16 30.1 4 23.2V9.4z" fill="#539e43" />
      <path d="M16 8.5v15M10 12l6 3.5 6-3.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect width="32" height="32" rx="6" fill="#0f172a" />
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
        EX
      </text>
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect width="32" height="32" rx="6" fill="#092e20" />
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#44b78b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
        dj
      </text>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path d="M16 2s-6 6-6 13c0 6.5 4.5 11 6 12 1.5-1 6-5.5 6-12 0-7-6-13-6-13z" fill="#13aa52" />
      <path d="M16 2v25c.5-.3 6-4.5 6-12 0-7-6-13-6-13z" fill="#119246" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="14" fill="#336791" />
      <path d="M10 14c0-4 3-6 6-6s6 2 6 6c0 5-3 8-6 10-3-2-6-5-6-10z" fill="#ffffff" />
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path d="M16 4l12 6-12 6-12-6z" fill="#dc382d" />
      <path d="M4 10l12 6v12L4 22z" fill="#a41e11" />
      <path d="M28 10l-12 6v12l12-6z" fill="#b82619" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <rect width="32" height="32" rx="4" fill="#3178c6" />
      <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
        TS
      </text>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path d="M15.8 3c-4.2 0-7 1.8-7 4.2v2.8h7.2v1H6.2c-2.4 0-4.2 2.8-4.2 6.5 0 3.7 1.7 6.5 4.2 6.5h2.2v-3.2c0-2.8 2.3-5 5-5h7.2v-2.8c0-2.4-2.8-4.2-7-4.2zm-2 2.2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="#3776ab" />
      <path d="M16.2 29c4.2 0 7-1.8 7-4.2V22h-7.2v-1h9.8c2.4 0 4.2-2.8 4.2-6.5 0-3.7-1.7-6.5-4.2-6.5h-2.2v3.2c0 2.8-2.3 5-5 5h-7.2v2.8c0 2.4 2.8 4.2 7 4.2zm2-2.2a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="#ffd438" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path
        d="M9 13.5c1.5-3 4-4.5 7.5-4.5 4.5 0 6 3 7.5 4.5 1.5 1.5 3 2.25 5 2.25s3.5-.75 5-2.25c-1.5 3-4 4.5-7.5 4.5-4.5 0-6-3-7.5-4.5-1.5-1.5-3-2.25-5-2.25S10.5 12 9 13.5zm-8 7c1.5-3 4-4.5 7.5-4.5 4.5 0 6 3 7.5 4.5 1.5 1.5 3 2.25 5 2.25s3.5-.75 5-2.25c-1.5 3-4 4.5-7.5 4.5-4.5 0-6-3-7.5-4.5-1.5-1.5-3-2.25-5-2.25S2.5 19 1 20.5z"
        fill="#06b6d4"
      />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path
        d="M29.5 13.2c-.4-.3-1.4-.4-2.1-.2-.3-.6-.8-1.2-1.4-1.6l-.8-.5-.5.8c-.5.8-.6 1.7-.3 2.5-.7.4-1.8.4-2.4.2-.3 0-.4.1-.5.3-.9 1.7-2.6 2.7-4.5 2.7H3.4c-.5 0-.9.4-.9.9 0 4.6 3.4 8.7 8.1 9.6 5.5 1 10.9-.9 14.3-5 2.3-2.8 3.5-6.2 3.5-9.3 0-.5 0-.9-.1-1.3l-.8.9zM10.8 7.4h2.5v2.5h-2.5zm3.1 0h2.5v2.5h-2.5zm-6.2 3.1h2.5V13H7.7zm3.1 0h2.5V13h-2.5zm3.1 0h2.5V13h-2.5zm3.1 0h2.5V13h-2.5zm-9.3-3.1h2.5v2.5H4.6z"
        fill="#2496ed"
      />
    </svg>
  ),
  Kubernetes: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <circle cx="16" cy="16" r="14" fill="#326ce5" />
      <path d="M16 7l8 4.5v9L16 25l-8-4.5v-9z" fill="none" stroke="#ffffff" strokeWidth="2" />
      <circle cx="16" cy="16" r="3" fill="#ffffff" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      <path
        d="M30.2 14.5L17.5 1.8c-.8-.8-2.1-.8-2.9 0L12 4.4l3.7 3.7c.9-.3 1.9-.1 2.6.6.7.7.9 1.7.6 2.6l3.5 3.5c.9-.3 1.9-.1 2.6.6 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-.8-.8-.9-1.9-.5-2.8l-3.3-3.3v7.3c.3.2.6.5.7.9 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4 .3-.3.7-.6 1.1-.7v-7.4c-.4-.1-.8-.4-1.1-.7-.8-.8-.9-1.9-.5-2.8L7.1 9.3 1.8 14.6c-.8.8-.8 2.1 0 2.9l12.7 12.7c.8.8 2.1.8 2.9 0l12.8-12.8c.8-.8.8-2.1 0-2.9z"
        fill="#f05032"
      />
    </svg>
  ),
};

const DefaultIcon = () => (
  <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">
    &lt;/&gt;
  </div>
);

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (!isAlreadyAdded) {
      setSelectedStack((prev) => [...prev, tech]);
      toast.success(`${tech.name} added to your stack!`);
    } else {
      toast.info(`${tech.name} is already in your stack!`);
    }
  };

  const handleRemove = (item) => {
    setSelectedStack((prev) => prev.filter((tech) => tech.id !== item.id));
    toast.warn(`${item.name} removed from stack`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("Cleared all technologies from stack");
  };

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case "Popular":
      case "Essential":
      case "Containers":
        return "bg-sky-50 text-sky-600 border border-sky-200";
      case "Versatile":
      case "Standard":
        return "bg-emerald-50 text-emerald-600 border border-emerald-200";
      case "Fast":
        return "bg-orange-50 text-orange-600 border border-orange-200";
      case "Cache":
        return "bg-rose-50 text-rose-600 border border-rose-200";
      case "Ubiquitous":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "Top SQL":
      case "Robust":
        return "bg-blue-50 text-blue-600 border border-blue-200";
      case "Modern":
        return "bg-cyan-50 text-cyan-600 border border-cyan-200";
      default:
        return "bg-slate-100 text-slate-700 border border-slate-200";
    }
  };

  return (
    <section id="technologies" className="w-full bg-[#fcfcfd] py-16">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172b]">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Pick technologies to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.length === 0 ? (
              <p className="text-sm text-slate-400">Loading technologies...</p>
            ) : (
              technologies.map((tech) => {
                const isSelected = selectedStack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl p-1 border border-slate-100">
                          {TECH_ICONS[tech.name] || <DefaultIcon />}
                        </div>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeStyle(
                            tech.badge
                          )}`}
                        >
                          {tech.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0f172b] mb-1">
                        {tech.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-3">
                        {tech.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 pb-4 pt-2 border-t border-slate-50">
                        <span className="bg-slate-50 px-2 py-0.5 rounded text-[11px] font-medium text-slate-600">
                          {tech.category}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {tech.difficulty || tech.level}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-slate-700 text-xs">
                          <span className="text-amber-400">★</span> {tech.rating}
                        </span>
                      </div>

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
              })
            )}
          </div>

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
                      <div className="w-6 h-6 flex items-center justify-center">
                        {TECH_ICONS[item.name] || (
                          <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                        )}
                      </div>
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