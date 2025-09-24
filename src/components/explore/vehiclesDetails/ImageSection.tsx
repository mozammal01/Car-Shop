"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function ImageSection({ img }: { img: StaticImageData[] }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const carImages = [
    { src: img[0], alt: "Ford Transit 2021" },
    { src: img[1], alt: "Ford Transit 2023" },
    { src: img[2], alt: "Audi A6" },
    { src: img[3], alt: "Toyota Corolla" },
    { src: img[4], alt: "Mercedes GLC" },
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Image Display */}
      <div className="relative overflow-hidden rounded-2xl h-[500px] bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, x: 300, scale: 1.1 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.9 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={carImages[selectedImage].src}
              alt={carImages[selectedImage].alt}
              width={800}
              height={600}
              className="rounded-2xl object-cover w-full h-[600px]"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Carousel */}
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {carImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 100,
                  scale: selectedImage === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all mt-2 ${
                  selectedImage === index ? "border-primary shadow-lg" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
                whileHover={{
                  scale: 0.95,
                  borderColor: selectedImage === index ? "#primary" : "#3B82F6",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1, ease: "easeOut" },
                }}
              >
                <Image src={image.src} alt={image.alt} width={200} height={120} className="object-cover w-full h-20 md:h-24" />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
