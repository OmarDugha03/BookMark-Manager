import Image from "next/image";
import { FC } from "react";
import { logo } from "@/Images/index";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const menuInfo = [
    { id: 0, text: "Feature", href: "#Features" },
    { id: 1, text: "Pricing", href: "/Pricing" },
    { id: 2, text: "Contact", href: "/Contact" },
  ];
  return (
    <div className="flex flex-col items-center justify-between pt-6 pr-4 leading-7 text-white uppercase bg-slate-900 lg:justify-evenly lg:py-4 lg:flex-row font-mediume">
      <ul className="flex flex-col items-center justify-center py-4 lg:flex-row ">
        <Image src={logo} alt="my Logo" className="pb-4 lg:p-0 lg:mr-4" />
        {menuInfo.map((item) => (
          <Link
            className="py-1 duration-300 ease-in-out delay-100 lg:px-4 hover:text-orange-400"
            href={item.href}
            key={item.id}>
            {item.text}
          </Link>
        ))}
      </ul>
      <div className="flex items-center justify-between py-2 ">
        <Link target="_blank" href="https://www.facebook.com/">
          <FaFacebookSquare className="mx-4 duration-300 ease-in-out delay-100 cursor-pointer text-[30px] hover:text-orange-400"></FaFacebookSquare>
        </Link>
        <Link target="_blank" href="https://www.twitter.com/">
          <FaTwitterSquare className=" duration-300 ease-in-out delay-100 cursor-pointer text-[30px] hover:text-orange-400"></FaTwitterSquare>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
