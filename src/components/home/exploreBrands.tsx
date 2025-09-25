"use client";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { brands } from "@/data/brands";

export default function ExploreBrands() {
  const filteredBrands = brands.slice(0, 6);
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
        <ExploreArrow
          href="/brands"
          titleClassName="md:text-4xl text-2xl font-bold"
          title="Explore Brands"
          arrowText="Explore All Brands"
        />

        <div className="md:flex grid grid-cols-2 items-center my-10 gap-4 justify-center">
          {filteredBrands.map((brand, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{
                duration: 0.4,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              key={i}
              className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col"
            >
              <Image src={brand.logo} alt={brand.name} width={100} height={100} unoptimized />
              <span className="text-lg font-bold">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
