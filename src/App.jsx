import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Trading from "./components/Trading";
import Pricing from "./components/Pricing";
import Education from "./components/Education";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  return (
    <div>

      <Navbar />

      <main>

        <Hero />

        <Stats />

        <Products />

        <Trading />

        <Pricing />

       <Education />

       <CTA />

      </main>
      
       <Footer />

    </div>
  );
}

export default App;