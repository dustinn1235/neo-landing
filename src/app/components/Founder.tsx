import { motion } from "framer-motion";
import { useState } from "react";
import FounderBtn from "./FounderBtn";

const variants = {
  initial: {
    x: -15,
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeInOut" },
  },
};

type Person = {
  title: string;
  name: string;
  imgURL: string;
  description: string;
  pos: string;
};

type Props = {
  founder: Person;
};

const Founder = ({ founder }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`flex flex-col gap-3 relative w-fit max-lg:self-center self-${founder.pos}`}
    >
      <h1 className="text-sm text-[#ffffffad]">{founder.title}</h1>
      <span className="text-4xl leading-none">{founder.name}</span>
      <div className="w-[20rem] aspect-square">
        <img
          src={founder.imgURL}
          className="grayscale-0 transition-all duration-200"
        ></img>
      </div>
      <FounderBtn setActive={setActive} active={active} />
      <motion.p
        className="max-lg:hidden absolute left-[115%] top-[75%] text-sm w-[15rem] text-[#ffffffad]"
        variants={variants}
        initial="initial"
        animate={active ? "animate" : "initial"}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
        inventore dicta? Cumque ex esse praesentium quisquam veniam animi ea
        alias, quis maxime! Cum praesentium ab laborum quidem voluptate, quia
        suscipit.
      </motion.p>
    </div>
  );
};

export default Founder;
