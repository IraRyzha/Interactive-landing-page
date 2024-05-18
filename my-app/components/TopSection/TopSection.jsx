import Image from "next/image";
import backgroundImage from "./images/image-hero.jpg";

export function TopSection() {
  return (
    <main className="w-screen h-screen relative flex items-center pt-40 border-2">
      <div className="w-2/5 h-auto relative p-10 mx-44 mt-1/2 border-2">
        <h1 className="text-white font-light text-7xl tracking-wider">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
      <Image className="-z-50 fixed" fill src={backgroundImage} />
      <div className="-z-50 w-full h-full absolute inset-0 bg-black opacity-50"></div>
    </main>
  );
}
