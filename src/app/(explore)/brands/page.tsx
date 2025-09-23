import Brands from "@/components/explore/brands/Brands";


export default function BrandsPage() {
  return (
    <>
      <div className="text-center h-[400px] text-white">
        <h2 className="md:text-6xl text-4xl font-bold mb-4">Brands</h2>
        <p className="text-xl font-semibold">Explore our premium brands</p>
      </div>
      <div>
        <Brands />
      </div>
    </>
  );
}
