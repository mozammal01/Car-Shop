import Banner from "@/components/home/Banner";
import ExploreBrands from "@/components/home/ExploreBrands";
import ExploreVehicles from "@/components/home/ExploreVehicles";
import Navigation from "@/components/home/Navigation";
import SellUs from "@/components/home/SellUs";
import Statistics from "@/components/home/Statistics";
import Services from "@/components/home/Services";
import PopulerCars from "@/components/home/PopulerCars";
import CarFinder from "@/components/home/CarFinder";
import Testimonial from "@/components/home/Testimonial";
import Blogs from "@/components/home/Blogs";
import BuyOrSell from "@/components/home/BuyOrSell";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navigation />
        <Banner />
        <ExploreBrands />
        <ExploreVehicles />
        <SellUs />
        <Statistics />
        <Services />
        <PopulerCars />
        <CarFinder />
        <Testimonial />
        <Blogs />
        <BuyOrSell />
        <Footer />
      </div>
    </>
  );
}
