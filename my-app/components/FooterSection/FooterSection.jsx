import Image from "next/image";
import Link from "next/link";
import iconFacebook from "./icons/icon-facebook.svg";
import iconInstagram from "./icons/icon-instagram.svg";
import iconPinterest from "./icons/icon-pinterest.svg";
import iconTwitter from "./icons/icon-twitter.svg";
import { FooterMenu } from "./FooterMenu";

const footerIcons = [iconFacebook, iconTwitter, iconPinterest, iconInstagram];

export function FooterSection() {
  return (
    <div className="w-full h-auto bg-black z-50 absolute inset-x-0 bottom-0 flex-1 flex md:flex-row flex-col items-stretch md:justify-between py-8 xl:px-52 lg:px-32 md:px-20 sm:px-12 px-10">
      <FooterMenu />
      <div className="flex-1 flex flex-col md:items-end items-center justify-between gap-5">
        <div className="flex items-center md:self-end gap-5">
          {footerIcons.map((icon, index) => {
            return (
              <Link href={""} key={index} className="hover:scale-[1.02]">
                <Image width={25} height={25} src={icon} alt="icon" />
              </Link>
            );
          })}
        </div>
        <span className="text-white text-center wrap opacity-50 text-sm font-semibold tracking-wide">
          © 2021 Loopstudios. All rights reserved.
        </span>
      </div>
    </div>
  );
}
