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

export interface PopularCardProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  meterText: string;
  fuelText: string;
  gearText: string;
  price: string;
  category?: string;
}

export interface BlogCardProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  date: string;
  author: string;
  category?: string;
}

export interface BuyOrSellCardProps {
  title: string;
  description: string;
  buy: boolean;
}

export interface CountingAnimationProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
  decimals?: number;
}

export interface StatisticItemProps {
  value: number;
  suffix: string;
  label: string;
}

export interface CategoryProps {
  category1: string;
  category2: string;
  category3: string;
  category4?: string;
  category5?: string;
  category6?: string;
  className?: string;
}

export interface FeedbackProps {
  img: StaticImageData;
  name: string;
  job: string;
  rating: string;
  description: string;
}
import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}
