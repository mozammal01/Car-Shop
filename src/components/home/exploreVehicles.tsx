"use client";
import { useState } from "react";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import audi from "@/../public/vehicles/Audi.png";
import ford21 from "@/../public/vehicles/Ford-2021.png";
import ford23 from "@/../public/vehicles/Ford-2023.png";
import corolla from "@/../public/vehicles/Corolla.png";
import glc from "@/../public/vehicles/GLC.png";
import { cn } from "@/lib/utils";
import CarCard from "../card/CarCard";

export default function ExploreVehicles() {
  const cars = [
    {
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
      imgSrc: audi,
      title: "Audi A6 3.5 - New",
      description: "3.5 D5 PowerPulse Momentum 5dr AW…",
      meterText: "100 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$58,000",
    },
    {
      imgSrc: corolla,
      title: "Corolla Altis – 2023",
      description: "3.5 D5 PowerPulse Momentum 5dr AW…",
      meterText: "15000 miles",
      fuelText: "Petrol",
      gearText: "CVT",
      price: "$45,000",
    },
    {
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
  const [cat, setCat] = useState("In Stock");
  const categories = ["In Stock", "New Cars", "Used Cars"];
  return (
    <div className="max-w-[1600px] mx-auto py-20 px-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="md:text-4xl text-3xl font-bold">Explore All Vehicles</h1>
        <ExploreArrow text="View All" />
      </div>
      <div className="flex space-x-4 my-10 font-semibold max-w-[1500px] mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={cn(cat === category ? "border-b-2 border-primary p-2 cursor-pointer" : "p-2 cursor-pointer")}
            onClick={() => setCat(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-4 max-w-[1500px] mx-auto">
        {cars.map((car) => (
          <CarCard
            key={car.title}
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
      </div>
    </div>
  );
}
