import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { MainContext } from "@/context/AppContext";

const itemsListDesktop = [
  {
    name: "DEEP EARTH",
    src: "/images-desktop/image-deep-earth.jpg",
    href: "",
  },
  {
    name: "NIGHT ARCADE",
    src: "/images-desktop/image-night-arcade.jpg",
    href: "",
  },
  {
    name: "SOCCER TEAM VR",
    src: "/images-desktop/image-soccer-team.jpg",
    href: "",
  },
  {
    name: "THE GRID",
    src: "/images-desktop/image-grid.jpg",
    href: "",
  },
  {
    name: "FROM UP ABOVE VR",
    src: "/images-desktop/image-from-above.jpg",
    href: "",
  },
  {
    name: "POCKET BOREALIS",
    src: "/images-desktop/image-pocket-borealis.jpg",
    href: "",
  },
  {
    name: "THE CURIOSITY",
    src: "/images-desktop/image-curiosity.jpg",
    href: "",
  },
  {
    name: "MAKE IT FISHEYE",
    src: "/images-desktop/image-fisheye.jpg",
    href: "",
  },
];

const itemsListMobile = [
  {
    name: "DEEP EARTH",
    src: "/images-mobile/image-deep-earth.jpg",
    href: "",
  },
  {
    name: "NIGHT ARCADE",
    src: "/images-mobile/image-night-arcade.jpg",
    href: "",
  },
  {
    name: "SOCCER TEAM VR",
    src: "/images-mobile/image-soccer-team.jpg",
    href: "",
  },
  { name: "THE GRID", src: "/images-mobile/image-grid.jpg", href: "" },
  {
    name: "FROM UP ABOVE VR",
    src: "/images-mobile/image-from-above.jpg",
    href: "",
  },
  {
    name: "POCKET BOREALIS",
    src: "/images-mobile/image-pocket-borealis.jpg",
    href: "",
  },
  {
    name: "THE CURIOSITY",
    src: "/images-mobile/image-curiosity.jpg",
    href: "",
  },
  {
    name: "MAKE IT FISHEYE",
    src: "/images-mobile/image-fisheye.jpg",
    href: "",
  },
];

export function ItemsSection() {
  const { view } = useContext(MainContext);
  const renderItemsList =
    view === "desktop" ? itemsListDesktop : itemsListMobile;

  return (
    <section className="w-full h-auto max-w-screen md:pb-80 pb-[520px]">
      <div className="flex items-center md:justify-between justify-center md:py-20 py-16">
        <h3 className="md:text-3xl text-4xl md:font-normal font-light tracking-wider">
          OUR CREATIONS
        </h3>
        {view === "desktop" && <SeeAllButton />}
      </div>
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-8">
        {renderItemsList.map((item, index) => {
          console.log(item.src);
          return (
            <li
              key={index}
              className="w-auto relative hover:opacity-65 truncate text-wrap shadow transition-all duration-300 ease-in-out"
            >
              <Image
                width={500}
                height={500}
                className="w-full h-full hover:scale-[1.02] transition-all duration-300 ease-in-out"
                src={item.src}
                alt={item.name}
              />
              <Link
                href={item.href}
                className="w-2/3 absolute md:inset-x-12 inset-x-5 bottom-10 text-3xl font-light hover:scale-[1.02] text-white tracking-wider"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {view === "mobile" && (
        <div className="w-full h-auto border-2 flex items-center justify-center py-16">
          <SeeAllButton />
        </div>
      )}
    </section>
  );
}

function SeeAllButton() {
  return (
    <button className="py-2 px-12 border-2 border-black border-opacity-65 hover:bg-black hover:opacity-55 group z-30 transition-all duration-300 ease-in-out">
      <span className="tracking-widest font-medium group-hover:text-white z-50">
        SEE ALL
      </span>
    </button>
  );
}
