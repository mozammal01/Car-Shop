"use client";
import Category from "../category/category";
import PopularCard from "../popularCard/PopularCard";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import { useRef, useState, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { cars } from "@/data/cars";

export default function PopulerCars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("Audi");

  // const allCars = [
  //   {
  //     id: 1,
  //     imgSrc: ford21,
  //     title: "Ford Transit – 2021",
  //     description: "4.0 D5 PowerPulse Momentum 5dr AW…",
  //     meterText: "2500 miles",
  //     fuelText: "Diesel",
  //     gearText: "Manual",
  //     price: "$22,000",
  //     category: "Great Price",
  //     brand: "Ford",
  //   },
  //   {
  //     id: 2,
  //     imgSrc: glc,
  //     title: "New GLC - 2023",
  //     description: "4.0 D5 PowerPulse Momentum 5dr AW…",
  //     meterText: "50 miles",
  //     fuelText: "Petrol",
  //     gearText: "Automatic",
  //     price: "$95,000",
  //     category: "Low Mileage",
  //     brand: "Mercedes",
  //   },
  //   {
  //     id: 3,
  //     imgSrc: audiA6,
  //     title: "Audi A6",
  //     description: "Audi A6 is a luxury car",
  //     meterText: "10000 miles",
  //     fuelText: "Petrol",
  //     gearText: "Automatic",
  //     price: "$10000",
  //     category: "Sale",
  //     brand: "Audi",
  //   },
  //   {
  //     id: 5,
  //     imgSrc: ford23,
  //     title: "Ford Transit – 2023",
  //     description: "3.5 D5 PowerPulse Momentum 5dr AW…",
  //     meterText: "10 miles",
  //     fuelText: "Diesel",
  //     gearText: "Manual",
  //     price: "$35,000",
  //     category: "Great Price",
  //     brand: "Ford",
  //   },
  //   {
  //     id: 6,
  //     imgSrc: audiA4,
  //     title: "Audi A4",
  //     description: "Audi A4 is a luxury car",
  //     meterText: "10000 miles",
  //     fuelText: "Petrol",
  //     gearText: "Automatic",
  //     price: "$10000",
  //     category: "Sale",
  //     brand: "Audi",
  //   },
  //   {
  //     id: 7,
  //     imgSrc: audiA5,
  //     title: "Audi A5",
  //     description: "Audi A5 is a luxury car",
  //     meterText: "10000 miles",
  //     fuelText: "Petrol",
  //     gearText: "Automatic",
  //     price: "$10000",
  //     category: "Sale",
  //     brand: "Audi",
  //   },
  // ];
  // Filter cars based on selected category
  const filteredCars = useMemo(() => {
    return cars.filter((car) => car.brand === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#050B20] text-white xl:h-[900px] h-full p-20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <ExploreArrow href="/vehicles" titleClassName="md:text-5xl text-3xl font-bold" title="Popular Makes" arrowText="View All" />
        </motion.div>
        <Category
          category1="Audi"
          category2="Ford"
          category3="Mercedes"
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Display selected category and filtered cars count */}
        <div className="text-center my-4"></div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 my-12"
        >
          <AnimatePresence mode="wait">
            {filteredCars.map((car, index) => (
              <motion.div
                key={`${selectedCategory}-${car.id}`}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <PopularCard {...car} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
