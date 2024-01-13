"use client";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { bars, close } from "../public/images/index";
// !this one is Out of use
export default function MyDropdown() {
  const [toggle, setToggle] = useState<boolean>(true);
  function handleToggle() {
    return setToggle((prev) => {
      return !prev;
    });
  }
  return (
    <div className="text-sm text-right w-36 lg:hidden ">
      <Menu as="div" className="inline-block py-2 text-left">
        <div>
          <Menu.Button
            onClick={handleToggle}
            className="inline-flex justify-center w-full py-2 text-sm font-medium text-white rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {toggle ? (
              <Image
                className="p-4 "
                src={bars}
                alt="bars"
                priority
                width={50}
                height={50}></Image>
            ) : (
              <Image
                className="p-4 rounded-lg bg-slate-300"
                src={close}
                alt="close"
                priority
                width={50}
                height={50}></Image>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items
            onClick={handleToggle}
            className="absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg right-4 top-30 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Feature
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="/pricing">
                    Pricing
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Contact
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    Login
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1"></div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
