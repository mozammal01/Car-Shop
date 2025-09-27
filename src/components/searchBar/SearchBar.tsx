import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const router = useRouter();
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const handleSearch = () => {
    router.refresh();
    router.push(`/vehicles?brand=${selectedBrand}&condition=${selectedCondition}&price=${selectedPrice}`);
  };
  return (
    <>
      {/* Search */}
      <div className="flex lg:flex-row flex-col space-x-4 space-y-2 py-4 bg-white rounded lg:rounded-full p-2 px-6 text-primary font-semibold w-fit mx-auto mt-10">
        {/*  */}
        <Select onValueChange={(value) => setSelectedBrand(value)}>
          <SelectTrigger className="w-[180px] border-none">
            <SelectValue placeholder="Any Models" />
          </SelectTrigger>
          <SelectContent className="font-semibold">
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Mercedes">Mercedes</SelectItem>
            <SelectItem value="Ford">Ford</SelectItem>
            <SelectItem value="Toyota">Toyota</SelectItem>
            <SelectItem value="Audi">Audi</SelectItem>
          </SelectContent>
        </Select>
        <hr className="border-1 h-full border-gray-300" />
        {/*  */}
        <Select onValueChange={(value) => setSelectedCondition(value)}>
          <SelectTrigger className="w-[180px] border-none">
            <SelectValue placeholder="Condition" className="placeholder:text-primary" />
          </SelectTrigger>
          <SelectContent className="font-semibold">
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Used">Used</SelectItem>
          </SelectContent>
        </Select>
        <hr className="border-1 h-full border-gray-300" />
        <Select onValueChange={(value) => setSelectedPrice(value)}>
          <SelectTrigger className="w-[180px] border-none">
            <SelectValue placeholder="All Prices" />
          </SelectTrigger>
          <SelectContent className="font-semibold">
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="10000">10000</SelectItem>
            <SelectItem value="20000">20000</SelectItem>
            <SelectItem value="30000">30000</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center justify-center gap-6">
          <Button
            onClick={handleSearch}
            className="bg-primary text-white w-[150px] rounded-full font-medium transition-colors duration-200"
          >
            {/* <Link href={`/vehicles?brand=${selectedBrand}&condition=${selectedCondition}&price=${selectedPrice}`}> */}
            <SearchIcon />
            Search Cars
            {/* </Link> */}
          </Button>
        </div>
      </div>
    </>
  );
}
