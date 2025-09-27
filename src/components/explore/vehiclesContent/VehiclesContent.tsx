"use client";
import Vehicles from "@/components/explore/vehicles/Vehicles";
import { cars } from "@/data/cars";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearch } from "@/context/SearchContext";


export default function VehiclesContent() {
  const { setSelectedBrand, setSelectedCondition, setSelectedCategory } = useSearch();
  const { selectedBrand, selectedCondition, selectedCategory } = useSearch();
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleSearch = () => {
    const filteredBrand = selectedBrand === "All" ? cars : cars.filter((car) => car.brand === selectedBrand);
    const filteredCondition =
      selectedCondition === "All" ? filteredBrand : filteredBrand.filter((car) => car.condition === selectedCondition);
    const filteredCategory = selectedCategory === "All" ? filteredCondition : filteredCondition.filter((car) => car.category === selectedCategory);
    setFilteredCars(filteredCategory);
  };

  useEffect(() => {
    const filteredBrand = selectedBrand === "All" ? cars : cars.filter((car) => car.brand === selectedBrand);
    const filteredCondition =
      selectedCondition === "All" ? filteredBrand : filteredBrand.filter((car) => car.condition === selectedCondition);
    const filteredCategory = selectedCategory === "All" ? filteredCondition : filteredCondition.filter((car) => car.category === selectedCategory);

    setFilteredCars(filteredCategory);
  }, []);
  
  return (
    <>
      <div className="text-center h-[400px] text-white max-lg:-mt-20">
        <h2 className="lg:text-6xl text-4xl font-bold mb-4">All Vehicles</h2>
        <p className="text-xl font-semibold">Explore our premium Vehicles</p>
        {/* Search */}
        <div className="flex lg:flex-row flex-col space-x-4 space-y-2 py-4 bg-white rounded lg:rounded-full p-2 px-6 text-primary font-semibold w-fit mx-auto mt-4">
          {/*  */}
          <Select value={selectedBrand} onValueChange={(value) => setSelectedBrand(value as string)}>
            <SelectTrigger className="w-[180px] border-none ">
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
          <Select value={selectedCondition} onValueChange={(value) => setSelectedCondition(value)}>
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
          <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)}>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="font-semibold">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Great Price">Great Price</SelectItem>
              <SelectItem value="Low Mileage">Low Mileage</SelectItem>
              <SelectItem value="Sale">Sale</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center justify-center gap-6">
            <Button
              onClick={handleSearch}
              className="bg-primary text-white w-[150px] rounded-full font-medium transition-colors duration-200"
            >
              <SearchIcon />
              Search Cars
            </Button>
          </div>
        </div>
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