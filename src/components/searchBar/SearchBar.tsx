import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext";

export default function Search() {
  const router = useRouter();
  const { setSelectedBrand, setSelectedCondition, setSelectedPrice } = useSearch();
  const { selectedBrand, selectedCondition, selectedPrice } = useSearch();
  const handleSearch = () => {
    router.push(`/vehicles`);
  };
  return (
    <>
      {/* Search */}
      <div className="flex lg:flex-row flex-col space-x-4 space-y-2 py-4 bg-white rounded lg:rounded-full p-2 px-6 text-primary font-semibold w-fit mx-auto mt-10">
        {/*  */}
        <Select value={selectedBrand} onValueChange={(value) => setSelectedBrand(value as string)}>
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
        <Select value={selectedCondition} onValueChange={(value) => setSelectedCondition(value)}>
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
        <Select value={selectedPrice} onValueChange={(value) => setSelectedPrice(value)}>
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
            <SearchIcon />
            Search Cars
          </Button>
        </div>
      </div>
    </>
  );
}
