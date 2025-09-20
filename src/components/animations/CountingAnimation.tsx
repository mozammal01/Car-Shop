"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { CountingAnimationProps } from "@/interfaces/shared-interfaces";


export default function CountingAnimation({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  className = "",
  decimals = 0,
}: CountingAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [motionValue, isInView, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const value = decimals > 0 ? latest.toFixed(decimals) : Math.floor(latest);
        ref.current.textContent = value + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {from + suffix}
    </motion.span>
  );
}
