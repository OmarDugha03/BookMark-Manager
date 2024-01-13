"use client";
import Link from "next/link";
import { FC } from "react";
import { logo, dashboard } from "@/Images/index";
import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import Button from "./ui/Button";
import Image from "next/image";
import { motion as m } from "framer-motion";
interface LaunchingProps {}
type Inputs = {
  email: string;
};
const Launching: FC<LaunchingProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "example@gmail.com",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data);
  };

  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col px-4 pt-4 mx-auto text-center ">
        <Image src={logo} alt="logo" width="500" className="py-4 lg:mx-auto" />
        <h1 className="py-4 text-xl text-gray-500 lg:text-4xl ">
          We are launching
          <b className="text-2xl font-extrabold text-center lg:text-left text-slate-900 lg:text-4xl">
            &nbsp;soon!
          </b>
        </h1>
        <h3 className="py-4 text-base font-bold text-center text-slate-900 opacity-[0.7] lg:text-2xl">
          Subscribe and get notified
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "filed is required !",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "this email not valid",
              },
            })}
            type="email"
            className={classNames(
              "w-full h-12 pl-4 md:w-[80%] lg:w-[50%] lg:mt-8 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none   focus:shadow-outline focus:outline-none focus:bg-white focus:border-[#5368df]",
              errors.email
                ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm    focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400 `
                : " "
            )}
          />
          <div className="w-full py-4 text-sm italic font-bold text-center rounded-lg rounded-r lg:text-left text-rose-500">
            {errors.email && errors.email.message}
          </div>
          <Button className="bg-[#5368df] lg:w-[50%] md:w-[80%] hover:bg-slate-900 my-4 w-full hover:text-white font-medium text-white   transition-all duration-100 ease-in-out delay-100  focus:outline-none focus:ring-1 shadow-xl  rounded-lg">
            Notify Me
          </Button>
        </form>
        <Image
          src={dashboard}
          alt="dashboard"
          className="px-4 py-8 lg:px-24"
          priority
        />
        <div className="flex items-center justify-center py-4 ">
          <Link target="_blank" href="https://www.facebook.com/">
            <FaFacebookSquare className="lg:text-5xl duration-300 ease-in-out delay-100 cursor-pointer text-[30px] hover:text-orange-400"></FaFacebookSquare>
          </Link>
          <Link target="_blank" href="https://www.twitter.com/">
            <FaTwitterSquare className="lg:text-5xl duration-300 ease-in-out delay-100 cursor-pointer text-[30px] hover:text-orange-400"></FaTwitterSquare>
          </Link>
        </div>
      </m.div>
      <footer className="p-4 text-lg font-medium text-center bg-slate-900 text-slate-200 lg:text-2xl">
        &copy; Copyright BookMark. All rights reserved.
      </footer>
    </>
  );
};

export default Launching;
