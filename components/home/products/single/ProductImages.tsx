"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CardImage } from "./CardImage";

interface ProductImagesProps {
  images: string[];
}

export function ProductImages({
  images,
}: ProductImagesProps) {
  const [visibleImages, setVisibleImages] = useState(4);

  const isExpanded =
    visibleImages >= images.length;

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-1">
        {images
          .slice(0, visibleImages)
          .map((image, index) => (
            <CardImage
              key={index}
              image={image}
            />
          ))}
      </div>

      {images.length > 4 && (
        <div className="flex justify-center -translate-y-4">
          <Button
  variant="outline"
  onClick={() =>
    setVisibleImages(
      isExpanded ? 4 : images.length
    )
  }
  className="
    h-12
    min-w-44
    rounded-none
    border-2
    border-black
    bg-transparent
    px-8
    font-semibold
    uppercase
    tracking-[0.12em]
    transition-all
    duration-300
    hover:bg-black
    hover:text-white
    active:scale-[0.98]
  "
>
  {isExpanded ? "Show Less" : "Show More"}
</Button>
        </div>
      )}
    </div>
  );
}