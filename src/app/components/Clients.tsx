const Clients = () => {
  return (
    <div className="w-[70%] mt-56">
      <h1 className="tracking-widest">WHAT THEY SAID</h1>
      <div className="mt-8 flex flex-col gap-12">
        <div className="w-full h-[1px] bg-[#414141]"></div>
        <div className="w-3/4 flex flex-col gap-8">
          <p className="text-[2rem] relative">
            <span className="text-[5rem] absolute left-[-5%] top-[-5%] text-[#e8ac24]">
              "
            </span>{" "}
            I love the simple UI in the app. I don’t have to jump through hoops
            and 7 different screens in order to pay off my card, and adding
            funds is super easy.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <p>Dmitriy T.</p>
            <p className="text-[#909090]">Customer</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-12">
        <div className="w-full h-[1px] bg-[#414141]"></div>
        <div className="w-3/4 flex flex-col gap-8 self-end">
          <p className="text-[2rem] relative">
            <span className="text-[5rem] absolute left-[-5%] top-[-5%] text-[#e8ac24]">
              "
            </span>{" "}
            Very unique concept. Difficult to imagine someone this app would not
            be helpful to. I recommend it to all my friends and family.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <p>Ariel E.</p>
            <p className="text-[#909090]">Customer</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-12">
        <div className="w-full h-[1px] bg-[#414141]"></div>
        <div className="w-3/4 flex flex-col gap-8 self-center">
          <p className="text-[2rem] relative">
            <span className="text-[5rem] absolute left-[-5%] top-[-5%] text-[#e8ac24]">
              "
            </span>{" "}
            I never thought I’d enjoy opening a finance app this much. It just
            feels good. The rewards are a bonus. Instant cashback and so many of
            my favorite places are here!
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <p>Ferron E.</p>
            <p className="text-[#909090]">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
