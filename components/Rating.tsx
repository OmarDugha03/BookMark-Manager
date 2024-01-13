import { FC } from "react";
import Image from "next/image";
import { star } from "@/Images/index";
import classNames from "classnames";
interface RatingProps {
  name: string;
  className?: any;
}

const Rating: FC<RatingProps> = ({ name, className }) => {
  return (
    <div
      className={classNames(
        "md:flex md:items-center relative md:justify-center lg:justify-end",
        className
      )}>
      <div className="flex flex-col  p-1 m-4 rounded-lg md:flex-row md:justify-evenly  md:w-[60%] lg:max-w-md bg-slate-300">
        <div className="flex items-center justify-around py-2 ">
          <Image src={star} alt="Stars" width="16" />
          <Image src={star} alt="Stars" width="16" />
          <Image src={star} alt="Stars" width="16" />
          <Image src={star} alt="Stars" width="16" />
          <Image src={star} alt="Stars" width="16" />
        </div>
        <div className="py-2 text-lg font-bold text-center text-[#5368df]">
          Rating 5 Stars in {name}
        </div>
      </div>
    </div>
  );
};

export default Rating;
