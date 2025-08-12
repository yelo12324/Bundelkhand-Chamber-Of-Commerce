"use client";
import React, { useState } from "react";
import Nav from "@/components/sections/Nav";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

function Page() {
  const media = [
    { img: "/mediabottom-1.jpg", description: "Meeting with minister of state" },
    { img: "/mediabottom-2.jpg", description: "Industrial area visit by senior office" },
    { img: "/mediabottom-3.jpg", description: "Business summit in presence of Uma Bharti & Satish Mahana" },
    { img: "/mediabottom-4.jpg", description: "Excellence award by Bundelkhand Chamber Of Commerce to various industrialist" },
    { img: "/mediabottom-5.jpg", description: "Clean jhansi green jhansi campaign" },
    { img: "/mediabottom-6.jpg", description: "Agro summit" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div>
        <Nav />
      </div>

      {/* Heading */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center md:mt-10 mt-45"
      >
        <h1 className="inline-block text-4xl font-extrabold text-orange-500 mb-10 after:content-[''] after:block after:h-[5px] after:w-[60%] after:bg-orange-500 after:mx-auto after:mt-0 after:rounded-full">
          Media
        </h1>
      </motion.div>

      {/* Top Static Row */}
      <div
        // variants={fadeIn}
        // initial="hidden"
        // whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center items-center gap-12 px-4 md:mt-10 mb-10"
      >
        {/* First Box */}
        <div className="flex flex-col md:flex-row items-center bg-white p-0 rounded-2xl shadow-xl max-w-3xl w-full md:w-auto h-auto md:h-[258px]">
          <Image
            src="/Newz1.png"
            alt="Event"
            width={400}
            height={200}
            className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none w-full md:h-[258px] md:w-auto object-cover"
          />
          <div className="p-4 text-left">
            <h2 className="text-xl font-semibold mb-5 text-black">MSME Summit</h2>
            <p className="text-sm text-gray-600">
              Dheeraj Khullar, the new Chamber President, pledged active efforts toward resolving traders’ issues
              and boosting regional growth. Administrators like the Divisional Commissioner and District Magistrate
              assured full support. MP Sharma also unveiled major infrastructure projects, including a new flyover
              bridge at Hansari Crossing, four-lane roads, and water supply initiatives.
            </p>
            <p className="text-xs text-gray-500 mt-2 text-right">April 10, 2025</p>
          </div>
        </div>

        {/* Second Box */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full md:w-[300px] h-[300px]">
          <Image
            src="/mediabottom-7.jpg"
            alt="Collaboration"
            width={300}
            height={200}
            className="object-cover w-full h-[70%]"
          />
          <div className="bg-orange-500 text-white p-2 text-center font-medium h-[30%] flex items-center justify-center">
            Hop & hop of Buses
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ height: 390 }}
        animate={{ height: expanded ? "auto" : 390 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative md:px-20 w-full mt-20 mb-10 lg:mb-0 overflow-x-hidden no-scrollbar"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className={`${
            expanded
              ? "lg:flex lg:flex-row lg:flex-wrap lg:justify-center grid grid-cols-2 gap-x-0 gap-y-5 md:gap-15"
              : "animate-marquee whitespace-nowrap py-6 flex gap-4 sm:gap-8 h-fit"
          }`}
        >
          {media.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-white flex-shrink-0 hover:bg-orange-400 hover:cursor-pointer text-black hover:text-white rounded-2xl shadow-lg w-[190px] sm:w-[280px] md:w-[300px] h-[260px] hover:scale-105 flex flex-col justify-center items-center overflow-hidden transition-transform duration-300 ease-in-out group"
            >
              {/* Image */}
              <div className="relative h-[75%] w-full p-2 group-hover:p-3">
                <Image
                  src={card.img}
                  alt={`Media ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 rounded-xl transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="h-[25%] px-4 text-center text-wrap flex items-center justify-center text-sm font-medium">
                {card.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Toggle Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="flex justify-center items-center mt-3"
        >
          <button
            onClick={() => {
              if (expanded) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => setExpanded(false), 300);
              } else {
                setExpanded(true);
              }
            }}
            className="bg-orange-500 hover:cursor-pointer hover:bg-orange-600 transition-all duration-300 text-white text-lg md:text-xl font-semibold rounded-full px-6 py-2 mt-6 shadow-md"
          >
            {expanded ? "Show Less" : "View All"}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Page;
