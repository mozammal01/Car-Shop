"use client";
import { createContext, useContext, useState } from "react";
import { SearchContextProps } from "@/interfaces/shared-interfaces";

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  return (
    <SearchContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand,
        selectedCondition,
        setSelectedCondition,
        selectedPrice,
        setSelectedPrice,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
