"use client";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import audi from "@/../public/brands/b1.png";
import bmw from "@/../public/brands/b2.png";
import ford from "@/../public/brands/b3.png";
import mercedes from "@/../public/brands/b4.png";
import peugeot from "@/../public/brands/b5.png";
import volkSwegen from "@/../public/brands/b6.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExploreBrands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-slate-100 md:rounded-t-[90px] -mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-20 px-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="md:text-4xl text-2xl font-bold">Explore Our Premium Brands</h2>
          <ExploreArrow text="Explore All Brands" />
        </div>
        <div className="md:flex grid grid-cols-2 items-center my-10 gap-4 justify-center">
          {/* Audi */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
            <Image src={audi} alt="audi" width={100} height={100} unoptimized />
            <span className="text-lg font-bold">Audi</span>
          </div>
          {/* BMW */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
            <Image src={bmw} alt="bmw" width={100} height={100} unoptimized />
            <span className="text-lg font-bold">BMW</span>
          </div>
          {/* Ford */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
            <Image src={ford} alt="ford" width={100} height={100} unoptimized />
            <span className="text-lg font-bold">Ford</span>
          </div>
          {/* Mercedes */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
            <Image src={mercedes} alt="mercedes" width={100} height={100} unoptimized />
            <span className="text-lg font-bold">Mercedes</span>
          </div>
          {/* Peugeot */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
            <Image src={peugeot} alt="peugeot" width={100} height={100} unoptimized />
            <span className="text-lg font-bold">Peugeot</span>
          </div>
          {/* Volk Swegen */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
            <Image src={volkSwegen} alt="volkSwegen" width={100} height={100} unoptimized />
            <span className="text-lg font-bold">Volk Swegen</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
