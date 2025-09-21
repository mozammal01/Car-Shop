import Feedback from "../feedback/Feedback";

export default function Testimonial() {
  return (
    <div className="bg-slate-50 md:h-[800px] h-full my-20">
      <div className="max-w-[1500px] mx-auto md:p-20 p-4">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl text-2xl font-bold">What Our Customers Say</h1>
          <h1>Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</h1>
        </div>
        <Feedback />
      </div>
    </div>
  );
}
