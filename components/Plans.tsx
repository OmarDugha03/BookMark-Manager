"use client";
import classNames from "classnames";
import Image from "next/image";
import { JSX, SVGProps, useState } from "react";
import { successIcon } from "@/Images/index";
import Button from "./ui/Button";
import WhyBM from "./WhyBM/WhyBM";
const Plans = ({}) => {
  const [toggle, setToggle] = useState([
    {
      id: 0,
      name: "Basic ",
      bookMarks: "36+",
      price: "10$",
      syncInfo: false,
      isToggle: false,
    },
    {
      id: 1,
      name: "Professional ",
      bookMarks: "100+",
      price: "20$",
      syncInfo: true,
      isToggle: true,
    },
    {
      id: 2,
      name: "Master",
      bookMarks: "unlimited",
      price: "30$",
      syncInfo: true,
      isToggle: false,
    },
  ]);
  const handleClick = (id: number) => {
    setToggle(
      toggle.map((d) =>
        d.id === id
          ? { ...d, isToggle: !d.isToggle }
          : { ...d, isToggle: false }
      )
    );
  };
  function handleSub() {
    console.log("Hello there from Continue");
  }
  return (
    <>
      <h1 className="px-2 py-4 text-2xl font-extrabold text-center lg:p-10 text-slate-900 lg:text-4xl">
        Our Pricing
      </h1>
      <div className="flex flex-col px-6 py-8 pb-4 lg:flex-row lg:justify-evenly group ">
        {toggle.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleClick(plan.id)}
            className={classNames(
              "py-4  my-2 rounded-lg px-2   drop-shadow-md lg:py-24 lg:px-8 w-full lg:m-12 flex flex-col lg:mx-4 transition-all duration-200 ease-in-out delay-100",
              plan.isToggle
                ? "   text-white ring-1 bg-[#5368df9a] ring-[#5368df] "
                : "bg-white "
            )}>
            <h2
              className={classNames(
                "px-2 py-2 text-2xl  font-extrabold text-left text-slate-900 lg:text-4xl transition-all duration-200 ease-in-out delay-100",
                plan.isToggle ? "text-white  " : "text-slate-900  "
              )}>
              {plan.name}
            </h2>
            <hr className="py-2" />
            <h3 className="px-2 py-2 ">BookMarks Counts : {plan.bookMarks}</h3>
            <hr className="py-2" />
            <h3 className="flex px-2 py-2">
              <hr className="py-2" />
              Price : {plan.price}
            </h3>
            <hr className="py-2" />
            <h3 className="flex px-2 py-2 ">
              <hr className="py-2" />
              Sync :
              {plan.syncInfo ? (
                <Image
                  src={successIcon}
                  alt="successIcon"
                  width="42"
                  className="px-2 mx-2"
                />
              ) : (
                " Limited !"
              )}
            </h3>
            {plan.isToggle && (
              <CheckIcon className="absolute left-auto z-20 w-6 h-6 top-4 right-3" />
            )}
          </div>
        ))}
      </div>
      <Button
        onClick={handleSub}
        type="submit"
        variant="mine"
        className="flex justify-center h-12 mx-auto lg:w-[30%] text-lg py-2">
        Continue
      </Button>
      <WhyBM />
    </>
  );
};
function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="black" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Plans;
