import { BuyOrSellCardProps } from "@/interfaces/shared-interfaces";
import ExploreArrow from "../exploreArrow/ExploreArrow";
import BuyOrSellCarIcon from "../icons/BuyOrSellCarIcon";
import BuyOrSellSellIcon from "../icons/BuyOrSellSellIcon";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function BuyOrSellCard({ title, description, buy }: BuyOrSellCardProps) {
  return (
    <div className={` ${buy ? "bg-[#E9F2FF]" : "bg-[#FFE9F3]"} md:w-[685px] w-full md:h-[390px] h-full mb-8 rounded-2xl`}>
      <div className="flex flex-col justify-center p-20 gap-4">
        <h1 className="text-4xl font-bold lg:w-[60%] w-full">{title}</h1>
        <p className="text-gray-700 lg:w-[80%] font-semibold w-full">{description}</p>
        <div className="flex items-center justify-between">
          <Button className={cn("py-8", buy ? "bg-[#405FF2]" : "bg-black")}>
            <ExploreArrow text="Get Started" />
          </Button>
          {buy ? <BuyOrSellCarIcon size={110} /> : <BuyOrSellSellIcon size={110} />} 
        </div>
      </div>
    </div>
  );
}
