import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

interface ListProps {}

const List: FC<ListProps> = ({}) => {
  const listInfo = [
    {
      id: 0,
      text: "Feature",
      href: "./#Features",
    },
    {
      id: 1,
      text: "Pricing",
      href: "/Pricing",
    },
    {
      id: 2,
      text: "Contact",
      href: "/Contact",
    },
    {
      id: 3,
      text: "Login",
      href: "/Login",
    },
  ];
  return (
    <>
      <ul className="hidden lg:flex lg:px-4 lg:justify-between ">
        {listInfo.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={classNames(
              "px-[2.5rem]  py-2 mb-2 mr-2 text-sm  hover:font-medium transition-all duration-200 ease-in-out delay-100 font-bold  ",
              item.text === "Login"
                ? " py-2 transition-all hover:font-bold duration-200 ease-in-out delay-100 bg-gradient-to-br text-white bg-orange-400 hover:text-orange-400 hover:bg-transparent border border-transparent  focus:ring-2 focus:outline-none focus:ring-orange-400 hover:border hover:border-orange-400 shadow-sm font-medium rounded-lg text-sm px-5 text-center mr-2 mb-2 "
                : "hover:bg-[#5368df]  font-bold  text-slate-900 hover:text-white    rounded-lg "
            )}>
            {item.text}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default List;
