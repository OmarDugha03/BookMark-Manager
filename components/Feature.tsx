"use client";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Button from "./ui/Button";
import { fe1, fe2, fe3 } from "../public/images/index";
import Image from "next/image";
import { motion as m } from "framer-motion";
/*  this for testing  */
export default function Feature() {
  return (
    <div className="w-full px-2 py-16 sm:px-0 ">
      <Tab.Group
        manual
        as="div"
        className="flex flex-col justify-center p-4 space-x-1 text-center rounded-xl">
        <Tab.List className="lg:flex ">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-4 text-sm font-medium leading-5 text-slate-900  border-b border-slate-700 ",
                " duration-200 ease-in-out delay-100",
                selected
                  ? " border-b-4 shadow bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-900 hover:text-white"
              )
            }>
            Simple BookMark
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-4 text-sm font-medium leading-5 text-slate-900 border-b border-slate-700",
                " duration-200 ease-in-out delay-100 ",
                selected
                  ? "border-b-4 shadow bg-slate-900 text-white "
                  : "text-slate-600 hover:bg-slate-900 hover:text-white"
              )
            }>
            Speedy Searching
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-4 text-sm font-medium leading-5 text-slate-900 border-b border-slate-700",
                " duration-200 ease-in-out delay-100 ",
                selected
                  ? "border-b-4 shadow bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-900 hover:text-white"
              )
            }>
            Easy Sharing
          </Tab>
        </Tab.List>
        <Tab.Panels className="w-full py-12 mt-2">
          <Tab.Panel
            className={classNames(
              "lg:flex lg:justify-between lg:items-center rounded-xl lg:flex-1 p-3",
              " duration-200 ease-in-out delay-100"
            )}>
            <m.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <Image src={fe1} alt="features" priority />
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:pl-6 lg:w-96 lg:flex lg:flex-col lg:justify-center lg:items-start">
              <h2 className="px-2 pt-12 text-xl font-bold text-center lg:text-left text-slate-900 lg:text-3xl">
                Bookmark in one click
              </h2>
              <p className="py-4 pt-4 text-center text-gray-500 lg:text-left">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <Button variant="mine" size="lg">
                More Info
              </Button>
            </m.div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "lg:flex lg:justify-between lg:items-center rounded-xl lg:flex-1 p-3   ",
              " duration-200 ease-in-out delay-100"
            )}>
            <m.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <Image src={fe2} alt="features" priority />
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:pl-6 lg:w-96 lg:flex lg:flex-col lg:justify-center lg:items-start">
              <h2 className="px-2 pt-12 text-xl font-bold text-center lg:text-left text-slate-900 lg:text-3xl">
                Share your bookmarks
              </h2>
              <p className="py-4 pt-4 text-center text-gray-500 lg:text-left">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button
              </p>
              <Button variant="mine" size="lg">
                More Info
              </Button>
            </m.div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "lg:flex lg:justify-between lg:items-center rounded-xl lg:flex-1 p-3 ",
              " duration-200 ease-in-out delay-100"
            )}>
            <m.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>
              <Image src={fe3} alt="features" priority />
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:pl-6 lg:w-96 lg:flex lg:flex-col lg:justify-center lg:items-start">
              <h2 className="px-2 pt-12 text-xl font-bold text-center lg:text-left text-slate-900 lg:text-3xl">
                Intelligent search
              </h2>
              <p className="py-4 pt-4 text-center text-gray-500 lg:text-left">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <Button variant="mine" size="lg">
                More Info
              </Button>
            </m.div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
