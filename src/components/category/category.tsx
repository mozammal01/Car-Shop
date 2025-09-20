"use client";
import { CategoryProps } from "@/interfaces/shared-interfaces";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Category({ category1, category2, category3, category4, category5, category6 }: CategoryProps) {
  const [cat, setCat] = useState(category1);
  const categories = [category1, category2, category3, category4, category5, category6];
  return (
    <div>
      <div className="flex space-x-8 my-10 font-semibold max-w-[1500px] mx-auto">
        {categories.map((category,i) => (
          <button
            key={i}
            className={cn(cat === category ? "border-b-2 border-primary p-2 cursor-pointer" : "p-2 cursor-pointer")}
            onClick={() => setCat(category || "")}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
