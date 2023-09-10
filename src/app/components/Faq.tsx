import { faqs } from "../utils/faq";
import { useState } from "react";
import { motion } from "framer-motion";

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

const Faq = () => {
  const [active, setActive] = useState([false, false, false]);

  return (
    <div className="mt-36 w-full max-w-[30rem] lg:max-w-[58rem] lg:grid lg:grid-cols-2 gap-[3rem]">
      <h1 className="text-2xl max-lg:mb-10 sm:text-3xl leading-normal">
        Got questions? We can answer them.
      </h1>
      <div className="flex flex-col gap-7">
        {faqs.map((faq, i) => (
          <div
            className="flex flex-col border-b-[1px] border-[#989898] pb-7"
            key={faq.question}
          >
            <button
              className="sm:text-lg font-semibold w-full flex items-center"
              onClick={() => {
                setActive((prev) => {
                  prev[i] = !prev[i];
                  return [...prev];
                });
              }}
            >
              {faq.question}
              <motion.svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
                animate={{ rotate: active[i] ? 180 : 0 }}
              >
                <path
                  d="M0.933362 9.00095C1.45341 9.51791 2.29331 9.51791 2.81336 9.00095L8.00003 3.83428L13.18 9.00095C13.7001 9.51791 14.54 9.51791 15.06 9.00095C15.577 8.4809 15.577 7.641 15.06 7.12095L8.93336 1.00095C8.41331 0.483984 7.57341 0.483984 7.05336 1.00095L0.933362 7.12095C0.416397 7.641 0.416397 8.4809 0.933362 9.00095Z"
                  fill="#FFF"
                ></path>
              </motion.svg>
            </button>

            <motion.div
              variants={collapseVariants}
              initial="initial"
              animate={active[i] ? "animate" : "initial"}
              className="overflow-hidden"
            >
              <p className="max-sm:text-sm font-light whitespace-pre-wrap pt-5">
                {faq.answer}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
