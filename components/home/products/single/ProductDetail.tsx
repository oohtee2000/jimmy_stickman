"use client";
import { useState } from "react";

import Image from "next/image";
import { ArrowRight, Heart, Ruler } from "lucide-react";


import { Button } from "@/components/ui/button";
import { ProductHeader } from "./ProductHeader";

const sizes = [5, 6, ];
const colors = [
  {
    id: 1,
    name: "Lucid Pink",
    description: "Core Black / Core Black",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
  },
  {
    id: 2,
    name: "Cloud White",
    description: "Grey One / Silver",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=300",
  },
  {
    id: 3,
    name: "Core Black",
    description: "Cloud White / Grey",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300",
  },
  {
    id: 4,
    name: "Royal Blue",
    description: "Cloud White / Black",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=300",
  },
];

export function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
   const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <aside className=" max-w-md">
   
     <div className="hidden lg:flex" >
        {/* Product Name */}
      <ProductHeader
  category="Women • Performance"
  title="AMPLIMOVE TRAINER SHOES"
  currentPrice="₦37,800"
  originalPrice="₦126,000"
/>
     </div>
      

      {/* Colour */}
     <div className="space-y-5">
  <div className="flex items-center justify-between">
    <h2 className="text-base font-semibold tracking-wide">
      Colour
    </h2>

    <span className="text-sm text-muted-foreground">
      {colors.length} Available
    </span>
  </div>

  {/* Selected Colour Name */}
  <div>
    <p className="text-sm font-medium">{selectedColor.name}</p>
    <p className="text-sm text-muted-foreground">
      {selectedColor.description}
    </p>
  </div>

  {/* Colour Options */}
  <div className="flex flex-wrap gap-3">
    {colors.map((color) => {
      const active = selectedColor.id === color.id;

      return (
        <button
          key={color.id}
          onClick={() => setSelectedColor(color)}
          className={`
            relative overflow-hidden border-2 transition-all duration-200
            ${
              active
                ? "border-black ring-1 ring-black"
                : "border-border hover:border-black"
            }
          `}
        >
          <Image
            src={color.image}
            alt={color.name}
            width={80}
            height={80}
            className="h-20 w-20 object-cover"
          />

          {active && (
            <div className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
        </button>
      );
    })}
  </div>
</div>

      {/* Sizes */}
      <div className="space-y-4">
  <div className="flex items-center justify-between">
    <h2 className="text-base font-semibold tracking-wide">
      Select Size (UK)
    </h2>

    <button className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
      <Ruler className="h-4 w-4" />
      Size Guide
    </button>
  </div>

  <div className="grid grid-cols-4 gap-2">
    {sizes.map((size) => {
      const selected = selectedSize === size;

      return (
        <Button
          key={size}
          variant="ghost"
          onClick={() => setSelectedSize(size)}
          className={`
            h-12 rounded-none border text-sm font-medium transition-all
            ${
              selected
                ? "border-black bg-black text-white hover:bg-black hover:text-white"
                : "border-border hover:border-black hover:bg-muted"
            }
          `}
        >
          {size}
        </Button>
      );
    })}
  </div>

  {selectedSize && (
    <p className="text-sm text-muted-foreground">
      Selected size: <span className="font-medium text-foreground">{selectedSize} UK</span>
    </p>
  )}
</div>

      {/* Actions */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <Button className="h-14 flex-1 rounded-none justify-between px-6 uppercase tracking-[0.2em]">
            Add to Bag
            <ArrowRight className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-none"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <Button
          variant="outline"
          className="h-14 w-full rounded-none justify-between px-6 uppercase tracking-[0.2em]"
        >
          Find Alternatives
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  );
}