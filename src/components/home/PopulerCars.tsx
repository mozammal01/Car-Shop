"use client";
import Category from "../category/category";
import CarCard from "../card/CarCard";
import audiA4 from "@/../public/popular/AUDI-A4.png";
import audiA5 from "@/../public/popular/AUDI-A5.png";
import audiA6 from "@/../public/popular/AUDI-A6.png";
import PopularCard from "../popularCard/PopularCard";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import ford21 from "@/../public/vehicles/Ford-2021.png";
import ford23 from "@/../public/vehicles/Ford-2023.png";
import glc from "@/../public/vehicles/GLC.png";
import { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";

export default function PopulerCars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("Audi");

  const allCars = [
    {
      id: 3,
      imgSrc: audiA4,
      title: "Audi A4",
      description: "Audi A4 is a luxury car",
      meterText: "10000 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$10000",
      category: "Sale",
      brand: "Audi",
    },
    {
      id: 4,
      imgSrc: audiA5,
      title: "Audi A5",
      description: "Audi A5 is a luxury car",
      meterText: "10000 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$10000",
      category: "Sale",
      brand: "Audi",
    },
    {
      id: 6,
      imgSrc: audiA6,
      title: "Audi A6",
      description: "Audi A6 is a luxury car",
      meterText: "10000 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$10000",
      category: "Sale",
      brand: "Audi",
    },
    {
      id: 1,
      imgSrc: ford21,
      title: "Ford Transit – 2021",
      description: "4.0 D5 PowerPulse Momentum 5dr AW…",
      meterText: "2500 miles",
      fuelText: "Diesel",
      gearText: "Manual",
      price: "$22,000",
      category: "Great Price",
      brand: "Ford",
    },
    {
      id: 5,
      imgSrc: ford23,
      title: "Ford Transit – 2023",
      description: "3.5 D5 PowerPulse Momentum 5dr AW…",
      meterText: "10 miles",
      fuelText: "Diesel",
      gearText: "Manual",
      price: "$35,000",
      category: "Great Price",
      brand: "Ford",
    },
    {
      id: 2,
      imgSrc: glc,
      title: "New GLC - 2023",
      description: "4.0 D5 PowerPulse Momentum 5dr AW…",
      meterText: "50 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$95,000",
      category: "Low Mileage",
      brand: "Mercedes",
    },
  ];

  // Filter cars based on selected category
  const filteredCars = useMemo(() => {
    return allCars.filter((car) => car.brand === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#050B20] text-white xl:h-[900px] h-full p-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className="md:text-5xl text-3xl font-bold"
          >
            Popular Makes
          </motion.h2>
          <ExploreArrow href="/popularCars" text="View All" />
        </div>
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
          {filteredCars.map((car) => (
            <PopularCard key={car.id} {...car} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
