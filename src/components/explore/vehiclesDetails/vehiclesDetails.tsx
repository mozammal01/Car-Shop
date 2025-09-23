import { FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon, Share2, TwitterIcon } from "lucide-react";
import ImageSection from "./ImageSection";
import ContactForm from "@/components/contact/ContactForm";
import amyWalker from "@/../public/vehicles/author/author.jpg";
import Image from "next/image";
import { VehiclesDetailsProps } from "@/interfaces/shared-interfaces";

export default function VehiclesDetails({ title, subTitle, year, location, price, date, views, description, carId, manufacturer, model, transmission, typeOfDrive, fuel, engine, enginePower, enginePower2, mileage, features, img }: VehiclesDetailsProps) {
  return (
    <div className="container mx-auto p-4">
      <ImageSection img={img}/>
      {/*  */}
      <div>
        <div className="my-20 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-2 uppercase">
              <h3 className="text-5xl font-bold">{title}</h3>
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
          <p className="text-gray-500 text-xl">{description}</p>
        </div>
      </div>
      {/* Details */}
      <div className="my-20">
        <h4 className="text-2xl font-bold uppercase mb-8">Details</h4>
        <hr />
        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10">
          <div>
            <span className="text-gray-500">Car ID: </span>
            <span>{carId}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Manufacturer: </span>
            <span className="font-semibold text-red-600">{manufacturer}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Model: </span>
            <span className="font-semibold text-red-600">{model}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Transmission: </span>
            <span>{transmission}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Type of drive:</span>
            <span>{typeOfDrive}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Fuel: </span>
            <span>{fuel}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Engine: </span>
            <span>{engine}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Engine power: </span>
            <span>{enginePower}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Engine power: </span>
            <span>{enginePower2}</span>
          </div>
          {/*  */}
          <div>
            <span className="text-gray-500">Mileage: </span>
            <span>{mileage}</span>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="my-20">
        <h4 className="text-2xl font-bold uppercase mb-8">Features</h4>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10 text-gray-500">
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <div className="size-1 bg-red-600 rounded-full"></div>
            <span>{features[0]}</span>
          </div>
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <div className="size-1 bg-red-600 rounded-full"></div>
            <span>{features[1]}</span>
          </div>
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <div className="size-1 bg-red-600 rounded-full"></div>
            <span>{features[2]}</span>
          </div>
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <div className="size-1 bg-red-600 rounded-full"></div>
            <span>{features[3]}</span>
          </div>
          <div className="flex items-center gap-2 hover:text-black cursor-pointer">
            <div className="size-1 bg-red-600 rounded-full"></div>
            <span>{features[4]}</span>
          </div>
        </div>
      </div>
      {/* Contacts */}
      <div>
        <h4 className="text-2xl font-bold uppercase mb-8">Contacts</h4>
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-8 gap-4 my-10">
          <div className="xl:col-span-2 col-span-1">
            <Image src={amyWalker} alt="Amy Walker" width={300} height={300} className="rounded-md" />
          </div>
          {/*  */}
          <div className="xl:col-span-4 col-span-2 p-4">
            <div className="flex flex-col gap-2 font-semibold uppercase mb-4">
              <h4 className="text-2xl font-bold">Amy Walker </h4>
              <span>View My Office</span>
              <span className="bg-white rounded px-4 py-1 w-fit">Free Agent</span>
            </div>
            <div className="flex flex-col gap-4 text-gray-500 font-semibold">
              <span>Fluet in English, spanish</span>
              <span>
                Quisque eu euismod ex, sed porttitor orci. Donec sit amet dolor nulla. Cras scelerisque egestas orci, sit amet rutrum sapien
                eleifend nec. Morbi non lacinia orci, et vulputate eros. Nunc rhoncus nunc volutpat, consequat enim eu.
              </span>
              <span>+1234567890</span>
              <span>+1234567891</span>
              <span>+1234567892</span>
              <span>123 Main St, Anytown, USA</span>
              <div className="flex gap-2 mt-4 text-black">
                <div className="bg-white rounded p-2 w-fit hover:text-primary">
                  <MailIcon size={16} />
                </div>
                <div className="bg-white rounded p-2 w-fit hover:text-primary">
                  <InstagramIcon size={16} />
                </div>
                <div className="bg-white rounded p-2 w-fit hover:text-primary">
                  <FacebookIcon size={16} />
                </div>
                <div className="bg-white rounded p-2 w-fit hover:text-primary">
                  <TwitterIcon size={16} />
                </div>
                <div className="bg-white rounded p-2 w-fit hover:text-primary">
                  <PhoneIcon size={16} />
                </div>
                <div className="bg-white rounded p-2 w-fit hover:text-primary">
                  <MapPinIcon size={16} />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="xl:col-span-2 col-span-1">
            <ContactForm />
            {/* <ContactForm contactName="Amy Walker" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
