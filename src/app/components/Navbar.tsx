import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const variants = {
  initial: {
    y: -400,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  first: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1.1,
    },
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [animateState, setAnimateState] = useState("first");

  useMotionValueEvent(scrollY, "change", (v) => {
    // disable disapear nav on mobile
    if (window.innerWidth >= 640) {
      if (v - scrollY.getPrevious() < 0) {
        setAnimateState("animate");
      } else {
        setAnimateState("initial");
      }
    }
  });

  return (
    <>
      <motion.div
        className="w-full max-w-[90rem] h-[5rem] flex font-semibold items-center pt-4 fixed top-0 px-8 bg-black z-30"
        variants={variants}
        initial="initial"
        animate={animateState}
      >
        <img src="logo.svg" className="w-auto h-fit object-contain mr-16"></img>

        <div className="ml-auto text-2xl lg:hidden">
          <GiHamburgerMenu />
        </div>

        <div className="max-lg:hidden flex gap-10">
          <span>Products</span>
          <span>Features</span>
          <span>Learn</span>
          <span>Company</span>
          <span>Support</span>
        </div>

        <div className="max-lg:hidden ml-auto flex gap-6 items-center">
          <button className="h-fit">Log In</button>
          <button className="h-fit rounded-lg bg-white text-black px-6 py-2">
            Sign Up
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
