"use client"
import Vehicles from "@/components/explore/vehicles/Vehicles";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { cars } from "@/data/cars";

export default function VehiclesPage() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [filteredCars, setFilteredCars] = useState(cars)
  const handleSearch = () => {
    console.log(selectedBrand, selectedCondition, selectedPrice)

    const filteredBrand = selectedBrand === "All" ? cars : cars.filter((car) => car.brand === selectedBrand)
    const filteredCondition = selectedCondition === "All" ? filteredBrand : filteredBrand.filter((car) => car.condition === selectedCondition)
    const filteredPrice = selectedPrice === "All" ? filteredCondition : filteredCondition.filter((car) => car.price === selectedPrice)
    console.log(filteredPrice, filteredCondition, filteredBrand)

    setFilteredCars(filteredPrice)
  }
  return (
    <>
      <div className="text-center h-[400px] text-white">
        <h2 className="md:text-6xl text-4xl font-bold mb-4">All Vehicles</h2>
        <p className="text-xl font-semibold">Explore our premium Vehicles</p>
        {/* Search */}
        <div className="flex lg:flex-row flex-col space-x-4 space-y-2 py-4 bg-white rounded lg:rounded-full p-2 px-6 text-primary font-semibold w-fit mx-auto mt-10">
          {/*  */}
          <Select onValueChange={value => setSelectedBrand(value)}>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Any Models" />
            </SelectTrigger>
            <SelectContent className="font-semibold">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Mercedes">Mercedes</SelectItem>
              <SelectItem value="Ford">Ford</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Audi">Audi</SelectItem>
            </SelectContent>
          </Select>
          <hr className="border-1 h-full border-gray-300" />
          {/*  */}
          <Select onValueChange={value => setSelectedCondition(value)}>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Condition" className="placeholder:text-primary" />
            </SelectTrigger>
            <SelectContent className="font-semibold">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
            </SelectContent>
          </Select>
          <hr className="border-1 h-full border-gray-300" />
          <Select onValueChange={value => setSelectedPrice(value)}>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="All Prices" />
            </SelectTrigger>
            <SelectContent className="font-semibold">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="10000">10000</SelectItem>
              <SelectItem value="20000">20000</SelectItem>
              <SelectItem value="30000">30000</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center justify-center gap-6">
            <Button onClick={handleSearch} className="bg-primary text-white w-[150px] rounded-full font-medium transition-colors duration-200">
              <SearchIcon />
              Search Cars
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-10 max-xl:w-5/6 text-center">
        <Vehicles filteredCars={filteredCars} />
      </div>
    </>
  );
}
