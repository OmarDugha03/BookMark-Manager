import { FC } from "react"
import { logo } from "@/Images/index"
import Image from "next/image"
import { MobileMenu, List } from "@/components/index"
import Link from "next/link"

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex items-center justify-between w-full p-4 lg:p-12 ">
      <Link href="/">
        <Image className="z-10" src={logo} alt={"logo"} priority></Image>
      </Link>
      <MobileMenu />
      {/* for deskTop :  */}
      <List />
    </header>
  )
}

interface HeaderProps {}
export default Header
