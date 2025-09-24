import {Share2 } from "lucide-react";
import ImageSection from "./ImageSection";
import { VehiclesDetailsProps } from "@/interfaces/shared-interfaces";
import Contact from "@/components/contact/Contact";
import Details from "./Details";
import Features from "./Features";

export default function VehiclesDetails({ title, subTitle, year, location, price, date, views, fulldescription, carId, manufacturer, model, transmission, typeOfDrive, fuel, engine, enginePower, enginePower2, mileage, features, img }: VehiclesDetailsProps) {
  return (
    <div className="container mx-auto p-4">
      <ImageSection img={img}/>
      {/*  */}
      <div>
        <div className="my-20 lg:flex items-center justify-between">
          {/* Left Side */}
          <div className="flex flex-col gap-4 my-10">
            <div className="flex items-end gap-2 uppercase">
              <h3 className="xl:text-5xl text-3xl font-bold">{title}</h3>
              <span className="font-bold bg-primary text-white px-6 py-1 rounded">For Sale</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-gray-500">
                <span>{subTitle}</span>
                <div className="size-1 bg-slate-500 rounded-full"></div>
                <span>{year}</span>
                <div className="size-1 bg-slate-500 rounded-full"></div>
              </div>
              <span className="hover:underline hover:text-primary cursor-pointer font-semibold">{location}</span>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col gap-4 items-end">
            <div className="flex items-end gap-2 uppercase">
              <h3 className="text-5xl font-bold text-gray-600">{price}</h3>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <div className="flex items-center gap-2">
                <span>{date}</span>
                <div className="size-1 bg-slate-500 rounded-full"></div>
                <span>{views}</span>
                <div className="size-1 bg-slate-500 rounded-full"></div>
              </div>
              <Share2 size={16} className="cursor-pointer hover:text-primary " />
              <span className="hover:underline hover:text-primary cursor-pointer font-semibold">Share</span>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <p className="text-gray-500 text-xl">{fulldescription}</p>
        </div>
      </div>
      {/* Details */}
      <Details carId={carId} manufacturer={manufacturer} model={model} transmission={transmission} typeOfDrive={typeOfDrive} fuel={fuel} engine={engine} enginePower={enginePower} enginePower2={enginePower2} mileage={mileage} />
      {/* Features */}
      <Features features={features} />
      {/* Contacts */}
      <Contact />
    </div>
  );
}
