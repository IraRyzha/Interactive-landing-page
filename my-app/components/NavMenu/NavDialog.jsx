import { menuItems } from "@/constants";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import iconClose from "./icons/icon-close.svg";

export function NavDialog({ isOpen, onClose }) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-1000 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-1000 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-gray-400 shadow-xl">
                    <div className="flex-1 p-12 mt-5">
                      <div className="flex flex-col items-stretch gap-10">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-2xl font-bold text-white">
                            Menu
                          </Dialog.Title>

                          <button onClick={onClose} className="">
                            <Image
                              width={25}
                              height={25}
                              src={iconClose}
                              alt="iconClose"
                            />
                          </button>
                        </div>

                        <ul className="flex flex-col items-start mt-10 gap-8">
                          {menuItems.map((item, index) => {
                            return (
                              <li
                                key={index}
                                className="text-black text-xl font-semibold hover:scale-[1.02] relative group transition-all duration-500 ease-out"
                              >
                                <Link href={item.href}>
                                  {item.name}
                                  <span className="flex-1 absolute w-full h-[2px] bg-white rounded-lg -bottom-1 transform left-[50%] -translate-x-[50%] hidden group-hover:block transition-all duration-500 ease-out"></span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
