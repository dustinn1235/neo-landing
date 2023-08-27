import { BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 justify-center mt-40 pb-[5rem]">
        <img src="logo.svg" className="w-auto h-fit object-contain"></img>
        <div className="flex text-[2rem] gap-6">
          <BsTwitter />
          <BiLogoFacebook />
          <AiOutlineInstagram />
          <BiLogoLinkedin />
          <BsYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
