"use client";

import CountingAnimation from "../animations/CountingAnimation";
import { StatisticItemProps } from "@/interfaces/shared-interfaces";


function StatisticItem({ value, suffix, label }: StatisticItemProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        <CountingAnimation to={value} suffix={suffix} duration={2.5} className="inline-block" />
      </div>
      <p className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
}

export default function Statistics() {
  const stats = [
    {
      value: 836,
      suffix: "M",
      label: "Cars For Sale",
    },
    {
      value: 738,
      suffix: "M",
      label: "Dealer Reviews",
    },
    {
      value: 100,
      suffix: "M",
      label: "Visitors Per Day",
    },
    {
      value: 238,
      suffix: "M",
      label: "Verified Dealers",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1700px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatisticItem key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
