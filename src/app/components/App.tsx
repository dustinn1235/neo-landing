"use client";

import { useEffect, useState, useRef } from "react";
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
import Faq from "./Faq";

const App = () => {
  const [scrollable, setScrollable] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollable) {
      const lenis = new Lenis({ duration: 1.5 });
      const raf = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      if (!ref.current) return;

      // debounce timer
      let timer: NodeJS.Timeout;
      const resizeObserver = new ResizeObserver(() => {
        // Do what you want to do when the size of the element changes
        clearTimeout(timer);
        timer = setTimeout(() => {
          lenis.resize();
        }, 100);
      });
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect(); // clean up
    }
  }, [scrollable]);

  return (
    <div
      className="font-Poppins w-full min-h-full absolute bg-black px-6 lg:px-10 xl:px-20 text-[#f8faf9]"
      style={{ overflowY: scrollable ? "visible" : "hidden" }}
      ref={ref}
    >
      <Loading setScrollable={setScrollable} />
      {scrollable && (
        <div className="w-full h-full flex flex-col items-center">
          <Navbar />
          <Mainpage />
          <Products />
          <About />
          {/* <Store />
          <Clients />
          <Slogan />
          <Faq />
          <Footer /> */}
        </div>
      )}
    </div>
  );
};

export default App;
