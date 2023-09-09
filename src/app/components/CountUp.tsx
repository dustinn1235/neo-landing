import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

type Props = {
  start?: number;
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const CountUp = ({
  start = 0,
  end = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
}: Props) => {
  const ref = useRef(null);
  const { start: startCount } = useCountUp({
    ref,
    start,
    end,
    suffix,
    prefix,
    decimals,
  });

  const isInView = useInView(ref, { amount: 0.1, once: true });

  useEffect(() => {
    if (isInView) startCount();
  }, [isInView]);

  return <p ref={ref}></p>;
};

export default CountUp;
