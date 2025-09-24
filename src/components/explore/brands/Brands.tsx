import Image from "next/image";
import toyota from "@/../public/brands/toyota.png";
import bmw from "@/../public/brands/bmw.png";
import audi from "@/../public/brands/audi.png";
import mercedes from "@/../public/brands/mercedes.png";
import ferrari from "@/../public/brands/ferrari.png";
import lamborghini from "@/../public/brands/lamborghini.png";
import ford from "@/../public/brands/ford.png";
import honda from "@/../public/brands/honda.png";
import nissan from "@/../public/brands/nissan.png";
import kia from "@/../public/brands/kia.png";
import chevrolet from "@/../public/brands/chevrolet.png";
import porsche from "@/../public/brands/porsche.png";
import volkswagen from "@/../public/brands/volkswagen.png";

const brands = [
  { name: "Toyota", logo: toyota },
  { name: "BMW", logo: bmw },
  { name: "Audi", logo: audi },
  { name: "Mercedes-Benz", logo: mercedes },
  { name: "Ferrari", logo: ferrari },
  { name: "Lamborghini", logo: lamborghini },
  { name: "Ford", logo: ford },
  { name: "Honda", logo: honda },
  { name: "Nissan", logo: nissan },
  { name: "Hyundai", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg" },
  { name: "Kia", logo: kia },
  { name: "Chevrolet", logo: chevrolet },
  { name: "Porsche", logo: porsche },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "Volkswagen", logo: volkswagen },
];

export default function Brands() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-20 p-6 container mx-auto">
      {brands.map((brand, i) => (
        <div key={i} className=" bg-white rounded-md shadow-xl p-4 flex items-center justify-center flex-col">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={100}
            height={100}
            className="object-contain"
            unoptimized
          />
          <p className="mt-2 font-semibold">{brand.name}</p>
        </div>
      ))}
    </div>
  );
}
