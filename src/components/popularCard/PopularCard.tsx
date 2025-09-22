import Image from "next/image";
import audiA4 from "@/../public/popular/AUDI-A4.png";
import audiA5 from "@/../public/popular/AUDI-A5.png";
import audiA6 from "@/../public/popular/AUDI-A6.png";
import GearIcon from "../icons/gearIcon";
import FuelIcon from "../icons/fuelIcon";
import MeterIcon from "../icons/meterIcon";
import ExploreArrow from "../exploreArrow/ExploreArrow"
import SavedIcon from "../icons/savedIcon";
import { cn } from "@/lib/utils";
import { PopularCardProps } from "@/interfaces/shared-interfaces";

export default function PopularCard({ imgSrc, title, description, meterText, fuelText, gearText, price, category }: PopularCardProps) {

  return (
    <div className="xl:w-[650px] xl:h-[270px] bg-[#272f4d69] shadow-md rounded-md rounded-t-2xl lg:flex items-center">
      <div className="relative">
        <Image src={imgSrc} alt="car" width={318} height={270} className="rounded-t-2xl object-cover w-full lg:w-[318px] max-h-[270px]" />
        <span className="absolute top-4 right-4 bg-white text-black w-9 h-9 rounded-full flex items-center justify-center">
          <SavedIcon size={12} />
        </span>
        {category && <span className={cn("absolute top-4 left-4 text-white px-2 py-1 rounded-md", category === "Great Price" ? "bg-green-600" : "bg-blue-600")}>{category}</span>}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="pb-1">{description}</p>
        <hr />
        <div className="flex flex-col justify-evenly gap-2 my-2 text-white">
          <div className="flex items-center gap-2">
            <MeterIcon size={24} />
            <span>{meterText}</span>
          </div>
          <div className="flex items-center gap-2">
            <FuelIcon size={24} />
            <span>{fuelText}</span>
          </div>
          <div className="flex items-center gap-2">
            <GearIcon size={24} />
            <span>{gearText}</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-4">
          <span className="text-2xl font-bold me-20">{price}</span>
          <ExploreArrow href="/cars" text="View Details" />
        </div>
      </div>
    </div>
  ); 
}
