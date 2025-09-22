import { cn } from "@/lib/utils";
import ExploreArrowIcon from "../icons/exploreArrowIcon";
import Link from "next/link";
import { ExploreArrowProps } from "@/interfaces/shared-interfaces";

export default function ExploreArrow({ text, className, href }: ExploreArrowProps) {
  return (
    <Link href={href} className={cn("hover:text-primary hover:scale-105 transition-all duration-300", className)}>
      <div className="flex items-center sm:gap-8 justify-evenly font-semibold cursor-pointer">
      <span>{text}</span><ExploreArrowIcon size={14}/>
    </div>
    </Link>
  );
}