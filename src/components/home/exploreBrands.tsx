import ExploreArrow from "../exploreArrow/ExploreArrow";
import audi from "@/../public/brands/b1.png";
import bmw from "@/../public/brands/b2.png";
import ford from "@/../public/brands/b3.png";
import mercedes from "@/../public/brands/b4.png";
import peugeot from "@/../public/brands/b5.png";
import volkSwegen from "@/../public/brands/b6.png";
import Image from "next/image";

export default function ExploreBrands() {
  return (
    <div className="bg-slate-100 md:rounded-t-[90px] ">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl text-2xl font-bold">Explore Our Premium Brands</h1>
          <ExploreArrow text="Explore All Brands" />
        </div>
        <div className="md:flex grid grid-cols-2 items-center my-10 gap-4 justify-center">
          {/* Audi */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
          <Image src={audi} alt="audi" width={100} height={100} />
          <span className="text-lg font-bold">Audi</span>
          </div>
          {/* BMW */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
          <Image src={bmw} alt="bmw" width={100} height={100} />
          <span className="text-lg font-bold">BMW</span>
          </div>
          {/* Ford */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
          <Image src={ford} alt="ford" width={100} height={100} />
          <span className="text-lg font-bold">Ford</span>
          </div>
          {/* Mercedes */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
          <Image src={mercedes} alt="mercedes" width={100} height={100} />
          <span className="text-lg font-bold">Mercedes</span>
          </div>
          {/* Peugeot */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
          <Image src={peugeot} alt="peugeot" width={100} height={100} />
          <span className="text-lg font-bold">Peugeot</span>
          </div>
          {/* Volk Swegen */}
          <div className="w-[200px] h-[180px] bg-white rounded-md p-4 flex items-center justify-center flex-col">
          <Image src={volkSwegen} alt="volkSwegen" width={100} height={100} />
          <span className="text-lg font-bold">Volk Swegen</span>
          </div>
        </div>
      </div>
    </div>
  );
}
