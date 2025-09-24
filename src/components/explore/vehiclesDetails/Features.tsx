import { FeaturesProps } from "@/interfaces/shared-interfaces";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Features({ features }: FeaturesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div 
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
    transition={{ duration: 0.5 }}
    className="my-20">
      <h4 className="text-2xl font-bold uppercase mb-8">Features</h4>
      <hr />
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10 text-gray-500">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center gap-2 hover:text-black cursor-pointer"
          >
            <div className="size-1 bg-primary rounded-full"></div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
