import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

interface ProfileCardProps {
  name: string;
  proof: string;
  avatar: any;
  className?: any;
}

const ProfileCard: FC<ProfileCardProps> = ({
  name,
  avatar,
  proof,
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center border-[0.5px] border-opacity-[0.4] border-slate-900 shadow-md drop-shadow hover:border-transparent outline-none justify-center max-w-md  pt-4 m-4  rounded-lg bg-slate-300 hover:shadow-[0px_0px_25px_0px_#5368df] duration-300 ease-in-out delay-100",
        className
      )}>
      <div className="flex flex-row-reverse items-center justify-between py-4 md:mx-8">
        <div className="flex flex-col my-2 m-4 w-[80%] ">
          <span className="text-lg font-black">{name}</span>
          <span className="text-[#5368df] font-bold ">Verified Buyer</span>
        </div>

        <Image
          className="w-[50%] h-[50%] rounded-[50%] mx-4 md:mx-12 border border-[gradient-to-t] from-cyan-500 to-blue-500"
          src={avatar}
          alt="avatar"
        />
      </div>
      <p className="p-4 m-1 text-center text-slate-900 md:text-center">
        {proof}
      </p>
    </div>
  );
};

export default ProfileCard;
