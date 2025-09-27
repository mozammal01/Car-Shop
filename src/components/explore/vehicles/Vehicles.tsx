"use client";
import CarCard from "@/components/card/CarCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {cars} from "@/data/cars"
export default function Vehicles({filteredCars}: {filteredCars: typeof cars}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-10 text-center"
    >
      {filteredCars.length > 0 ? filteredCars.map((car, index) => (
        <motion.div
          key={car.id}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
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
      )) : <div className="text-center text-2xl font-bold">No cars found</div>}
    </motion.div>
  );
}
