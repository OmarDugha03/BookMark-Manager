import { FC } from "react";
import { Text } from "@/components/index";
interface DownTextProps {}

const DownText: FC<DownTextProps> = ({}) => {
  return (
    <div className="bg-[#EDF2F7] pt-12 mt-4">
      <Text size="h3">Download the extension</Text>
      <Text
        size="p"
        className="py-4 text-center text-gray-500 md:text-center md:px-12 ">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </Text>
    </div>
  );
};

export default DownText;
