import Image from "next/image";
import interactiveImage from "./images/image-interactive.jpg";

export function DescriptionSection() {
  return (
    <section className="w-full h-auto py-40 relative border-2">
      <Image width={700} src={interactiveImage} alt="interactiveImage" />
      <div className="absolute bottom-0 right-0 w-[55%] p-20 h-auto border-2">
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
