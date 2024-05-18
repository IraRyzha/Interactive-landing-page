import Image from "next/image";
import Link from "next/link";
import iconFacebook from "./icons/icon-facebook.svg";
import iconInstagram from "./icons/icon-instagram.svg";
import iconPinterest from "./icons/icon-pinterest.svg";
import iconTwitter from "./icons/icon-twitter.svg";
import { NavMenu } from "../NavMenu";

const footerIcons = [iconFacebook, iconTwitter, iconPinterest, iconInstagram];

export function FooterSection() {
  return (
    <div className="w-screen h-auto z-50 absolute inset-x-0 bottom-0 flex items-stretch justify-between py-8 px-52 bg-black border-2">
      <NavMenu type="footer" />
      <div className="flex flex-col items-end justify-between gap-5 border-2">
        <div className="flex items-center gap-5">
          {footerIcons.map((icon, index) => {
            return (
              <Link href={""} key={index} className="hover:scale-[1.02]">
                <Image width={25} height={25} src={icon} alt="icon" />
              </Link>
            );
          })}
        </div>
        <span className="text-white opacity-50 text-sm font-semibold tracking-wide">
          © 2021 Loopstudios. All rights reserved.
        </span>
      </div>
    </div>
  );
}
