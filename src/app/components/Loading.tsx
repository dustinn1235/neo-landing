import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const banner = {
  animate: {
    transition: {
      delay: 2,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
  exit: {
    height: 10000,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const word = {
  animate: {
    y: -50,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

type Props = {
  setScrollable: (scrollable: boolean) => void;
};

const Loading = ({ setScrollable }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute w-full h-screen z-20 left-0 top-0 flex justify-center items-center overflow-hidden">
          <img
            src="cover.jpg"
            className="absolute w-full h-full object-cover z-[-1]"
          ></img>
          <motion.div
            className="flex flex-col gap-4 aspect-square p-20 justify-center items-center rounded-full bg-black overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            variants={banner}
            animate="animate"
            exit="exit"
            onAnimationComplete={() => {
              setIsVisible(false), setScrollable(true);
            }}
          >
            <motion.img
              src="logo.svg"
              className="w-full object-contain"
              variants={word}
            ></motion.img>

            <motion.p
              className="text-[2rem] tracking-widest font-semibold"
              variants={word}
            >
              FINANCIAL
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
