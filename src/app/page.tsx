import Banner from "@/components/home/Banner";
import ExploreBrands from "@/components/home/ExploreBrands";
import ExploreVehicles from "@/components/home/ExploreVehicles";
import Navigation from "@/components/home/Navigation";
import SellUs from "@/components/home/SellUs";
import Statistics from "@/components/home/Statistics";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navigation />
        <Banner />
        <div className="absolute md:top-[830px] w-full">
          <ExploreBrands />
          <ExploreVehicles />
          <SellUs />
          <Statistics />
        </div>
      </div>
    </>
  );
}
