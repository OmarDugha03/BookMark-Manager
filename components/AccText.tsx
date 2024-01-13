import { FC } from "react";
import { Text } from "@/components/index";
interface AccTextProps {}

const AccText: FC<AccTextProps> = ({}) => {
  const heading: string = "Frequently Asked Questions";
  const paragraph: string =
    "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.";
  return (
    <div className="flex flex-col items-center justify-center ">
      <Text size="h4">{heading}</Text>
      <Text size="p">{paragraph}</Text>
    </div>
  );
};

export default AccText;
