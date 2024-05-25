import Image from "next/image";
import interactiveImage from "./images/image-interactive.jpg";

export function DescriptionSection() {
  return (
    <section className="w-full h-auto py-40 relative lg:block flex md:flex-row flex-col gap-10 sm:items-center border-2">
      <div className="relative lg:w-1/2 md:w-2/3 sm:w-full h-[400px] border-2">
        <Image
          fill
          className="absolute w-full h-auto"
          src={interactiveImage}
          alt="interactiveImage"
        />
      </div>

      <div className="md:absolute sm:block md:bottom-0 md:right-0 md:w-[55%] sm:text-center md:text-left 2xl:p-16 xl:p-14 lg:p-12 md:p-8 p-5 h-auto border-2">
        <h2 className="text-5xl font-light mb-5">
          THE LEADER IN INTERACTIVE VR
        </h2>
        <p className="opacity-50 font-semibold">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
