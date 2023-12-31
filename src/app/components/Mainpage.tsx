import { useRef, useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const word = {
  initial: {
    y: 400,
  },

  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const card = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Mainpage = () => {
  const ref = useRef<HTMLImageElement>(null);
  const [mousePos, setMousePos] = useState("");
  const THRESHOLD = 20;

  useEffect(() => {
    window.innerWidth >= 640 &&
      ref.current &&
      setMousePos(
        `perspective(${ref.current.clientWidth}px) rotateX(-3deg) rotateY(-7deg) scale(1.1)`
      );
  }, [ref]);

  const handleMouseLeave = (e: any) => {
    window.innerWidth >= 640 &&
      setMousePos(
        `perspective(${e.currentTarget.clientWidth}px) rotateX(-3deg) rotateY(-7deg) scale(1.1)`
      );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current && window.innerWidth >= 640) {
      const { clientX, clientY } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = ref.current;

      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

      const string = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1) scale(1.2)`;
      setMousePos(string);
    }
  };

  return (
    <>
      <div className="w-[100%] max-w-[58rem] pt-[10rem] md:pt-[9rem] lg:pt-[7rem] xl:pt-[4rem] 2xl:pt-0 min-h-screen flex justify-center items-center">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.8fr,1fr] items-center gap-20">
          <motion.div
            className="flex flex-col gap-6"
            variants={banner}
            initial="initial"
            animate="animate"
          >
            <div className="overflow-hidden w-full">
              <motion.h1
                className="text-3xl md:text-[2.5rem] max-lg:text-center lg:text-[3.4rem] font-bold leading-tight"
                variants={word}
              >
                THE MODERN WAY TO MONEY
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="w-full max-w-[40rem] max-lg:text-center lg:w-3/4 font-light leading-normal"
                variants={word}
              >
                We’re reinventing how Canadians spend, save, and grow their
                money-all together, in one placce. Join us as we set the new
                standard.
              </motion.p>
            </div>

            <div className="overflow-hidden flex max-lg:justify-center">
              <motion.button
                variants={word}
                className="mt-4 font-bold w-fit px-6 py-4 bg-[#414141] rounded-full flex items-center gap-2 group justify-center hover:bg-[#f8faf9]"
              >
                <p className="mix-blend-exclusion">Join Now</p>
                <AiOutlineArrowRight className="w-fit max-w-0 group-hover:max-w-[2rem] transition-all duration-300 mix-blend-exclusion" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={card}
            initial="initial"
            animate="animate"
            className="w-[15rem] sm:w-[20rem] max-lg:aspect-square lg:h-[108%] relative flex justify-center items-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
          >
            <img
              src="neocard.png"
              className="w-full h-full object-contain absolute transition-all z-10"
              style={{
                transform: mousePos,
              }}
            ></img>
            <div className="h-full aspect-square absolute border-2 z-0 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
