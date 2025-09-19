import ExploreArrowIcon from "../icons/exploreArrowIcon";

export default function ExploreArrow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 font-semibold">
      <span>{text}</span><ExploreArrowIcon size={14} />
    </div>
  );
}