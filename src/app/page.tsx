import Banner from "@/components/home/Banner";
import ExploreBrands from "@/components/home/exploreBrands";
import ExploreVehicles from "@/components/home/exploreVehicles";
import Navigation from "@/components/home/Navigation";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navigation />
        <Banner />
        <div className="absolute md:top-[830px] w-full">
          <ExploreBrands />
          <ExploreVehicles />
        </div>
      </div>
    </>
  );
}
