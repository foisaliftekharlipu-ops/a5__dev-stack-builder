import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading technologies:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isAlreadyInStack = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyInStack) {
      toast.info(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleSelectAll = () => {
    if (selectedStack.length === technologies.length) {
      toast.info("All technologies are already selected!");
      return;
    }
    setSelectedStack([...technologies]);
    toast.success("All technologies added to your stack!");
  };

  const handleRemoveFromStack = (techId) => {
    const itemToRemove = selectedStack.find((item) => item.id === techId);
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
    if (itemToRemove) {
      toast.warn(`${itemToRemove.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("All technologies removed from stack!");
  };

  return (
    <section className="w-full bg-slate-50/50 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center lg:text-left mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-[800] tracking-[-0.03em] text-[#0f172a]">
            Explore the{" "}
            <span className="brand-gradient bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-normal">
            Pick technologies to build your ideal stack.
          </p>
        </div>

        {/* Loading State Spinner */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-[#e91e63] rounded-full animate-spin"></div>
            <p className="text-sm text-slate-500 font-medium mt-4">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isSelected = selectedStack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-600">
                          {tech.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mt-4">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-3">
                        {tech.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-50">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-4 font-medium">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {tech.category}
                        </span>
                        <span>{tech.difficulty}</span>
                        <span className="text-amber-500 flex items-center gap-1 font-semibold">
                          ★ {tech.rating}
                        </span>
                      </div>

                      <button onClick={() => handleAddToStack(tech)}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all active:scale-[0.98] ${
                        isSelected
                          ? "bg-slate-200 text-slate-700 hover:bg-slate-300"
                          : "bg-[#0f172a] text-white hover:bg-slate-800"
                      }`}
                    >
                      {isSelected ? "Added to Stack" : "Add to Stack"}
                    </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-1 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm sticky top-20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Your Stack</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {selectedStack.length === 0
                      ? "No technologies selected yet."
                      : `${selectedStack.length} technology selected.`}
                  </p>
                </div>

              </div>

              <div className="mt-6">
                {selectedStack.length === 0 ? (
                  <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 flex items-center justify-center text-center">
                    <span className="text-xs font-medium text-slate-400">
                      Your stack is empty.
                    </span>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                    {selectedStack.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/50"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-6 h-6 object-contain"
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              {item.category}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleRemoveFromStack(item.id)}
                          className="text-slate-400 hover:text-red-500 text-xs p-1"
                          aria-label="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={handleRemoveAll}
                      className="w-full mt-4 py-2.5 rounded-xl border border-rose-200 text-rose-500 hover:bg-rose-50 font-semibold text-xs transition-colors"
                    >
                      Remove All
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
      <ToastContainer 
        position="bottom-right" 
        autoClose={2000} 
        theme="colored" 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Technologies;