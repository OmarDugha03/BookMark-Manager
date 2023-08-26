"use client";
import { FC } from "react";
import Image from "next/image";
import { Button, Paragraph, Text } from "@/components/index";
import { firefox, chrome, opera } from "@/Images/index";
import { motion as m } from "framer-motion";
interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  const cardInfo = [
    {
      id: 0,
      heading: "Add to Chrome",
      version: "Minimum version 62",
      img: chrome,
    },
    {
      id: 1,
      heading: "Add to Chrome",
      version: "Minimum version 62",
      img: firefox,
    },
    {
      id: 2,
      heading: "Add to Chrome",
      version: "Minimum version 62",
      img: opera,
    },
  ];
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-4 py-12 lg:flex-row bg-[#EDF2F7]">
      {cardInfo.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center px-4 py-8 m-4 rounded-md bg-slate-200 shadow-[0px_0px_25px_0px_#5368df]">
          <Image src={item.img} alt={item.heading} priority></Image>
          <Text className="p-4 lg:text-xl">{item.heading}</Text>
          <Paragraph className="pt-4 pb-8 text-center text-gray-500 lg:text-left ">
            {item.version}
          </Paragraph>
          <Button
            variant="mine"
            className="hover:outline-none hover:ring-1 hover:ring-slate-900 ">
            Add & Install Extension
          </Button>
        </div>
      ))}
    </m.div>
  );
};

export default Card;
