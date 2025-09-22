"use client";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import Category from "../category/category";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CarFinder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="container mx-auto px-4 my-20 mb-40">
      <div className="flex items-center justify-between">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="md:text-5xl text-3xl font-bold"
        >
          Shop Box Car Your Way
        </motion.h2>
        <ExploreArrow href="/carsFinder" text="View More" />
      </div>
      <Category category1="New Cars For Sale" category2="Used Cars For Sale" category3="Browse By Type" category4="Browse By Brand" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/*  */}
        <motion.ul
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2"
        >
          <li>Ford Cars</li>
          <li>Honda Cars</li>
          <li>Hyundai Cars</li>
          <li>Infiniti Cars</li>
          <li>Jaguar Cars</li>
          <li>Jeep Cars</li>
        </motion.ul>
        {/*  */}
        <motion.ul
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2"
        >
          <li>SUV</li>
          <li>Sedan</li>
          <li>Hatchback</li>
          <li>Coupe</li>
          <li>Hybrid</li>
          <li>Electric</li>
        </motion.ul>
        {/*  */}
        <ul className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2">
          <li>Mini Cars</li>
          <li>Mitsubishi Cars</li>
          <li>Nissan Cars</li>
          <li>Peugeot Cars</li>
          <li>Porsche Cars</li>
          <li>Renault Cars</li>
        </ul>
        {/*  */}
        <motion.ul
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2"
        >
          <li>Toyota Cars</li>
          <li>Volkswagen Cars</li>
          <li>Volvo Cars</li>
          <li>Mazda Cars</li>
          <li>Mercedes-Benz Cars</li>
          <li>BMW Cars</li>
        </motion.ul>
        {/*  */}
        <motion.ul
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="w-[150px] bg-white rounded-md flex justify-center flex-col gap-2"
        >
          <li>Abarth Cars</li>
          <li>Romeo Cars</li>
          <li>Audi Cars</li>
          <li>Bentley Cars</li>
          <li>BMW Cars</li>
          <li>Chevrolet Cars</li>
        </motion.ul>
      </div>
    </div>
  );
}
