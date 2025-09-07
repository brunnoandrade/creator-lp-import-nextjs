"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Início",
      to: "home",
    },
    {
      title: "Recursos",
      to: "features",
    },
    {
      title: "FAQ",
      to: "faq",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 bg-[#0d0e11] border-b border-gray-800 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="flex items-center text-white justify-between mx-auto w-full max-w-7xl">
        <Link href="/" className="flex items-center gap-2 z-10">
          <b className="bi bi-send-fill text-xl text-[#cff245]">Planilize</b>{" "}
        </Link>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex text-sm gap-8">
          {navigationItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={800}
              offset={-60}
              className="hover:underline transition-all cursor-pointer"
              spy={true}
              activeClass="underline text-[#cff245]"
            >
              {item.title}
            </ScrollLink>
          ))}
        </nav>

        <ScrollLink
          to="contact"
          smooth={true}
          duration={800}
          offset={-70}
          className="text-sm py-1 px-4 border rounded-lg hover:bg-[#cff245] hover:text-[#0d0e11] transition-all z-10 cursor-pointer border-[#cff245]"
        >
          Acesso antecipado
        </ScrollLink>
      </div>
    </header>
  );
}
