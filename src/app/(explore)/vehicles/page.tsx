import Vehicles from "@/components/explore/vehicles/Vehicles";

export default function VehiclesPage() {
  return (
    <>
      <div className="text-center h-[400px] text-white">
        <h2 className="md:text-6xl text-4xl font-bold mb-4">Vehicles</h2>
        <p className="text-xl font-semibold">Explore our premium Vehicles</p>
      </div>
      <div className="container mx-auto p-10 max-xl:w-5/6 text-center">
        <Vehicles />
      </div>
    </>
  );
}
