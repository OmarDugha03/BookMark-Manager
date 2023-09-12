"use client";
import classNames from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import { errorIcon } from "@/Images/index";
import Image from "next/image";
type Inputs = {
  email: string;
};
const Contact = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 lg:p-4 bg-[#5368df] mt-20">
      <p className="py-2 pt-12 text-sm font-bold tracking-widest text-center text-gray-800 uppercase md:text-center ">
        35,000 + already joined
      </p>
      <h2 className="pb-2 text-lg font-bold text-center text-white lg:text-2xl">
        Stay up-to-date with what we’re doing
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        action=""
        className="flex flex-col items-center justify-center w-full pt-12 text-left group lg:max-w-xl md:max-w-sm lg:flex-row lg:mx-4 lg:py-8 ">
        <span className="xs:hidden lg:flex absolute w-10  mr-[-200px]">
          {errors.email && <Image src={errorIcon} alt="error Icon"></Image>}
        </span>
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
          placeholder="Enter Your Email Address"
          className={classNames(
            "w-full py-3 pl-2 my-5  leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none   lg:mx-4 lg:pr-12 lg:pl-4 focus:shadow-outline focus:outline-none focus:bg-white focus:border-[#5368df]",
            errors.email
              ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm    focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400 `
              : " "
          )}
        />
        <span className=" lg:hidden pl-4 italic mt-[-25px]  rounded-r rounded-l rounded-lg rounded-b bg-red-500 text-sm w-full text-left text-white ">
          {errors.email && errors.email.message}
        </span>
        <span className="mt-[-48px] xs:mr-[-240px] s:mr-[-285px] ls:mr-[-340px] lg:hidden">
          {errors.email && <Image src={errorIcon} alt="error Icon"></Image>}
        </span>
        <button className="inline-block w-full lg:w-[30%]  h-full px-5 mt-16 py-4 text-center lg:my-5 lg:mx-4  group-invalid:pointer-events-none group-invalid:opacity-30 transition-all duration-200 ease-in-out delay-100 bg-gradient-to-br text-white bg-orange-400 hover:bg-slate-50 hover:text-orange-400  border border-transparent  focus:ring-2 focus:outline-none focus:ring-orange-400 hover:border hover:border-orange-400 shadow-sm font-bold hover:font-medium rounded-lg text-sm ">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default Contact;
