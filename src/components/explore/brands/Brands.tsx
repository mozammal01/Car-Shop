"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { brands } from "@/data/brands";


export default function Brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-3 grid-cols-2 gap-20 p-6 container mx-auto"
    >
      {brands.map((brand, i) => (
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
          className=" bg-white rounded-md shadow-xl p-4 flex items-center justify-center flex-col"
        >
          <Image src={brand.logo} alt={brand.name} width={100} height={100} className="object-contain" unoptimized />
          <p className="mt-2 font-semibold">{brand.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
