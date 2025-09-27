import VehiclesContent from "@/components/explore/vehiclesContent/VehiclesContent";
import { Suspense } from "react";



export default function VehiclesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VehiclesContent />
    </Suspense>
  );
}
