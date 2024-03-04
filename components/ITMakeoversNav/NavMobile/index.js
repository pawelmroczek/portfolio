import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import "animate.css";

const NavMobile = ({links}) => {
  

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center md:hidden sticky top-0">
        <Link href="#" passHref>
          <span className="text-3xl">Cześć!</span>
        </Link>
        <div
          className={`${
            !navOpen ? "flex flex-col items-end gap-[10px]" : "flex flex-col items-end"
          } w-1/4 `}
          onClick={() => {
            setNavOpen(!navOpen);
            
          }}
        >
          <div
            className={` transition-all duration-500 w-2/3 h-[4px] bg-black rounded-lg ${
              !navOpen ? "" : "rotate-[45deg]  h-[8px]"
            }`}
          ></div>
          <div
            className={`transition-all duration-500 w-2/3 h-[4px] bg-black rounded-lg ${
              !navOpen ? "" : "hidden"
            }`}
          ></div>
          <div
            className={`transition-all duration-500 w-2/3 h-[4px] bg-black rounded-lg ${
              !navOpen ? "" : "rotate-[-45deg] mt-[-8px] h-[8px]"
            }`}
          ></div>
        </div>
      </div>
      <div
        className={` flex flex-col pt-14  items-center  gap-8 ${
          !navOpen ? " hidden  " : "animate__animated animate__slideInUp   bg-white h-screen  "
        }`}
      >
        {links.map((link, index) => (
          <div key={link.name}>
            <a
              href={link.link}
              className={`block text-2xl font-bold text-black px-3  pb-[6px] ${
                index === 0 ? "border-black border-b-4" : ""
              }`}
              onClick={() => {
                setNavOpen(false);
            
              }}
            >
              {link.name}
            </a>
          </div>
        ))}
        <a onClick={() => {
                setNavOpen(false);
            
              }} className="mt-5 bg-black text-[#FFF] block w-[70%] text-center py-3 rounded-2xl text-lg font-light shadow-2xl" href="#kontakt">
          Skontaktuj się
        </a>
        {/* <Image
          className="pt-5"
          src="/darkMode.svg"
          alt="dark mode icon"
          width={40}
          height={70}
        /> */}
      </div>
    </>
  );
};

export default NavMobile;
