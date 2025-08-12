"use client";
import React from "react";
import "./news.css";

const newsItems = [
  { src: "/Newz1.png" },
  { src: "/Newz2.png" },
  { src: "/Newz3.png" },
  { src: "/Newz4.png" },
  { src: "/Newz6.jpeg" },
  { src: "/Newz7.jpeg" },
  { src: "/Newz8.jpeg" },
  { src: "/Newz9.jpeg" },
  // { src: "/Newz10.jpeg" },
];

export default function News() {
  return (
    <section className="max-w-[1400px] mt-20 mx-auto px-4 sm:px-6 overflow-hidden">
      {/* Heading */}
      <div className="flex justify-center mt-4 mb-4">
        <div className="md:bg-orange-500 md:text-white inline-block text-orange-400 mt-5 font-extrabold text-2xl sm:text-xl py-2 px-6 sm:px-7 md:rounded after:content-[''] after:block after:h-[4px] after:w-[70%] after:bg-orange-500 after:mx-auto after:mt-0 after:rounded-full">
          News
        </div>
      </div>

      {/* Mobile Layout: All news stacked */}
      <div className="flex flex-col gap-6 lg:hidden">
        {/* First 2 news cards */}
        {newsItems.slice(0, 4).map((item, i) => (
          <NewsCard key={i} img={item.src} />
        ))}

        {/* Main News */}
        <div className="text-center px-1">
          <img
            src="/Newz5.png"
            alt="Main"
            className="w-full rounded-xl border-2 border-gray-300 mb-3"
          />
          <h2 className="text-[22px] font-extrabold text-black mb-2">
            Jhansi To Become Industrial Hub
          </h2>
          <p className="text-[14px] text-gray-700 leading-relaxed">
            The Bundelkhand Industrial Development Authority (BIDA) is acquiring
            ~18,000 acres in Jhansi as part of a larger 65,000-acre project to
            establish a Noida-style industrial city.
          </p>
        </div>

        {/* Last 2 news cards */}
        {newsItems.slice(4).map((item, i) => (
          <NewsCard key={i + 2} img={item.src} />
        ))}
      </div>

      {/* Desktop Layout: Scroll columns */}
      <div className="hidden lg:flex flex-row gap-6 h-[90vh] overflow-hidden">
        {/* Left News (Scroll) */}
        <div className="w-1/4 overflow-hidden h-full">
          <div className="scroll-container h-full">
            <div className="scroll-content">
              {[...newsItems.slice(0, 4), ...newsItems.slice(0, 4)].map((item, i) => (
                <NewsCard key={i} img={item.src} />
              ))}
            </div>
          </div>
        </div>

        {/* Main News */}
       <div className="w-1/2 text-center border-x-4 border-black px-8 py-8 overflow-y-hidden no-scrollbar">
         <img
           src="/Newz5.png"
           alt="Main"
           className="w-full rounded-xl border-2 border-gray-300 mb-4"
         />
         <h2 className="text-[42px] font-extrabold text-black mb-3">
           Jhansi To Become Industrial Hub
         </h2>
         <p className="text-[20px] text-gray-700 leading-relaxed">
           The Bundelkhand Industrial Development Authority (BIDA) is acquiring
           ~18,000 acres in Jhansi as part of a larger 65,000-acre project to
           establish a Noida-style industrial city.
         </p>
       
         <style jsx>{`
           .no-scrollbar::-webkit-scrollbar {
             display: none;
           }
           .no-scrollbar {
             -ms-overflow-style: none; /* IE/Edge */
             scrollbar-width: none; /* Firefox */
           }
         `}</style>
       </div>


        {/* Right News (Scroll) */}
        <div className="w-1/4 overflow-hidden h-full">
          <div className="scroll-container h-full">
            <div className="scroll-content">
              {[...newsItems.slice(4), ...newsItems.slice(4)].map((item, i) => (
                <NewsCard key={i + 2} img={item.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ img }) {
  return (
    <div className="text-left mb-4 sm:mb-6 px-1">
      <img
        src={img}
        alt="news"
        className="w-full rounded-xl border-2 border-gray-300 mb-2"
      />
      <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-black leading-tight mb-1">
        Jhansi To Become Industrial Hub
      </h3>
      <p className="text-[14px] md:text-[14px] text-gray-700 leading-snug">
        The Bundelkhand Industrial Development Authority (BIDA) is acquiring
        ~18,000 acres in Jhansi to build a Noida-style industrial city.
      </p>
    </div>
  );
}
