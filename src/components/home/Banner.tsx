"use client";
import bannerImg from "@/../public/banner/background.jpg";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import SuvCarIcon from "../icons/suvCarIcon";
import SedanCarIcon from "../icons/sedanCarIcon";
import HatchbackCarIcon from "../icons/hatchbackCarIcon";
import CoupeCarIcon from "../icons/coupeCarIcon";
import HybridCarIcon from "../icons/hybridCarIcon";

export default function Banner() {
  const [cat, setCat] = useState("All");
  const categories = ["All", "New", "Used"];

  return (
    <div style={{ backgroundImage: `url(${bannerImg.src})` }} className="w-full h-screen bg-cover bg-center -mt-20">
      <div className="w-full h-full flex flex-col space-y-12 items-center justify-center text-white pt-20 px-4">
        <p>Find cars for sale and for rent near you</p>
        <h1 className="md:text-6xl text-4xl font-bold text-white">Find Your Perfect Car</h1>

        {/* Categories */}
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-3 py-2 rounded-md hover:bg-white hover:text-primary transition-all duration-300",
                cat === category ? "border-b-2 border-white rounded-none" : "bg-transparent text-white"
              )}
              onClick={() => setCat(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex md:flex-row flex-col space-x-4 space-y-2 py-4  bg-white rounded md:rounded-full p-2 px-6 text-primary font-semibold">
          <Select>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Any Makes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <hr className="border-1 h-full border-gray-300" />
          {/*  */}
          <Select>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Any Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <hr className="border-1 h-full border-gray-300" />
          <Select>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="All Prices" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center justify-center gap-6">
            <Button className="bg-primary text-white w-[150px] rounded-full font-medium transition-colors duration-200">
              <SearchIcon />
              Search Cars
            </Button>
          </div>
        </div>
        <p>Or Browse Featured Model</p>

        {/* Browse Featured Model */}
        <div className="md:flex grid grid-cols-2 md:pb-0 pb-6 items-center justify-center gap-4">
          {/* SUV */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-6 flex items-center justify-center gap-2">
              <SuvCarIcon size={35} />
              <span>suv</span>
            </div>
          </div>
          {/* SEDAN */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-4 flex items-center justify-center gap-2">
              <SedanCarIcon size={35} />
              <span>sedan</span>
            </div>
          </div>
          {/* HATCHBACK */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[170px] h-[40px]"></div>
            <div className="absolute top-1 left-6 flex items-center justify-center gap-2">
              <HatchbackCarIcon size={35} />
              <span>hatchback</span>
            </div>
          </div>
          {/* COUPE */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-4 flex items-center justify-center gap-2">
              <CoupeCarIcon size={35} />
              <span>coupe</span>
            </div>
          </div>
          {/* HYBRID */}
          <div className="relative">
            <div className="rounded-full p-2 cursor-pointer opacity-20 bg-white w-[120px] h-[40px]"></div>
            <div className="absolute top-1 left-4 flex items-center justify-center gap-2">
              <HybridCarIcon size={35} />
              <span>hybrid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
