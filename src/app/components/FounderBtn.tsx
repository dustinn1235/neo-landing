import { useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
};

const FounderBtn = ({ active, setActive }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      ref.current?.getBoundingClientRect() as DOMRect;
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="max-lg:hidden max-w-[10rem] absolute left-[92%] top-[45%] z-10 flex flex-col gap-7">
      <motion.button
        ref={ref}
        className="self-start border rounded-full w-[5rem] aspect-square relative"
        onClick={() => setActive(!active)}
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        animate={{ ...position }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.01,
        }}
      >
        <div className="w-1/4 h-[1px] bg-[#ffffffb5] absolute right-0 left-0 top-0 bottom-0 mx-auto my-auto"></div>
        <motion.div
          className="h-1/4 w-[1px] bg-[#ffffffb5] absolute right-0 left-0 top-0 bottom-0 mx-auto my-auto"
          animate={{ rotate: active ? 90 : 0 }}
        ></motion.div>
      </motion.button>
    </div>
  );
};

export default FounderBtn;
