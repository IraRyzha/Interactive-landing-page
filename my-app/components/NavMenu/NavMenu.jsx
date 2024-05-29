import Image from "next/image";
import Link from "next/link";
import logo from "./icons/logo.svg";
import iconHamburger from "./icons/icon-hamburger.svg";
import { NavDialog } from "./NavDialog";
import { useState } from "react";
import { menuItems } from "@/constants";

export function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className="w-auto h-auto max-w-screen flex justify-between absolute z-50 top-0 xl:inset-x-52 lg:inset-x-32 md:inset-x-20 sm:inset-x-12 inset-x-10 items-center py-16">
      <Link href={"/"}>
        <Image width={150} height={150} src={logo} alt="logo" />
      </Link>
      <Image
        width={35}
        height={35}
        src={iconHamburger}
        alt="iconHamburger"
        className="md:hidden block"
        onClick={handleMenu}
      />
      <ul className="md:flex hidden items-center flex-row md:mt-0 gap-8">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="text-white font-semibold hover:scale-[1.02] relative group transition-all duration-500 ease-out"
            >
              <Link href={item.href}>
                {item.name}
                <span className="flex-1 absolute w-full h-[2px] bg-white rounded-lg -bottom-1 transform left-[50%] -translate-x-[50%] hidden group-hover:block transition-all duration-500 ease-out"></span>
              </Link>
            </li>
          );
        })}
      </ul>
      <NavDialog isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
