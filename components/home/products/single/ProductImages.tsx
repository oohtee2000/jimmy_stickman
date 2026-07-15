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
            className="rounded-none bg-white px-8 py-5 text-black"
            onClick={() =>
              setVisibleImages(
                isExpanded
                  ? 4
                  : images.length
              )
            }
          >
            {isExpanded
              ? "Show Less"
              : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}