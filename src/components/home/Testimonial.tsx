"use client";
import Feedback from "../feedback/Feedback";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import feedback1 from "@/../public/feedback/test1.png";
import feedback2 from "@/../public/feedback/test2.jpg";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function Testimonial() {
  const feedbacks = [
    {
      img: feedback1,
      name: "Ali TUFAN",
      job: "Designer",
      rating: "5.0",
      description:
        "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
    },
    {
      img: feedback2,
      name: "Ali TUFAN",
      job: "Designer",
      rating: "5.0",
      description:
        "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-slate-50 md:h-[800px] h-full my-20">
      <div className="md:container mx-auto w-[400px] md:p-20 p-4">
        <div className="flex items-center justify-between">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5 }}
            className="md:text-4xl text-2xl font-bold"
          >
            What Our Customers Say
          </motion.h2>
          <h4>Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</h4>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <Carousel className="my-20">
            <CarouselContent>
              {feedbacks.map((feedback, i) => (
                <Feedback key={i} {...feedback} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}
