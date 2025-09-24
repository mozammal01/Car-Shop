"use client";
import BuyOrSellCard from "../card/BuyOrSellCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BuyOrSell() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="container bg-white mx-auto px-4 mb-20 rounded-b-[90px]">
      <div className="xl:flex items-center justify-between">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <BuyOrSellCard
            title="Are You Looking For a Car ?"
            description="We are committed to providing our customers with exceptional service."
            buy={true}
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <BuyOrSellCard
            title="Are You Looking For a Car ?"
            description="We are committed to providing our customers with exceptional service."
            buy={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
