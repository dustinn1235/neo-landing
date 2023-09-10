import Founder from "./Founder";

const Founders = () => {
  return (
    <div className="w-full mt-44 lg:mt-60 flex flex-col items-center gap-20">
      <div className="flex flex-col gap-8 items-center max-w-[40rem] lg:max-w-[52rem]">
        <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-bold text-center">
          Meet the founders
        </h1>
        <p className="text-center leading-relaxed max-w-[45rem]">
          We know how technology can be used to improve everyday life. After
          building SkipTheDishes into a top 10 brand in Canada, we’re now set on
          challenging conventions with a smarter spending, saving and rewards
          experience for Canadians.
        </p>
      </div>
      <div>
        <Founder />
      </div>
    </div>
  );
};

export default Founders;