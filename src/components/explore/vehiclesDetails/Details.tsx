import { DetailsProps } from "@/interfaces/shared-interfaces";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Details({
  carId,
  manufacturer,
  model,
  transmission,
  typeOfDrive,
  fuel,
  engine,
  enginePower,
  enginePower2,
  mileage,
}: DetailsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="my-20"
    >
      <h4 className="text-2xl font-bold uppercase mb-8">Details</h4>
      <hr />
      {/*  */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10"
      >
        <div>
          <span className="text-gray-500">Car ID: </span>
          <span>{carId}</span>
        </div>
        {/*  */}
        <div>
          <span className="text-gray-500">Manufacturer: </span>
          <span className="font-semibold text-primary">{manufacturer}</span>
        </div>
        {/*  */}
        <div>
          <span className="text-gray-500">Model: </span>
          <span className="font-semibold text-primary">{model}</span>
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
      </motion.div>
    </motion.div>
  );
}
