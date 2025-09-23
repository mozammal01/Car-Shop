"use client";
import { useState } from "react";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import audi from "@/../public/vehicles/Audi.png";
import ford21 from "@/../public/vehicles/Ford-2021.png";
import ford23 from "@/../public/vehicles/Ford-2023.png";
import corolla from "@/../public/vehicles/Corolla.png";
import glc from "@/../public/vehicles/GLC.png";
import CarCard from "../card/CarCard";
import Category from "../category/category";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExploreVehicles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cars = [
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
    },
    {
      id: 3,
      imgSrc: audi,
      title: "Audi A6 3.5 - New",
      description: "3.5 D5 PowerPulse Momentum 5dr AW…",
      meterText: "100 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$58,000",
    },
    {
      id: 4,
      imgSrc: corolla,
      title: "Corolla Altis – 2023",
      description: "3.5 D5 PowerPulse Momentum 5dr AW…",
      meterText: "15000 miles",
      fuelText: "Petrol",
      gearText: "CVT",
      price: "$45,000",
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
    },
  ];
  return (
    <div className="max-w-[1600px] mx-auto py-20 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between container mx-auto"
      >
        <h2 className="md:text-4xl text-3xl font-bold">Explore All Vehicles</h2>
        <ExploreArrow href="/vehicles" text="View All" />
      </motion.div>
      <div className="flex space-x-4 font-semibold container mx-auto">
        <Category category1="In Stock" category2="New Cars" category3="Used Cars" />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4 container mx-auto"
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
    </div>
  );
}
