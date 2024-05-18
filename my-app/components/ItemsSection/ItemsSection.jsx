import Link from "next/link";
import Image from "next/image";
import deepEarth from "./images/image-deep-earth.jpg";
import nightArcade from "./images/image-night-arcade.jpg";
import soccerTeam from "./images/image-soccer-team.jpg";
import grid from "./images/image-grid.jpg";
import fromAbove from "./images/image-from-above.jpg";
import pocketBorealis from "./images/image-pocket-borealis.jpg";
import curiosity from "./images/image-curiosity.jpg";
import fisheye from "./images/image-fisheye.jpg";

const itemsList = [
  { name: "DEEP EARTH", photo: deepEarth, href: "" },
  { name: "NIGHT ARCADE", photo: nightArcade, href: "" },
  { name: "SOCCER TEAM VR", photo: soccerTeam, href: "" },
  { name: "THE GRID", photo: grid, href: "" },
  { name: "FROM UP ABOVE VR", photo: fromAbove, href: "" },
  { name: "POCKET BOREALIS", photo: pocketBorealis, href: "" },
  { name: "THE CURIOSITY", photo: curiosity, href: "" },
  { name: "MAKE IT FISHEYE", photo: fisheye, href: "" },
];

export function ItemsSection() {
  return (
    <section className="w-full h-auto pb-80">
      <div className="flex items-center justify-between py-20">
        <h3 className="text-3xl font-normal tracking-wider">OUR CREATIONS</h3>
        <button className="py-2 px-10 border-2 border-black border-opacity-65 hover:bg-black hover:opacity-55 group z-30 transition-all duration-300 ease-in-out">
          <span className="tracking-wider font-medium group-hover:text-white z-50">
            SEE ALL
          </span>
        </button>
      </div>
      <ul className="flex justify-between flex-wrap gap-8">
        {itemsList.map((item, index) => {
          return (
            <li
              key={index}
              className="w-[23%] relative hover:opacity-65 transition-all duration-300 ease-in-out border-2"
            >
              <div className="w-full h-full absolute bg-black opacity-25"></div>
              <Image width={350} src={item.photo} alt={item.name} />
              <Link
                href={item.href}
                className="w-2/3 absolute inset-x-12 bottom-10 text-3xl font-light hover:scale-[1.02] text-white tracking-wider"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
