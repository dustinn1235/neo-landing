import { AiOutlineArrowRight } from "react-icons/ai";

const About = () => {
  return (
    <div className="w-[70%] mt-56 grid grid-cols-2 items-center gap-14">
      <div className="flex flex-col gap-10">
        <h1 className="text-[2rem] font-bold">
          What if the future of banking wasn't a bank?
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
      <img className="w-full aspect-ratio" src="future.webp"></img>
    </div>
  );
};

export default About;
