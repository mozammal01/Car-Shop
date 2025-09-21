import Image from "next/image";
import Category from "../category/category";
import CarCard from "../card/CarCard";
import audiA4 from "@/../public/popular/AUDI-A4.png";
import audiA5 from "@/../public/popular/AUDI-A5.png";
import audiA6 from "@/../public/popular/AUDI-A6.png";
import PopularCard from "../popularCard/PopularCard";
import ExploreArrow from "../exploreArrow/ExploreArrow";

export default function PopulerCars() {
  const popularCars = [
    {
      imgSrc: audiA4,
      title: "Audi A4",
      description: "Audi A4 is a luxury car",
      meterText: "10000 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$10000",
      category: "Sale",
    },
    {
      imgSrc: audiA5,
      title: "Audi A5",
      description: "Audi A5 is a luxury car",
      meterText: "10000 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$10000",
      category: "Sale",
    },
    {
      imgSrc: audiA6,
      title: "Audi A6",
      description: "Audi A6 is a luxury car",
      meterText: "10000 miles",
      fuelText: "Petrol",
      gearText: "Automatic",
      price: "$10000",
    },
  ];

  return (
    <div className="bg-[#050B20] text-white xl:h-[900px] h-full p-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="md:text-5xl text-3xl font-bold">Populer Makes</h1>
          <ExploreArrow text="View All" />
        </div>
        <Category category1="Audi" category2="Ford" category3="Mercedes" />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 my-12">
          {popularCars.map((car) => (
            <PopularCard key={car.title} {...car} />
          ))}
        </div>
      </div>
    </div>
  );
}
