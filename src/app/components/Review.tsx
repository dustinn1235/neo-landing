import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

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
    offset: ["center center", "center start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (active !== index) setActive(index);
  });

  return (
    <div className="relative" ref={ref}>
      {active === index && (
        <motion.div
          layoutId="avatar"
          className="bg-red-500 absolute w-[5%] aspect-square rounded-full right-0 top-[50%]"
        ></motion.div>
      )}

      <div className="w-full h-[1px] bg-[#414141]"></div>
      <div className="mt-8 w-3/4 flex flex-col gap-8">
        <p className="text-[2rem] relative">
          <span className="text-[5rem] absolute left-[-5%] top-[-5%] text-[#e8ac24]">
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
