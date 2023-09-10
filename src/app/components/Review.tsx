import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import { AiFillCaretLeft } from "react-icons/ai";

type Props = {
  review: {
    text: string;
    author: string;
    role: string;
  };
  active: number;
  setActive: (active: number) => void;
  index: number;
};

const Review = ({ review, active, setActive, index }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (active !== index) setActive(index);
  });

  return (
    <div className="relative" ref={ref}>
      {active === index && (
        <motion.div
          className="flex flex-col absolute right-0 h-full mt-auto mb-auto w-[7%] md:w-[5.5%] items-center justify-center gap-[8%]"
          layoutId="avatar"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {["01.png", "02.png", "04.png"].map((imgSrc, i) => (
            <div
              className="w-full relative flex justify-center items-center"
              key={imgSrc}
            >
              {active === i && (
                <div className="absolute left-[-70%] sm:left-[-50%]">
                  <AiFillCaretLeft />
                </div>
              )}
              <img
                className={`aspect-square rounded-full object-contain ${
                  active === i ? "w-full" : "w-[75%] opacity-30"
                }`}
                src={`avatars/${imgSrc}`}
                alt={`Avatar ${i}`}
              ></img>
            </div>
          ))}
        </motion.div>
      )}

      <div className="w-full h-[1px] bg-[#414141]"></div>
      <div className="mt-8 w-3/4 flex flex-col gap-8">
        <p className="sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] relative">
          <span className="text-[2rem] lg:text-[5rem] absolute left-[-5%] top-[-5%] text-[#e8ac24]">
            &quot;
          </span>{" "}
          {review.text}
        </p>

        <div className="flex flex-col gap-3 text-sm">
          <p>{review.author}</p>
          <p className="text-[#909090]">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
