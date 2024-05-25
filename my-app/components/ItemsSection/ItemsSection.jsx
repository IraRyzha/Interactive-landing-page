import Link from "next/link";
import Image from "next/image";
import deepEarthDesktop from "./images-desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "./images-desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "./images-desktop/image-soccer-team.jpg";
import gridDesktop from "./images-desktop/image-grid.jpg";
import fromAboveDesktop from "./images-desktop/image-from-above.jpg";
import pocketBorealisDesktop from "./images-desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "./images-desktop/image-curiosity.jpg";
import fisheyeDesktop from "./images-desktop/image-fisheye.jpg";

import deepEarthMobile from "./images-mobile/image-deep-earth.jpg";
import nightArcadeMobile from "./images-mobile/image-night-arcade.jpg";
import soccerTeamMobile from "./images-mobile/image-soccer-team.jpg";
import gridMobile from "./images-mobile/image-grid.jpg";
import fromAboveMobile from "./images-mobile/image-from-above.jpg";
import pocketBorealisMobile from "./images-mobile/image-pocket-borealis.jpg";
import curiosityMobile from "./images-mobile/image-curiosity.jpg";
import fisheyeMobile from "./images-mobile/image-fisheye.jpg";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "@/context/AppContext";

const itemsListDesktop = [
  { name: "DEEP EARTH", photo: deepEarthDesktop, href: "" },
  { name: "NIGHT ARCADE", photo: nightArcadeDesktop, href: "" },
  { name: "SOCCER TEAM VR", photo: soccerTeamDesktop, href: "" },
  { name: "THE GRID", photo: gridDesktop, href: "" },
  { name: "FROM UP ABOVE VR", photo: fromAboveDesktop, href: "" },
  { name: "POCKET BOREALIS", photo: pocketBorealisDesktop, href: "" },
  { name: "THE CURIOSITY", photo: curiosityDesktop, href: "" },
  { name: "MAKE IT FISHEYE", photo: fisheyeDesktop, href: "" },
];

const itemsListMobile = [
  { name: "DEEP EARTH", photo: deepEarthMobile, href: "" },
  { name: "NIGHT ARCADE", photo: nightArcadeMobile, href: "" },
  { name: "SOCCER TEAM VR", photo: soccerTeamMobile, href: "" },
  { name: "THE GRID", photo: gridMobile, href: "" },
  { name: "FROM UP ABOVE VR", photo: fromAboveMobile, href: "" },
  { name: "POCKET BOREALIS", photo: pocketBorealisMobile, href: "" },
  { name: "THE CURIOSITY", photo: curiosityMobile, href: "" },
  { name: "MAKE IT FISHEYE", photo: fisheyeMobile, href: "" },
];

export function ItemsSection() {
  const { view } = useContext(MainContext);
  const renderItemsList =
    view === "desktop" ? itemsListDesktop : itemsListMobile;

  return (
    <section className="w-full h-auto md:pb-80 pb-[520px]">
      <div className="flex items-center justify-between py-20">
        <h3 className="text-3xl font-normal tracking-wider">OUR CREATIONS</h3>
        <button className="py-2 px-10 border-2 border-black border-opacity-65 hover:bg-black hover:opacity-55 group z-30 transition-all duration-300 ease-in-out">
          <span className="tracking-wider font-medium group-hover:text-white z-50">
            SEE ALL
          </span>
        </button>
      </div>
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-8">
        {renderItemsList.map((item, index) => {
          return (
            <li
              key={index}
              className="w-auto relative hover:opacity-65 transition-all duration-300 ease-in-out border-2"
            >
              <Image
                // fill
                className="w-full h-full"
                src={item.photo}
                alt={item.name}
              />
              <Link
                href={item.href}
                className="w-2/3 absolute md:inset-x-12 inset-x-5  bottom-10 text-3xl font-light hover:scale-[1.02] text-white tracking-wider"
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
