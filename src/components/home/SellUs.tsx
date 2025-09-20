import Image from "next/image";
import sellUs from "@/../public/sellUs/car.jpg";
import RightMarkIcon from "../icons/rightMarkIcon";
import { Button } from "../ui/button";
import ExploreArrow from "../exploreArrow/ExploreArrow";
export default function SellUs() {
  return (
    <div className="max-w-[1700px] mx-auto py-10 md:py-20 px-4">
      <div>
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <Image
              src={sellUs}
              alt="sellUs"
              className="w-full max-w-md md:max-w-lg lg:max-w-none h-auto object-cover rounded-lg lg:rounded-none"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[865px] bg-[#EEF1FB] p-6 md:p-12 lg:p-20 lg:px-40 flex flex-col justify-center space-y-6 md:space-y-8 min-h-[400px] lg:h-[684px]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Get A Fair Price For Your Car Sell To Us Today</h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of.
            </p>

            {/* Features List */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-start gap-2 md:gap-3">
                <div className="bg-white w-5 h-5 md:w-6 md:h-6 rounded-full relative flex-shrink-0">
                  <RightMarkIcon size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span className="text-sm md:text-base">We are the UK's largest provider, with more patrols in more places</span>
              </div>

              <div className="flex items-center justify-start gap-2 md:gap-3">
                <div className="bg-white w-5 h-5 md:w-6 md:h-6 rounded-full relative flex-shrink-0">
                  <RightMarkIcon size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span className="text-sm md:text-base">You get 24/7 roadside assistance</span>
              </div>

              <div className="flex items-center justify-start gap-2 md:gap-3">
                <div className="bg-white w-5 h-5 md:w-6 md:h-6 rounded-full relative flex-shrink-0">
                  <RightMarkIcon size={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <span className="text-sm md:text-base">We fix 4 out of 5 cars at the roadside</span>
              </div>
            </div>

            {/* Button */}
            <Button className="w-full sm:w-[150px] h-12 md:h-[60px] text-sm md:text-base">
              <ExploreArrow text="Get Started" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
