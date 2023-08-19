import Image from "next/image";
import { FC } from "react";
import { hero } from "@/Images/index";
import Text from "./ui/heading";
import Button from "./ui/Button";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-12 mx-auto lg:flex lg:flex-row-reverse">
      <Image src={hero} alt="hero" priority></Image>
      <div className="lg:px-36">
        <Text size="h1">A Simple BookMark Manager</Text>
        <Text className="py-4 text-lg font-bold text-center text-gray-500 lg:text-left">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Text>
        <div className="flex items-center justify-center py-16 mx-0 lg:justify-start ">
          <Button
            variant="mine"
            className="px-4 py-6 mb-2 mr-2 font-medium transition-all shadow-[-1px_0px_34px_5px_#5368df] duration-200 ease-in-out delay-100 rounded-lg hover:text-slate-900 hover:bg-slate-200 ">
            Get it on Chrome
          </Button>
          <Button
            variant="default"
            className="px-4  py-6 mb-2 text-bold hover:text-white  font-medium transition-all shadow-[0px_0px_12px_0px_#718096]  duration-200 ease-in-out delay-100 border rounded-lg ">
            Get it On FireFox
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
