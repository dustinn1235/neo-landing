import { AiOutlineArrowRight } from "react-icons/ai";
import { products } from "../utils/products";

const ProudctsMobile = () => {
  return (
    <div className="lg:hidden grid gap-10 max-w-[30rem]">
      {products.map((product) => (
        <div
          className="flex flex-col rounded-lg overflow-hidden"
          key={product.name}
        >
          <div className="bg-[#989898] w-full aspect-[1.5/1] max-h-[15rem]">
            <img
              src={product.imgURL}
              className="w-full h-full object-contain"
            ></img>
          </div>
          <div className="bg-[#1b1b1b] flex flex-col gap-2 pt-10 pb-8 px-5 justify-center">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p className="font-light">{product.description}</p>
            <button className="mt-6 font-semibold w-fit px-4 py-2 bg-[#414141] rounded-full flex items-center gap-2 group justify-center hover:bg-[#f8faf9]">
              <p className="mix-blend-exclusion">Learn More</p>
              <AiOutlineArrowRight className="w-fit max-w-0 group-hover:max-w-[2rem] transition-all duration-300 mix-blend-exclusion" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProudctsMobile;
