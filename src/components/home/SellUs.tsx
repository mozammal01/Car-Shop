import Image from "next/image";
import sellUs from "@/../public/sellUs/car.jpg";
import RightMarkIcon from "../icons/rightMarkIcon";
import { Button } from "../ui/button";
import ExploreArrow from "../exploreArrow/ExploreArrow";
export default function SellUs() {
  return (
    <div className="max-w-[1700px] mx-auto py-20 px-4">
      <div>
        <div className="flex items-center justify-center">
          <div>
            <Image src={sellUs} alt="sellUs" />
          </div>
          <div className="p-20 flex flex-col justify-center space-y-8 bg-[#EEF1FB] px-40 w-[865px] h-[684px]">
            <h1 className="md:text-4xl text-4xl font-bold">Get A Fair Price For Your Car Sell To Us Today</h1>
            <p className="text-gray-500">
              We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.
            </p>
            <div className="space-y-4">
              {/*  */}
              <div className="flex items-center justify-start gap-2">
                <div className="bg-white w-6 h-6 rounded-full relative">
                  <RightMarkIcon size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span>We are the UK’s largest provider, with more patrols in more places</span>
              </div>
              {/*  */}
              <div className="flex items-center justify-start gap-2">
                <div className="bg-white w-6 h-6 rounded-full relative">
                  <RightMarkIcon size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span>You get 24/7 roadside assistance</span>
              </div>
              {/*  */}
              <div className="flex items-center justify-start gap-2">
                <div className="bg-white w-6 h-6 rounded-full relative">
                  <RightMarkIcon size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span>We fix 4 out of 5 cars at the roadside</span>
              </div>
            </div>
            <Button className="w-[150px] h-[60px]"><ExploreArrow text="Get Started" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
