import { menuItems } from "@/constants";
import logo from "./icons/logo.svg";
import Link from "next/link";
import Image from "next/image";

export function FooterMenu() {
  return (
    <div className="w-full h-full flex-1 flex justify-between flex-col md:items-start items-center gap-5">
      <Link href={"/"}>
        <Image width={150} height={150} src={logo} alt="logo" />
      </Link>
      <ul className="h-auto max-h-max flex items-center md:flex-row md:my-0 my-12 gap-5 flex-col">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="text-white text-center font-semibold hover:scale-[1.02] relative group transition-all duration-500 ease-out"
            >
              <Link href={item.href}>
                {item.name}
                <span className="flex-1 absolute w-full h-[2px] bg-white rounded-lg -bottom-1 transform left-[50%] -translate-x-[50%] hidden group-hover:block transition-all duration-500 ease-out"></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
