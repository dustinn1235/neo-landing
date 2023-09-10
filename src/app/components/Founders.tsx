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
        <div className="flex flex-col gap-3 relative">
          <h1 className="text-sm">Co-founder & CEO</h1>
          <span className="text-4xl leading-none">Andrew Chau</span>
          <div className="w-[20rem] aspect-square">
            <img
              src="https://images.ctfassets.net/3p363eai9076/5MfAj9IAHByN7TUWpOVmRv/3d4c59defe4a3459a4687da238bf29d8/Headshots_Andrew_Chau.png?w=440&fm=webp"
              className="grayscale"
            ></img>
          </div>
          <div className="max-w-[10rem] absolute left-[92%] top-[45%] z-10 flex flex-col gap-7">
            <button className="self-start border rounded-full w-[5rem] aspect-square relative">
              <div className="w-1/4 h-[1px] bg-[#ffffffb5] absolute right-0 left-0 top-0 bottom-0 mx-auto my-auto"></div>
              <div className="h-1/4 w-[1px] bg-[#ffffffb5] absolute right-0 left-0 top-0 bottom-0 mx-auto my-auto"></div>
            </button>
          </div>
          <p className="absolute left-[115%] top-[75%] text-sm w-[15rem] text-[#ffffffad]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
            inventore dicta? Cumque ex esse praesentium quisquam veniam animi ea
            alias, quis maxime! Cum praesentium ab laborum quidem voluptate,
            quia suscipit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
