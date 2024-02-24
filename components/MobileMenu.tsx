"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { bars, close } from "@/Images/index"
import classNames from "classnames"
function MobileMenu() {
  const menuInfo = [
    {
      id: 0,
      text: "Feature",
      href: "./#Features",
    },
    {
      id: 1,
      text: "Pricing",
      href: "/pricing",
    },
    {
      id: 2,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 3,
      text: "Login",
      href: "/login",
    },
  ]

  const [toggle, setToggle] = useState<boolean>(false)
  function handleToggle() {
    return setToggle((prev) => {
      return !prev
    })
  }
  return (
    <nav className="relative text-sm text-right lg:hidden">
      {toggle ? (
        <Image
          className="z-[100] p-4 rounded-lg bg-slate-300"
          src={close}
          alt="close"
          onClick={handleToggle}
          priority
          width={50}
          height={50}
        />
      ) : (
        <Image
          className="p-4 "
          src={bars}
          alt="bars"
          priority
          onClick={handleToggle}
          width={50}
          height={50}
        />
      )}

      <div
        className={classNames(
          toggle &&
            "absolute z-30 flex flex-col h-[115px] mt-2 text-left bg-white divide-y rounded-md shadow-lg divide-slate-100 w-44 right-1 top-16 "
        )}>
        {toggle &&
          menuInfo.map((item) => (
            <Link
              key={item.id}
              onClick={handleToggle}
              href={item.href}
              className="my-1">
              {item.text}
            </Link>
          ))}
      </div>
      {/* Overlay  */}
      {toggle && (
        <div
          className="fixed top-0 left-0 z-[20] w-screen h-screen bg-black opacity-70"
          onClick={handleToggle}
        />
      )}
    </nav>
  )
}
export default MobileMenu
