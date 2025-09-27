"use client";
import bannerImg from "@/../public/banner/background.jpg";
import SuvCarIcon from "../icons/suvCarIcon";
import SedanCarIcon from "../icons/sedanCarIcon";
import HatchbackCarIcon from "../icons/hatchbackCarIcon";
import CoupeCarIcon from "../icons/coupeCarIcon";
import HybridCarIcon from "../icons/hybridCarIcon";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SearchBar from "../searchBar/SearchBar";

export default function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div style={{ backgroundImage: `url(${bannerImg.src})` }} className="w-full h-screen bg-cover bg-center -mt-20" id="home">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col space-y-12 items-center justify-center text-white pt-20 px-4"
      >
        <p>Find cars for sale and for rent near you</p>
        <h1 className="md:text-6xl text-4xl font-bold text-white">Find Your Perfect Car</h1>

        

        {/* Search */}
        <SearchBar />

        <p>Or Browse Featured Model</p>

        {/* Browse Featured Model */}
        <div className="md:flex grid grid-cols-2 md:pb-0 pb-6 items-center justify-center gap-4">
          {/* SUV */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-6 flex items-center justify-center gap-2">
              <SuvCarIcon size={35} />
              <span>suv</span>
            </div>
          </div>
          {/* SEDAN */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-4 flex items-center justify-center gap-2">
              <SedanCarIcon size={35} />
              <span>sedan</span>
            </div>
          </div>
          {/* HATCHBACK */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[170px] h-[40px]"></div>
            <div className="absolute top-1 left-6 flex items-center justify-center gap-2">
              <HatchbackCarIcon size={35} />
              <span>hatchback</span>
            </div>
          </div>
          {/* COUPE */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-4 flex items-center justify-center gap-2">
              <CoupeCarIcon size={35} />
              <span>coupe</span>
            </div>
          </div>
          {/* HYBRID */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-4 flex items-center justify-center gap-2">
              <HybridCarIcon size={35} />
              <span>hybrid</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
