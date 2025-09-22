"use client";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import feedback1 from "@/../public/feedback/test1.png";
import StarIcon from "../icons/starIcon";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FeedbackProps } from "@/interfaces/shared-interfaces";

export default function Feedback({ img, name, job, rating, description }: FeedbackProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      
        <CarouselItem className="md:flex items-center justify-between gap-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className="rounded-md p-4"
          >
            <Image src={img} alt="feedback1" width={450} height={470} className="md:w-[450px] w-[400px]" />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className="md:w-[50%] w-full space-y-2"
          >
            <div className="flex items-center gap-2">
              <StarIcon size={81} />
              <span className="rounded-full bg-[#E1C03F] text-white px-4 py-1">{rating}</span>
            </div>
            <h2 className="text-md font-semibold">{name}</h2>
            <p className="font-semibold">{job}</p>
            <p className="md:text-2xl text-xl font-semibold mt-12">{description}</p>
          </motion.div>
        </CarouselItem>
    </>
  );
}
