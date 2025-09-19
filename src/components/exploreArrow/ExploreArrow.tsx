import ExploreArrowIcon from "../icons/exploreArrowIcon";

export default function ExploreArrow({ text }: { text: string }) {
  return (
    <div className="flex items-center sm:gap-8 justify-evenly font-semibold cursor-pointer">
      <span>{text}</span><ExploreArrowIcon size={14} className="-ms-6"/>
    </div>
  );
}