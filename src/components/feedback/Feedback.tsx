import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import feedback1 from "@/../public/feedback/test1.png";
import StarIcon from "../icons/starIcon";

export default function Feedback() {
  return (
    <Carousel className="my-20">
      <CarouselContent>
        <CarouselItem className="md:flex items-center justify-between gap-10">
          <div className="rounded-md p-4">
            <Image src={feedback1} alt="feedback1" width={450} height={470} className="md:w-[450px] w-[400px]" />
          </div>
          <div className="md:w-[50%] w-full space-y-2">
            <div className="flex items-center gap-2"><StarIcon size={81} /><span className="rounded-full bg-[#E1C03F] text-white px-4 py-1">5.0</span></div>
            <h1 className="text-md font-semibold">Ali TUFAN</h1>
            <p className="font-semibold">Designer</p>
            <p className="md:text-2xl text-xl font-semibold mt-12">
              I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of
              the team.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
