const Store = () => {
  return (
    <div className="mt-56 w-[70%]">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-[3rem] font-bold text-center">
          Your multi-tool for money
        </h1>
        <p className="w-3/4 text-center self-center">
          Discover the feeling of total visibility, control, and confidence when
          your financial life works together effortlessly from the palm of your
          hand.
        </p>
      </div>

      <div className="grid grid-cols-[1fr,1.3fr] mt-20">
        <img
          className="w-full aspect-[1/1.1] object-contain"
          src="store.webp"
        ></img>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex gap-4">
            <img
              src="appstore.svg"
              className="w-fit h-[4rem] max-h-[4rem] object-contain"
            ></img>
            <img
              src="googleplay.png"
              className="w-fit max-h-[4rem] object-contain"
            ></img>
          </div>

          <div className="grid grid-cols-3 gap-4 text-xl">
            <div className="flex flex-col items-center">
              <p>4.8 &#9733;</p>
              <p>On the app store</p>
            </div>
            <div className="flex flex-col items-center">
              <p>750+</p>
              <p>Employees</p>
            </div>
            <div className="flex flex-col items-center">
              <p>$299</p>
              <p>Million raised</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
