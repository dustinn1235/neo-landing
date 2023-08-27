import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Slogan = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <div
      className="overflow-hidden relative mt-56 min-w-[100vw] min-h-[100vh] flex flex-col items-center justify-center gap-8"
      ref={ref}
    >
      <motion.img
        src="joinnow.jpg"
        className="w-full h-full object-cover absolute opacity-30 object-center"
        style={{ translateY }}
      ></motion.img>

      <p className="text-3xl">
        Start getting the financial experience you deserve
      </p>
      <button className="text-2xl bg-white rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 px-8 py-4 hover:bg-opacity-100 transition-all duration-200 group">
        <span className="relative z-10 group-hover:mix-blend-exclusion">
          JOIN NOW
        </span>
      </button>
    </div>
  );
};

export default Slogan;
