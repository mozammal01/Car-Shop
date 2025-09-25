"use client";
import { useState } from "react";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import CarCard from "../card/CarCard";
import Category from "../category/category";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { cars } from "@/data/cars";

export default function ExploreVehicles() {
  const [selectedCategory, setSelectedCategory] = useState("In Stock");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const filteredCars = cars.slice(0, 4);

  //
  const doubleFilteredCars = filteredCars.filter((car) => car.condition === selectedCategory);

  return (
    <div className="container mx-auto py-20 px-4" id="vehicles">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <ExploreArrow href="/vehicles" titleClassName="md:text-4xl text-3xl font-bold" title="Explore Vehicles" arrowText="View All" />
      </motion.div>
      <div className="flex space-x-4 font-semibold container mx-auto">
        <Category
          category1="In Stock"
          category2="New"
          category3="Used"
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-8 container mx-auto">
        {selectedCategory === "In Stock"
          ? filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <CarCard
                  key={car.id}
                  id={car.id}
                  imgSrc={car.imgSrc}
                  title={car.title}
                  description={car.description}
                  meterText={car.meterText}
                  fuelText={car.fuelText}
                  gearText={car.gearText}
                  price={car.price}
                  category={car.category}
                />
              </motion.div>
            ))
          : doubleFilteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <CarCard
                  key={car.id}
                  id={car.id}
                  imgSrc={car.imgSrc}
                  title={car.title}
                  description={car.description}
                  meterText={car.meterText}
                  fuelText={car.fuelText}
                  gearText={car.gearText}
                  price={car.price}
                  category={car.category}
                />
              </motion.div>
            ))}
      </div>
    </div>
  );
}
