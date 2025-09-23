import { FeaturesProps } from "@/interfaces/shared-interfaces";

export default function Features({ features }: FeaturesProps) {
  return (
    <div className="my-20">
      <h4 className="text-2xl font-bold uppercase mb-8">Features</h4>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-10 text-gray-500">
        <div className="flex items-center gap-2 hover:text-black cursor-pointer">
          <div className="size-1 bg-red-600 rounded-full"></div>
          <span>{features[0]}</span>
        </div>
        <div className="flex items-center gap-2 hover:text-black cursor-pointer">
          <div className="size-1 bg-red-600 rounded-full"></div>
          <span>{features[1]}</span>
        </div>
        <div className="flex items-center gap-2 hover:text-black cursor-pointer">
          <div className="size-1 bg-red-600 rounded-full"></div>
          <span>{features[2]}</span>
        </div>
        <div className="flex items-center gap-2 hover:text-black cursor-pointer">
          <div className="size-1 bg-red-600 rounded-full"></div>
          <span>{features[3]}</span>
        </div>
        <div className="flex items-center gap-2 hover:text-black cursor-pointer">
          <div className="size-1 bg-red-600 rounded-full"></div>
          <span>{features[4]}</span>
        </div>
      </div>
    </div>
  );
}
