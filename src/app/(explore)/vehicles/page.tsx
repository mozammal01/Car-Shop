"use client";
import Vehicles from "@/components/explore/vehicles/Vehicles";
import { cars } from "@/data/cars";
import SearchBar from "@/components/searchBar/SearchBar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VehiclesPage() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    const filteredBrand = selectedBrand === "All" ? cars : cars.filter((car) => car.brand === selectedBrand);
    const filteredCondition =
      selectedCondition === "All" ? filteredBrand : filteredBrand.filter((car) => car.condition === selectedCondition);
    const filteredPrice = selectedPrice === "All" ? filteredCondition : filteredCondition.filter((car) => car.price === selectedPrice);

    setFilteredCars(filteredPrice);
  }, [selectedBrand, selectedCondition, selectedPrice]);

  const brand = useSearchParams().get("brand");
  const condition = useSearchParams().get("condition");
  const price = useSearchParams().get("price");
  useEffect(() => {
    setSelectedBrand(brand || "All");
    setSelectedCondition(condition || "All");
    setSelectedPrice(price || "All");
  }, [brand, condition, price]);

  return (
    <>
      <div className="text-center h-[400px] text-white">
        <h2 className="md:text-6xl text-4xl font-bold mb-4">All Vehicles</h2>
        <p className="text-xl font-semibold">Explore our premium Vehicles</p>
        <SearchBar />
      </div>
      <div className="container mx-auto p-10 max-xl:w-5/6 text-center">
        {filteredCars.length > 0 ? (
          <Vehicles filteredCars={filteredCars} />
        ) : (
          <div className="text-center text-2xl font-bold">No cars found</div>
        )}
      </div>
    </>
  );
}
