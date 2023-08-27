const Slogan = () => {
  return (
    <div className="relative mt-56 min-w-[100vw] min-h-[30rem] flex flex-col items-center justify-center gap-8">
      <img
        src="joinnow.jpg"
        className="w-full h-full object-cover absolute opacity-30 object-center"
      ></img>

      <p className="text-3xl">
        Start getting the financial experience you deserve
      </p>
      <button className="text-2xl bg-white rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 px-8 py-4 hover:bg-opacity-100 transition-all duration-200 group">
        <span className="relative z-10 group-hover:mix-blend-exclusion">
          JOIN NOW
        </span>
      </button>
    </div>
  );
};

export default Slogan;
