import CountUp from "./CountUp";

const Store = () => {
  return (
    <div className="mt-48 w-full max-w-[60rem]">
      <div className="flex flex-col gap-4 lg:gap-8 w-full">
        <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-bold text-center">
          Your multi-tool for money
        </h1>
        <p className="w-full max-lg:max-w-[40rem] lg:w-3/4 text-center self-center">
          Discover the feeling of total visibility, control, and confidence when
          your financial life works together effortlessly from the palm of your
          hand.
        </p>
      </div>

      <div className="flex flex-col-reverse max-lg:items-center max-lg:gap-20 lg:grid lg:grid-cols-[1fr,1.3fr] mt-10 lg:mt-20">
        <img
          className="w-full aspect-square max-w-[30rem] lg:aspect-[1/1.1] object-contain"
          src="store.webp"
        ></img>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="appstore.svg"
              className="w-full max-w-full h-full max-h-[4rem] "
            ></img>
            <img
              src="googleplay.png"
              className="w-full max-w-full h-full max-h-[4rem]"
            ></img>
          </div>

          <div className="grid grid-cols-3 gap-4 text-xl">
            <div className="flex flex-col items-center">
              <CountUp end={4.8} decimals={1} suffix="&#9733;" />
              <p className="max-sm:text-sm">On the app store</p>
            </div>
            <div className="flex flex-col items-center">
              <CountUp end={750} suffix="+" />
              <p className="max-sm:text-sm">Employees</p>
            </div>
            <div className="flex flex-col items-center">
              <CountUp end={299} prefix="$" />
              <p className="max-sm:text-sm">Million raised</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
