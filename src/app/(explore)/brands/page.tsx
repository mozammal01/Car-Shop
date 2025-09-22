import Brands from "@/components/brands/Brands";

export default function BrandsPage() {
  return (
    <>
      <div className="text-center h-[400px] text-white">
        <h1 className="md:text-6xl text-4xl font-bold mb-4">Brands</h1>
        <p className="text-lg font-semibold">Explore our premium brands</p>
      </div>
    <div className="">
      <Brands />
    </div>
    </>
  );
}
