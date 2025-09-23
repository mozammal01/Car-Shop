"use client";
import { useState } from "react";
// import ford1 from "@/../public/vehicles/ford21/ford1.jpg";
// import ford2 from "@/../public/vehicles/ford21/ford2.jpg";
// import ford3 from "@/../public/vehicles/ford21/ford3.jpg";
// import ford4 from "@/../public/vehicles/ford21/ford4.jpg";
// import ford5 from "@/../public/vehicles/ford21/ford5.jpg";
import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ImageSection({ img }: { img: StaticImageData[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const carImages = [
    { src: img[0], alt: "Ford Transit 2021" },
    { src: img[1], alt: "Ford Transit 2023" },
    { src: img[2], alt: "Audi A6" },
    { src: img[3], alt: "Toyota Corolla" },
    { src: img[4], alt: "Mercedes GLC" },
  ];
  return (
    <div>
      {/* Main Image Display */}
      <div className="mb-6">
        <Image
          src={carImages[selectedImage].src}
          alt={carImages[selectedImage].alt}
          width={800}
          height={500}
          className="rounded-2xl object-cover w-full h-[500px]"
          unoptimized
        />
      </div>

      {/* Thumbnail Carousel */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {carImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
              <div
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image src={image.src} alt={image.alt} width={200} height={120} className="object-cover w-full h-20 md:h-24" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
