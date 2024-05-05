"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { title } from "process";
import Socials from "./Socials";

const navElements = [
  { title: "Creon Pass" },
  { title: "Token", soon: true },
  { title: "AI Revenue", soon: true },
  { title: "AI Launchpad", soon: true },
];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="absolute top-0 lg:top-0 w-full z-50 flex justify-between items-center py-6 lg:py-4 px-5 lg:px-14 xl:px-10">
      <div className="flex items-center gap-3">
        <Image
          src={Logo}
          alt="Creon Logo"
          quality={100}
          loading="lazy"
          placeholder="blur"
          width={140}
          height={30}
        />
      </div>
      <div className="lg:flex hidden justify-between items-center gap-10">
        {navElements.map((element, index) => (
          <Link
            href={`#${element.title}`}
            key={index}
            className="relative text-base mr-4 hover:text-primary-main transition"
          >
            {element.title}
            {element.soon && (
              <span className="absolute text-[8px] top-0 -right-8 text-purple-600 px-1 py-[2px] bg-black rounded-full leading-[110%]">
                SOON
              </span>
            )}
          </Link>
        ))}
        <button className="hidden h-11 lg:flex lg:flex-col overflow-hidden items-center justify-center px-6 py-2 rounded-md text-base font-bold transition border-2 border-white btn-animation">
          <span>Connect</span>
          <span>Connect</span>
        </button>
      </div>

      <div className="lg:hidden flex items-center gap-3 transition-all">
        <button className="lg:hidden z-50 h-[40px] flex flex-col overflow-hidden items-center justify-center px-7 py-2 rounded-md transition border-2 border-white btn-animation">
          <span>Connect</span>
          <span>Connect</span>
        </button>
        {toggle ? (
          <X
            className="size-[40px] object-contain z-50 bg-blue-500 rounded-md"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <Menu
            className="size-[40px] p-1 object-contain z-50 bg-white text-black rounded-md"
            onClick={() => setToggle(!toggle)}
          />
        )}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col p-6 bg-black absolute top-0 right-0 w-1/2 h-screen border-2 dark:border-white border-gray-900`}
        >
          <ul className="list-none flex justify-start items-start flex-1 flex-col mt-[84px]">
            {navElements.map((element, index) => (
              <li
                key={index}
                className={`border-[#13171d] text-lg py-4 w-full ${index === navElements.length - 1 ? "border-y-2" : "border-t-2"}`}
              >
                <Link
                  href={`#${element.title}`}
                  key={index}
                  className="relative text-base mr-4 hover:text-primary-main transition"
                >
                  {element.title}
                  {element.soon && (
                    <span className="absolute text-[8px] top-0 -right-8 text-purple-600 px-1 py-[2px] bg-black rounded-full leading-[110%]">
                      SOON
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Socials />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
