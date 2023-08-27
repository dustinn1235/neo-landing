"use client";

import { useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Products from "./components/Products";
import About from "./components/About";
import Clients from "./components/Clients";
import Store from "./components/Store";
import Slogan from "./components/Slogan";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollable, setScrollable] = useState(false);

  return (
    <main
      className="font-Poppins w-full h-screen absolute bg-black px-20 text-[#f8faf9] no-scrollbar"
      style={{ overflowY: scrollable ? "auto" : "hidden" }}
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
    </main>
  );
}
