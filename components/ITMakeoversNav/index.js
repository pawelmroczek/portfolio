"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NavMobile from "./NavMobile";
import NavAbove from "./NavAbove";

const ITMakeoversNav = ({links}) => {
 

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Dodajmy nasłuchiwanie zdarzenia przewijania przy montowaniu komponentu
    window.addEventListener('scroll', handleScroll);

    // Pamiętaj o usunięciu nasłuchiwania zdarzenia przy odmontowaniu komponentu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  return (
    <nav className={`p-4 lg:px-10 sticky top-0 z-[100] transition-all duration-500 bg-white ${scrollY>88 ? "shadow-md" : ""}`}  >
      <NavAbove links={links} /> 
      <NavMobile links={links} />
    </nav>
  );
};

export default ITMakeoversNav;
