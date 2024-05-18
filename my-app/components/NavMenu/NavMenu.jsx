import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import logo from "./icons/logo.svg";

const menuItems = [
  { name: "About", href: "" },
  { name: "Careers", href: "" },
  { name: "Events", href: "" },
  { name: "Products", href: "" },
  { name: "Support", href: "" },
];

/**
 * @param {{
 * type: string,
 * }} props
 */

export function NavMenu({ type }) {
  const navClassName = clsx(
    "w-auto h-auto flex justify-between border-2",
    {
      main: "absolute z-50 top-0 inset-x-52 items-center py-16",
      footer: "flex-col items-start",
    }[type]
  );
  return (
    <div className={navClassName}>
      <Link href={"/"}>
        <Image width={150} height={150} src={logo} alt="logo" />
      </Link>
      <ul className="flex items-center gap-8">
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
    </div>
  );
}
