import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Hero />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;