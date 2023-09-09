"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";
import Products from "./Products";
import About from "./About";
import Clients from "./Clients";
import Store from "./Store";
import Slogan from "./Slogan";
import Footer from "./Footer";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    if (scrollable) {
      const lenis = new Lenis({ duration: 1.5 });
      const raf = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }
  }, [scrollable]);

  return (
    <div
      className="font-Poppins w-full min-h-full absolute bg-black px-20 text-[#f8faf9]"
      style={{ overflowY: scrollable ? "visible" : "hidden" }}
    >
      <Loading setScrollable={setScrollable} />
      {scrollable && (
        <div className="w-full h-full flex flex-col items-center">
          <Navbar />
          <Mainpage />
          <Products />
          <About />
          <Clients />
          <Store />
          <Slogan />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
