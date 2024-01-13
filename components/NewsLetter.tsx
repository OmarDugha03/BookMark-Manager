"use client";
import Image from "next/image";
import { singUpDes, singUpMob, successIcon } from "@/Images/index";
import { Text } from "@/components/index";
import { useState } from "react";
import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

type Inputs = {
  email: string;
};
const NewsLetter = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "omardugha@gmail.com",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data): void => {
    console.log(data);
  };
  const InputValue = watch("email");
  const contactInfo = [
    {
      id: 0,
      text: "Product discovery and building what matters",
    },
    {
      id: 1,
      text: "Measuring to ensure updates are a success",
    },
    {
      id: 2,
      text: "And much more!",
    },
  ];
  const [handleSub, setHandleSub] = useState(true);
  return (
    <>
      {handleSub ? (
        <div className="flex flex-col items-center justify-center px-4 text-left lg:px-20 md:justify-evenly lg:justify-between md:flex-row-reverse ">
          <Image
            src={singUpMob}
            alt="singUp"
            className="rounded-md md:hidden aspect-auto h-[80%] "
          />
          <Image
            src={singUpDes}
            alt="singUp"
            className="hidden md:block aspect-auto md:w-[60%] lg:max-w-md"
          />
          <div className="px-1 py-2">
            <h1 className="py-8 my-2 text-4xl font-black text-center md:text-2xl lg:text-7xl lg:mt-[-70px] md:text-left text-slate-900 md:">
              Stay updated!
            </h1>
            <p className="max-w-md py-4 text-center text-gray-500 md:text-left lg:text-left">
              Join 35,000+ product managers receiving monthly updates on:
            </p>
            <ul className="flex flex-col items-start justify-between ">
              {contactInfo.map((item) => (
                <li className="flex py-2 my-1" key={item.id}>
                  <Image
                    className="px-2"
                    src={successIcon}
                    width="40"
                    alt="check box Icon"
                  />
                  <Text>{item.text}</Text>
                </li>
              ))}
            </ul>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex flex-col py-4 mt-4 group ">
              <label htmlFor="email" className="mx-2 my-2 text-xs font-bold ">
                Email address
              </label>
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
                id="email"
                type="email"
                placeholder="Enter Your Email Address"
                className={classNames(
                  "w-full h-12 my-4 pl-4 md:w-[80%] leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none   focus:shadow-outline focus:outline-none focus:bg-white focus:border-[#5368df]",
                  errors.email
                    ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm    focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400 `
                    : " "
                )}
              />
              <span className="   italic mt-[-28px]  rounded-r rounded-l rounded-lg rounded-b font-bold text-rose-500 text-sm w-full text-left  ">
                {errors.email && errors.email.message}
              </span>
              <button
                type="button"
                onClick={() => setHandleSub(false)}
                className=" inline-block w-full h-full md:w-[80%]   px-5 py-4 mt-8 text-sm font-bold text-center text-white transition-all duration-200 ease-in-out delay-100 bg-orange-400 border border-transparent rounded-lg shadow-sm hover:bg-slate-900 hover:text-white group-invalid:pointer-events-none group-invalid:opacity-50 bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-slate-900 hover:border hover:border-slate-900 hover:font-medium ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center max-w-md py-12 mx-auto">
          <div className="flex flex-col p-4 ">
            <Image
              src={successIcon}
              alt="success"
              className="py-4 "
              width="42"
            />
            <h2 className="py-4 text-4xl font-black text-left text-slate-900 lg:text-5xl">
              Thanks for subscribing!
            </h2>
            <p className="text-sm text-gray-500 ">
              A confirmation email has been sent to{" "}
              <b className="text-slate-900">{InputValue}</b>. Please open it and
              click the button inside to confirm your subscription. Dismiss
              message
            </p>
            <Link
              href="/"
              className="bg-[#5368df] w-fit p-4 my-8 hover:bg-slate-900 hover:text-white font-bold text-white   transition-all duration-200 ease-in-out delay-100  focus:outline-none focus:ring-1 shadow-xl  rounded-lg  mb-2">
              Home Page
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetter;
