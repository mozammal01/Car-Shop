"use client";
import CarCard from "@/components/card/CarCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {cars} from "@/data/cars"
export default function Vehicles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-10"
    >
      {cars.map((car) => (
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
      ))}
    </motion.div>
  );
}

// const cars = [
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
  //   },
  //   {
  //     id: 3,
  //     imgSrc: audi,
  //     title: "Audi A6 3.5 - New",
  //     description: "3.5 D5 PowerPulse Momentum 5dr AW…",
  //     meterText: "100 miles",
  //     fuelText: "Petrol",
  //     gearText: "Automatic",
  //     price: "$58,000",
  //   },
  //   {
  //     id: 4,
  //     imgSrc: corolla,
  //     title: "Corolla Altis – 2023",
  //     description: "3.5 D5 PowerPulse Momentum 5dr AW…",
  //     meterText: "15000 miles",
  //     fuelText: "Petrol",
  //     gearText: "CVT",
  //     price: "$45,000",
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
  