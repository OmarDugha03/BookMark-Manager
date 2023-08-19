import Image from "next/image";
import { FC } from "react";
import { logo } from "@/Images/index";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-between pt-6 pr-4 leading-7 text-white uppercase bg-slate-900 lg:justify-evenly lg:py-4 lg:flex-row font-mediume">
      <ul className="flex flex-col items-center justify-center py-4 lg:flex-row ">
        <Image src={logo} alt="my Logo" className="pb-4 lg:p-0 lg:mr-4" />
        <a
          href="#"
          className="py-1 duration-300 ease-in-out delay-100 lg:px-8 hover:text-orange-400">
          Feature
        </a>
        <a
          href="#"
          className="py-1 duration-300 ease-in-out delay-100 lg:px-4 hover:text-orange-400">
          Pricing
        </a>
        <a
          href="#"
          className="py-1 duration-300 ease-in-out delay-100 lg:px-4 hover:text-orange-400">
          Contact
        </a>
      </ul>
      <div className="flex items-center justify-between p-4 mx-2 ">
        <FaFacebookSquare className="mx-5 duration-300 ease-in-out delay-100 cursor-pointer text-[30px] hover:text-orange-400"></FaFacebookSquare>
        <FaTwitterSquare className=" duration-300 ease-in-out delay-100 cursor-pointer text-[30px] hover:text-orange-400"></FaTwitterSquare>
      </div>
    </div>
  );
};

export default Footer;
