import { menuItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import logo from "./icons/logo.svg";

export function NavMenu() {
  return (
    <div className="w-auto h-auto absolute z-50 top-0 inset-x-40 flex items-center justify-between py-16 border-2">
      <Link href={"/"}>
        <Image width={150} height={150} src={logo} />
      </Link>
      <ul className="flex items-center gap-10">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="text-white font-semibold hover:scale-[1.02] transition-all duration-100"
            >
              <Link href={item.href} className="relative group">
                {item.name}
                <div className="w-full h-auto relative bottom-0 flex items-center">
                  <span className="flex-1 absolute inset-x-0 h-[2px] bg-white -bottom-1 transform w-full hidden group-hover:block translate-x-0 group-hover:translate-x-1 transition-all duration-1000"></span>
                  <span className="flex-1 absolute inset-x-0 h-[2px] bg-white -bottom-1 transform w-full hidden group-hover:block translate-x-0 group-hover:-translate-x-1 transition-all duration-1000"></span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
