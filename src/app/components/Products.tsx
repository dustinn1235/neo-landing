import { AiOutlineArrowRight } from "react-icons/ai";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { products } from "../utils/products";

const collapseVariants = {
  initial: {
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
  animate: {
    height: "auto",
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Products = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // useMotionValueEvent(scrollYProgress, "change", (v) => {
  //   const index = Math.floor(v / 0.255);
  //   if (active !== index) setActive(index);
  // });

  return (
    <div className="w-[75%] flex flex-col items-center mt-16 gap-16" ref={ref}>
      <h1 className="w-[64%] text-[1.7rem] text-center">
        Products that talk to each other and work seamlessly together - that’s
        Neo
      </h1>

      <div className="w-full h-[40rem] flex items-center sticky top-[8%]">
        <div className="w-[52%] h-full absolute bg-[#989898] right-0 rounded-xl overflow-hidden">
          {products.map((product, i) => (
            <motion.img
              src={products[active].imgURL}
              className="w-full h-full object-cover shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
              style={{ display: active === i ? "block" : "none" }}
              variants={imageVariants}
              animate={active === i ? "animate" : "initial"}
              key={product.name}
            ></motion.img>
          ))}
        </div>

        <div className="w-1/2 h-[95%] absolute bg-[#1c1d20] rounded-xl left-0  px-10 py-12 grid gap-2">
          <h1 className="text-sm">PRODUCTS</h1>

          {products.map((product, i) => (
            <div className="flex flex-col gap-3" key={product.name}>
              <button
                className="self-start text-3xl font-semibold hover:text-[#f8faf9] hover:opacity-100 w-fit"
                style={active !== i ? { opacity: 0.2 } : {}}
                onClick={() => setActive(i)}
              >
                {product.name}
              </button>

              <motion.div
                variants={collapseVariants}
                initial="initial"
                animate={active === i ? "animate" : "initial"}
                className="overflow-hidden"
              >
                <p className="font-light">{product.description}</p>
                <button className="mt-6 font-semibold w-fit px-4 py-2 bg-[#414141] rounded-full flex items-center gap-2 group justify-center hover:bg-[#f8faf9]">
                  <p className="mix-blend-exclusion">Learn More</p>
                  <AiOutlineArrowRight className="w-fit max-w-0 group-hover:max-w-[2rem] transition-all duration-300 mix-blend-exclusion" />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
