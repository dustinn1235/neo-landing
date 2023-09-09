import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <div className="w-[70%] mt-60 flex flex-col items-center gap-8">
      <div className="flex flex-col gap-5 items-center w-[90%]">
        <h1 className="text-[2rem] font-bold">
          What if the future of banking wasn’t a bank?
        </h1>
        <p className="text-center leading-relaxed">
          Technology has reimagined our world, and now it’s finally time for
          technology to reimagine our financial world too. Neo is focused on
          providing the financial services experience Canadians deserve.
        </p>
        <button className="text-[#909090] text-lg font-bold flex items-center gap-1 hover:underline underline-offset-4 hover:gap-2 transition-all">
          Learn more <AiOutlineArrowRight />
        </button>
      </div>
      <div className="w-screen h-screen" ref={ref}>
        <motion.video
          className=" w-full h-full object-cover"
          style={{ scale }}
          preload="auto"
          autoPlay
          playsInline
          muted
          loop
          controls
        >
          <source
            src="https://videos.ctfassets.net/3p363eai9076/euJ46AZq589Ww42fQlyBj/4a663f1ffa73be19eb7934ce7bad4490/What_If_____Neo_Financial.mp4"
            type="video/mp4"
          />
        </motion.video>
      </div>
    </div>
  );
};

export default About;
