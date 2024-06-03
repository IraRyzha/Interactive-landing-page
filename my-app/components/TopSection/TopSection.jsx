import { MainContext } from "@/context/AppContext";
import Image from "next/image";
import { useContext } from "react";
import backgroundImageDesktop from "./images/image-hero-desktop.jpg";
import backgroundImageMobile from "./images/image-hero-mobile.jpg";

export function TopSection() {
  const { view } = useContext(MainContext);
  const renderImage =
    view === "desktop" ? backgroundImageDesktop : backgroundImageMobile;
  return (
    <header className="w-screen max-w-screen h-screen relative flex items-center justify-start pt-40">
      <div className="xl:w-[40%] lg:w-1/2 md:w-1/2 w-full h-auto relative p-10 xl:mx-52 lg:mx-32 md:mx-20 sm:mx-12 mx-10 mt-1/2 group hover:scale-[0.99] border-2 transition-all duration-300 ease-in-out">
        <h1 className="text-white font-light lg:text-7xl sm:text-5xl text-4xl group-hover:scale-[1.01] tracking-wider">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
      <Image
        className="w-full h-full -z-50 fixed"
        fill
        src={renderImage}
        alt="backgroundImage"
      />
      <div className="-z-50 w-full h-full absolute inset-0 bg-black opacity-50"></div>
    </header>
  );
}
