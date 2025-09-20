import CarServiceIcon from "../icons/carServiceIcon";
import SpecialOfferIcon from "../icons/specialOfferIcon";
import TransparentPricingIcon from "../icons/transparentPricingIcon";
import TrusteedIcon from "../icons/trusteedIcon";

export default function Services() {
  return (
    <div className="max-w-[1700px] mx-auto px-4 my-20 mb-40">
      <h1 className="md:text-5xl text-3xl font-bold">Why Choose Us ? </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        {/* Special Financing Offers */}
        <div className="flex flex-col justify-center space-y-2">
          <SpecialOfferIcon size={40} />
          <h2 className="text-2xl font-bold">Special Financing Offers</h2>
          <p className="text-gray-500">Our stress-free finance department that can find financial solutions to save you money.</p>
        </div>
        {/* Special Financing Offers */}
        <div className="flex flex-col justify-center space-y-2">
          <TrusteedIcon size={40} />
          <h2 className="text-2xl font-bold">Trusted Car Dealership</h2>
          <p className="text-gray-500">Our stress-free finance department that can find financial solutions to save you money.</p>
        </div>
        {/* Special Financing Offers */}
        <div className="flex flex-col justify-center space-y-2">
          <TransparentPricingIcon size={40} />
          <h2 className="text-2xl font-bold">Transparent Pricing</h2>
          <p className="text-gray-500">Our stress-free finance department that can find financial solutions to save you money.</p>
        </div>
        {/* Special Financing Offers */}
        <div className="flex flex-col justify-center space-y-2">
          <CarServiceIcon size={40} />
          <h2 className="text-2xl font-bold">Expert Car Service</h2>
          <p className="text-gray-500">Our stress-free finance department that can find financial solutions to save you money.</p>
        </div>
      </div>
    </div>
  );
}
