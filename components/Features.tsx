"use client";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { fe1, fe2, fe3 } from "@/Images/index";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Button, { buttonVariants } from "./ui/Button";
import Link from "next/link";

export default function Features() {
  const FeatureInfo = [
    {
      id: 0,
      tabName: "Simple BookMark",
      tabHeading: "Bookmark in one click",
      tabContent:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
      img: fe1,
    },
    {
      id: 1,
      tabName: "Speedy Searching",
      tabHeading: "Share your bookmarks",
      tabContent:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
      img: fe2,
    },
    {
      id: 2,
      tabName: "Easy Sharing",
      tabHeading: " Intelligent search",
      tabContent:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: fe3,
    },
  ];
  return (
    <div id="Features" className="w-full max-w-6xl px-2 py-16 sm:px-0 ">
      <Tab.Group
        manual
        as="div"
        className="flex flex-col justify-center p-4 space-x-1 text-center rounded-xl">
        <Tab.List className="lg:flex ">
          {FeatureInfo.map((item) => (
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-4 text-sm font-bold leading-5 text-slate-900  border-b border-slate-700 ",
                  " duration-200 ease-in-out delay-100",
                  selected
                    ? " border-b-4 border-slate-400 shadow bg-[#5368df] text-white"
                    : "text-slate-600 hover:bg-slate-800 hover:text-white"
                )
              }
              key={item.id}>
              {item.tabName}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="py-12 mx-auto mt-2 ">
          {FeatureInfo.map((item) => (
            <Tab.Panel
              className={classNames(
                "lg:flex lg:justify-between lg:flex-row rounded-xl flex flex-col justify-center items-center p-3",
                " duration-200 ease-in-out delay-100"
              )}
              key={item.id}>
              <m.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <Image src={item.img} alt="features" priority />
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:pl-6 lg:w-96 lg:flex lg:flex-col lg:justify-center lg:items-start">
                <m.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="px-2 pt-12 text-xl font-bold text-center lg:text-left text-slate-900 lg:text-3xl">
                  {item.tabHeading}
                </m.h2>
                <m.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-8 mt-4 text-center text-gray-500 lg:text-left">
                  {item.tabContent}
                </m.p>
                <Link
                  className=" py-4 px-2 w-[30%] bg-[#5368df] shadow-[0px_0px_25px_0px_#5368df] font-bold hover:font-medium hover:bg-slate-900 text-white transition-all  delay-200 duration-200 ease-in-out  rounded-lg"
                  href="/Contact">
                  More Info
                </Link>
              </m.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
