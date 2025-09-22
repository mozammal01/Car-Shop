import Image from "next/image";
import GearIcon from "../icons/gearIcon";
import FuelIcon from "../icons/fuelIcon";
import MeterIcon from "../icons/meterIcon";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import { CarCardProps } from "@/interfaces/shared-interfaces";
import SavedIcon from "../icons/savedIcon";
import { cn } from "@/lib/utils";

export default function CarCard({ imgSrc, title, description, meterText, fuelText, gearText, price, category }: CarCardProps) {
  return (
    <div className="w-[328px] h-[433px] bg-white rounded-md border-t-0 border-1 border-gray-300 rounded-t-2xl">
      <div className="relative">
        <Image src={imgSrc} alt="car" width={328} height={200} className="rounded-t-2xl object-cover max-h-[200px]" />
        <span className="absolute top-4 right-4 bg-white text-black w-9 h-9 rounded-full flex items-center justify-center">
          <SavedIcon size={12} />
        </span>
        {category && <span className={cn("absolute top-4 left-4 text-white px-2 py-1 rounded-md", category === "Great Price" ? "bg-green-600" : "bg-blue-600")}>{category}</span>}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500 pb-1">{description}</p>
        <hr />
        <div className="flex justify-evenly items-center gap-2 my-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <MeterIcon size={24} />
            <span>{meterText}</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <FuelIcon size={24} />
            <span>{fuelText}</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <GearIcon size={24} />
            <span>{gearText}</span>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-4">
          <span className="text-2xl font-bold">{price}</span>
          <ExploreArrow href="/cars" text="View Details" className="text-primary" />
        </div>
      </div>
    </div>
  );
}
