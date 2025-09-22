"use client";
import CarServiceIcon from "../icons/carServiceIcon";
import SpecialOfferIcon from "../icons/specialOfferIcon";
import TransparentPricingIcon from "../icons/transparentPricingIcon";
import TrusteedIcon from "../icons/trusteedIcon";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: <SpecialOfferIcon size={40} />,
      title: "Special Financing Offers",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <TrusteedIcon size={40} />,
      title: "Trusted Car Dealership",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <TransparentPricingIcon size={40} />,
      title: "Transparent Pricing",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
    },
    {
      icon: <CarServiceIcon size={40} />,
      title: "Expert Car Service",
      description: "Our stress-free finance department that can find financial solutions to save you money.",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-20 mb-40">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="md:text-5xl text-3xl font-bold"
      >
        Why Choose Us ?{" "}
      </motion.h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12"
      >
        {services.map((service) => (
          <div key={service.title} className="flex flex-col justify-center space-y-2">
            {service.icon}
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
        
      </motion.div>
    </div>
  );
}
