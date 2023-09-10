import ProductsDesktop from "./ProductsDesktop";
import ProudctsMobile from "./ProudctsMobile";

const Products = () => {
  return (
    <div className="w-full max-w-[67rem] flex flex-col items-center mt-16 gap-16">
      <h1 className="w-full max-w-[35rem] lg:max-w-[40rem] max-lg:mt-10 text-[1.35rem] md:text-[1.7rem] text-center">
        Products that talk to each other and work seamlessly together - that’s
        Neo
      </h1>

      <ProudctsMobile />
      <ProductsDesktop />
    </div>
  );
};

export default Products;
