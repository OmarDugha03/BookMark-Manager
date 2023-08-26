"use client";
import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { motion as m, AnimatePresence } from "framer-motion";
export default function Disclosure() {
  const [disclosures, setDisclosures] = useState([
    {
      id: "disclosure-panel-1",
      isOpen: false,
      buttonText: "What is Bookmark?",
      panelText:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
      id: "disclosure-panel-2",
      isOpen: false,
      buttonText: "How can I request a new browser?",
      panelText:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      id: "disclosure-panel-3",
      isOpen: false,
      buttonText: "Is there a mobile app?",
      panelText:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      id: "disclosure-panel-4",
      isOpen: false,
      buttonText: "What about other Chromium browsers?",
      panelText:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ]);

  const handleClick = (id: string) => {
    setDisclosures(
      disclosures.map((d) =>
        d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
      )
    );
  };

  return (
    <div className="w-full px-4 pt-16 pb-12 border-slate-700 ">
      <m.div className="w-full max-w-md p-2 mx-auto rounded-2xl">
        {disclosures.map(({ id, isOpen, buttonText, panelText }) => (
          <div
            key={id}
            className="duration-300 ease-in-out delay-100 hover:text-orange-400">
            <button
              className={classNames(
                "flex  leading-5  hover:text-orange-400 duration-300 ease-in-out delay-100 text-left  w-full justify-between text-lg  border-b border-slate-900 px-2 py-8 font-medium text-slate-900 lg:text-xl ",
                id === "disclosure-panel-1" ? "border-t border-slate-900" : ""
              )}
              onClick={() => handleClick(id)}
              aria-expanded={isOpen}
              {...(isOpen && { "aria-controls": id })}>
              {/*       <div className={classNames(isOpen ? "font-extrabold" : " ")}> */}
              {buttonText}
              {/*            </div> */}
              <ChevronUpIcon
                className={`${
                  isOpen ? "rotate-[-180] transform" : "rotate-180 transform"
                } h-5 w-5  hover:text-orange-400 duration-300 ease-in-out delay-100`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    translateY: 10,
                  }}
                  exit={{
                    opacity: 0,
                    translateY: -15,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  transition={{ duration: 0.5 }}
                  className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                  <div>{panelText}</div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </m.div>
    </div>
  );
}
