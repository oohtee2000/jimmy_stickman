"use client";

import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({
  images,
}: ProductGalleryProps) {
  return (
    <section className="grid grid-cols-2 gap-px bg-border">
      {images.map((image, index) => (
        <div
          key={index}
          className="
            relative
            aspect-square
            overflow-hidden
            bg-muted
          "
        >
          <Image
            fill
            src={image}
            alt={`Product Image ${index + 1}`}
            className="
              object-contain
              transition-transform
              duration-500
              hover:scale-105
            "
            sizes="50vw"
            priority={index < 2}
          />
        </div>
      ))}
    </section>
  );
}