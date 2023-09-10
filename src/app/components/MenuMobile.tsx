import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const containerVariants = {
  initial: {
    y: "100%",
    transition: {
      ease: "easeInOut",
    },
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: "100%",
    transition: {
      ease: "easeInOut",
      delay: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const sectionVariants = {
  initial: {
    y: "100%",
    transition: {
      ease: "easeInOut",
    },
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    y: "100%",
    transition: {
      ease: "easeInOut",
    },
  },
};

const MenuMobile = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="ml-auto text-2xl lg:hidden">
      <button onClick={() => setActive(true)}>
        <GiHamburgerMenu />
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            className="absolute left-0 top-0 w-full h-screen bg-black py-20 px-[10%] flex flex-col justify-center gap-20"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex">
              <img
                src="logo.svg"
                className="w-auto h-fit object-contain mr-16"
              ></img>
              <button className="ml-auto" onClick={() => setActive(false)}>
                &#10005;
              </button>
            </div>
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-6 items-center text-[1.2rem]">
                <div className="overflow-hidden w-fit">
                  <motion.p variants={sectionVariants}>Products</motion.p>
                </div>
                <div className="overflow-hidden w-fit">
                  <motion.p variants={sectionVariants}>Features</motion.p>
                </div>
                <div className="overflow-hidden w-fit">
                  <motion.p variants={sectionVariants}>Learn</motion.p>
                </div>
                <div className="overflow-hidden w-fit">
                  <motion.p variants={sectionVariants}>Company</motion.p>
                </div>
                <div className="overflow-hidden w-fit">
                  <motion.p variants={sectionVariants}>Support</motion.p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 items-center text-base ">
                <button className="w-full h-fit border py-2 rounded-lg">
                  Log In
                </button>
                <button className="w-full h-fit rounded-lg bg-white text-black px-6 py-2">
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuMobile;
