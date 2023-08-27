import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.div
        className="w-full h-[5rem] flex font-semibold items-center pt-4 fixed left-0 top-0 px-20 bg-black z-20"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
          delay: 1.1,
        }}
      >
        <img src="logo.svg" className="w-auto h-fit object-contain mr-16"></img>

        <div className="flex gap-10">
          <span>Products</span>
          <span>Features</span>
          <span>Learn</span>
          <span>Company</span>
          <span>Support</span>
        </div>

        <div className="ml-auto flex gap-6 items-center">
          <button className="h-fit">Log In</button>
          <button className="h-fit rounded-lg bg-white text-black px-6 py-2">
            Sign Up
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
