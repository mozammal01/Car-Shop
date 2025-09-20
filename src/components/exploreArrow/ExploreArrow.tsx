import { cn } from "@/lib/utils";
import ExploreArrowIcon from "../icons/exploreArrowIcon";

export default function ExploreArrow({ text, className }: { text: string, className?: string }) {
  return (
    <div className={cn("flex items-center sm:gap-8 justify-evenly font-semibold cursor-pointer", className)}>
      <span>{text}</span><ExploreArrowIcon size={14}/>
    </div>
  );
}