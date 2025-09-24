"use client";
import { CategoryProps } from "@/interfaces/shared-interfaces";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Category({
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  className,
  selectedCategory,
  onCategoryChange,
}: CategoryProps) {
  const [internalCat, setInternalCat] = useState(category1);
  const categories = [category1, category2, category3, category4, category5, category6];

  const currentCategory = selectedCategory !== undefined ? selectedCategory : internalCat;
  const handleCategoryChange = (category: string) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    } else {
      setInternalCat(category);
    }
  };

  return (
    <div>
      <div className="flex space-x-8 my-10 font-semibold container mx-auto">
        {categories.map((category, i) => (
          <button
            key={i}
            className={cn(currentCategory === category ? "border-b-2 border-primary p-2 cursor-pointer" : "p-2 cursor-pointer", className)}
            onClick={() => handleCategoryChange(category || "")}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
