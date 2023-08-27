import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["35%", "-35%"]);

  return (
    <div
      className="w-[70%] mt-56 grid grid-cols-2 items-center gap-14"
      ref={ref}
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-[2rem] font-bold">
          What if the future of banking wasn’t a bank?
        </h1>
        <p>
          Technology has reimagined our world, and now it’s finally time for
          technology to reimagine our financial world too. Neo is focused on
          providing the financial services experience Canadians deserve.
        </p>
        <button className="self-start text-[#909090] text-lg font-bold flex items-center gap-1">
          Learn more <AiOutlineArrowRight />
        </button>
      </div>
      <motion.img
        className="w-full aspect-ratio"
        src="future.webp"
        alt="about_img"
        style={{ translateY }}
      ></motion.img>
    </div>
  );
};

export default About;
