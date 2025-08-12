"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Link from "next/link"; // ✅ Step 1: Import Link

const images = [
  {
    src: "/hero2.jpeg",
    heading: (
      <>
        Bundelkhand Means <br /> Business
      </>
    ),
    button: "Become a Member",
    link: "/join-us",
  },
  {
    src: "/hero3.jpeg",
    heading: (
      <>
        Where Business Meets  <br />  Opportunity.
      </>
    ),
    button: "Explore Services",
    link: "/services",
  },
  {
    src: "/hero1.jpg",
    heading: (
      <>
        Bundelkhand Your Gateway <br /> to Growth
      </>
    ),
    button: "Join Us Today",
    link: "/membership", 
  },
  {
    src: "/hero4.jpeg",
    heading: (
      <>
        Empowering Businesses <br /> in Bundelkhand
      </>
    ),
    button: "Join Growth Movement",
    link: "/membership",
  },
  {
    src: "/hero5.jpeg",
    heading: (
      <>
        Networking for Growth <br /> & Innovation
      </>
    ),
    button: "Connect & Innovate",
    link: "/join-us",
  },

];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Nav />

      <h1 className="md:hidden mt-35 text-4xl font-bold text-black relative z-20 px-5">
        For<br />business.<br />For you.
      </h1>

      <div className="lg:px-20 md:px-10 px-5">
        <div className="relative w-full md:h-[500px] h-[400px] overflow-hidden mt-10 md:rounded-3xl rounded-sm">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={`Hero ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Overlay Content */}
          <div className="absolute inset-0 hidden md:flex flex-col justify-between p-8 text-white z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              {images[index].heading}
            </h1>

            {/* ✅ Step 3: Wrap button in Link */}
            <Link href={images[index].link}>
              <button className="bg-orange-500 px-6 py-3 rounded shadow hover:bg-orange-600 w-fit">
                {images[index].button}
              </button>
            </Link>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`md:h-3 md:w-3 w-2 h-2 rounded-full cursor-pointer ${
                  i === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
