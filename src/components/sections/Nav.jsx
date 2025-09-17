'use client';
import React, { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/theChambers", label: "The Chambers" },
    { href: "/servicesPage", label: "Services" },
    { href: "/sectors", label: "Sectors" },
    { href: "/memberZone", label: "Member’s Zone" },
    { href: "/media", label: "Media" },
    // { href: "/joinBcci", label: "Join BCCI" }

  ];

  // useEffect(() => {
  //   fetch("https://backend-bcoc.onrender.com/me", {
  //      method: "GET",
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.authenticated) {
  //         setUsername(data.user.name);
  //       }
  //     })
  //     .catch((err) => console.error("Session check error:", err));
  // }, []);

  // const handleLogout = () => {
  //   fetch("/logout", {
  //     method: "POST",
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       setUsername(null);
  //       window.location.href = "/";
  //     })
  //     .catch((err) => console.error("Logout error:", err));
  // };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="w-full md:sticky md:top-0 fixed top-0 z-50 bg-white pb-1">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 md:px-10 pt-4 relative">
        {/* Left Logo */}
        <div className="w-[80px] sm:w-[120px] md:w-[80px] lg:w-[100px] xl:w-[110px]">
          <a href="/"><img src="/logo.png" alt="logo" className="w-full h-full object-contain" /></a>
        </div>

        {/* Title */}
        <div className="sm:block ml-2 flex-1 text-nowrap">
          <h1 className="uppercase font-bold text-black text-sm md:text-lg lg:text-xl md:leading-2 lg:leading-5">
            bundelkhand chamber <br />
            <span className="text-blue-400 text-sm sm:text-base md:text-md lg:text-lg">
              of commerce & industry
            </span>
          </h1>
        </div>

        {/* Center Image */}
        <div className="hidden flex-1 md:flex justify-center">
          <img
            src="/nav1.png"
            alt="nav1"
            className="w-[60%] h-full absolute xl:bottom-[-1.1rem] xl:left-[26rem] md:bottom-[-3.2rem] md:left-[14rem] md:w-[50%] lg:w-[55%] lg:bottom-[-3.2rem] lg:left-[13rem] z-0 object-contain"
          />
        </div>

        {/* Right Statue */}
        <div className="hidden md:block w-[80px] sm:w-[100px] md:w-[100px] lg:w-[130px]">
          <img src="/statue.png" alt="statue" className="w-full h-full object-contain" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-30 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiOutlineX className="text-3xl text-[#F15A24]" />
          ) : (
            <RxHamburgerMenu className="text-3xl text-[#F15A24]" />
          )}
        </div>
      </div>

      {/* Orange Curve Strip */}
      <div className="px-4 sm:px-10">
        <div className="w-full h-[14px] bg-[#F15A24] rounded-tl-3xl rounded-br-3xl md:mb-2 mb-[-8px]"></div>
      </div>

      <div className="px-10">
        {/* Desktop Nav */}
        <div className="hidden md:flex w-full bg-[#F15A24] py-0 rounded-tl-3xl rounded-br-3xl px-4 sm:px-10">
          <ul className="flex lg:justify-around items-center w-full uppercase lg:font-semibold md:justify-between text-sm sm:text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-colors ${pathname === link.href
                    ? "bg-white text-orange-500"
                    : "text-white hover:bg-orange-300 hover:opacity-100"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="relative inline-block text-left"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="p-2 rounded-full hover:bg-gray-700 transition border-3 border-[#F15A24]">
                <User size={35} className="text-white" />
              </button>
              {isOpen && (
                <div className="absolute right-0 w-40 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                  {username ? (
                    <>
                      <div className="px-4 py-2 text-white border-b border-gray-600">
                        {username}
                      </div>
                      {/* <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition"
                      >
                        Logout
                      </button> */}
                    </>
                  ) : (
                    <>
                      <Link
                        href="/signup"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition"
                      >
                        Signup
                      </Link>
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-white hover:bg-gray-700 transition"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        <div className="px-4">
          {menuOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden w-full bg-[#F15A24] rounded-tl-3xl rounded-br-3xl px-4 mt-5 z-40 overflow-hidden"
            >
              <ul className="flex flex-col gap-4 text-white uppercase font-semibold text-sm py-6">
                <Link href="/" className="border-b border-white pb-1">Home</Link>
                <Link href="/theChambers" className="border-b border-white pb-2 mt-[-5px]">The Chamber</Link>
                <Link href="/servicesPage" className="border-b border-white pb-2 mt-[-5px]">Services</Link>
                <Link href="/sectors" className="border-b border-white pb-2 mt-[-5px]">Sectors</Link>
                <Link href="/memberZone" className="border-b border-white pb-2 mt-[-5px]">Member’s Zone</Link>
                <Link href="/media" className="border-b border-white pb-2 mt-[-5px]">Media</Link>
                <div className="flex justify-around">
                  {username ? (
                    <>
                      <span>{username}</span>
                      <button onClick={handleLogout}>Logout</button>
                    </>
                  ) : (
                    <>
                      <Link href="/login">Login</Link>
                      <Link href="/signup">Signup</Link>
                    </>
                  )}
                </div>
              </ul>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Nav;
