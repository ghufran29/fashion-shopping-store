"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { LuMenu, LuX } from "react-icons/lu";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navLinks = [
    { label: "Catalogue", link: "/" },
    { label: "Fashion", link: "/" },
    { label: "Favourite", link: "/" },
    { label: "Lifestyle", link: "/" },
  ];

  return (
    <nav className="flex justify-between items-center">
      <section>
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-2">
            <Image className="w-7 h-7 mt-1" src={logo} alt="Fashion Logo" />
          </div>
          <Link href="/" className="text-3xl font-extrabold uppercase">
            Fashion
          </Link>
        </div>
      </section>
      {/* Nav Links */}
      <ul className="hidden lg:flex font-medium tracking-wide items-center space-x-12 uppercase">
      {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="relative after:content-[''] after:absolute after:bottom-[-0.4em] after:left-1/2 after:right-1/2 after:h-[1px] after:bg-yellow-400 after:transition-all after:ease-in after:duration-200 hover:after:left-0 hover:after:right-0 hover:after:h-[2px] before:content-[''] before:absolute before:translate-x-[-100%] before:left-[-10px] before:text-[#eee] before:opacity-30 before:font-thin before:text-[0.8em]"
              >
                {item.label}
              </Link>
            ))}
      </ul>
      {/* Button */}
      <section className="flex items-center gap-4">
        <button className="lg:text-lg font-medium bg-black hover:bg-yellow-300 border text-white py-2 px-3 rounded-md uppercase hover:bg-transparent hover:text-black hover:border-neutral-700">
          Sign Up
        </button>
        <LuMenu
          onClick={toggleNavbar}
          className="text-3xl cursor-pointer lg:hidden"
        />
      </section>
      {/* Mobile Nav Links */}
      {mobileDrawerOpen && (
        <div className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0">
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-14 gap-8 z-50 w-60 flex -translate-x-0">
            <LuX
              onClick={toggleNavbar}
              className="mb-8 text-3xl cursor-pointer"
            />
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-lg font-medium tracking-wide hover:font-bold"
              >
                {item.label}
              </Link>
            ))}
          </section>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
