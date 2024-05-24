import Image from "next/image";
import backgroundImage from "./images/image-hero.jpg";

export function TopSection() {
  return (
    <header className="w-screen h-screen relative flex items-center justify-start pt-40 border-2 border-yellow-400">
      <div className="xl:w-[40%] lg:w-1/2 md:w-1/2 w-full h-auto relative p-10 xl:mx-52 lg:mx-32 md:mx-20 sm:mx-12 mx-10 mt-1/2 border-2">
        <h1 className="text-white font-light lg:text-7xl md:text-6xl sm:text-6xl tracking-wider">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
      <Image
        className="-z-50 fixed"
        fill
        src={backgroundImage}
        alt="backgroundImage"
      />
      <div className="-z-50 w-full h-full absolute inset-0 bg-black opacity-50"></div>
    </header>
  );
}
