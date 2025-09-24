import { cn } from "@/lib/utils";
import ExploreArrowIcon from "../icons/exploreArrowIcon";
import Link from "next/link";
import { ExploreArrowProps } from "@/interfaces/shared-interfaces";

export default function ExploreArrow({ title, arrowText, className, href, titleClassName }: ExploreArrowProps) {
  return (
    <>
      <div className="flex items-center justify-between">
          <span className={cn("text-xl font-bold", titleClassName)}>{title}</span>
        <Link href={href} className={cn("hover:text-primary hover:scale-105 transition-all duration-300", className)}>
          <div className="flex items-center gap-2 font-semibold cursor-pointer">
            <span>{arrowText}</span>
            <ExploreArrowIcon size={14} />
          </div>
        </Link>
      </div>
    </>
  );
}
