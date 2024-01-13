import { FC } from "react";
import { Paragraph } from "@/components/index";

interface FeaturetextProps {}

const Featuretext: FC<FeaturetextProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center px-2 text-center lg:px-[24rem] bg-[#EDF2F7] my-8 py-12">
      <h1 className="px-2 py-8 text-2xl font-bold text-center lg:py-4 text-slate-900 lg:text-4xl">
        Features
      </h1>
      <Paragraph className="w-full px-2 py-8 text-lg font-bold text-center text-gray-500 lg:py-4 ">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </Paragraph>
    </div>
  );
};

export default Featuretext;
