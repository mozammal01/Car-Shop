export interface NavButton {
  children: React.ReactNode;
  navButton: string;
  label: string;
  href: string;
  menuItem1: string;
  menuItem2: string;
  menuItem3: string;
  menuItem4: string;
}

import { StaticImageData } from "next/image";
export interface CarCardProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  meterText: string;
  fuelText: string;
  gearText: string;
  price: string;
  category?: string;
}

import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
