"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";

import type { Product } from "@/types/product";

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export function ProductCarousel({
  title,
  products,
}: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

 const scroll = (direction: "left" | "right") => {
  if (!scrollRef.current) return;

  const cardWidth =
    window.innerWidth < 640
      ? 180
      : window.innerWidth < 1024
      ? 240
      : 320;

  scrollRef.current.scrollBy({
    left: direction === "left" ? -cardWidth : cardWidth,
    behavior: "smooth",
  });
};

  return (
    <section className="w-full py-8 md:py-12">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">
    {title}
  </h2>

  <div className="hidden items-center gap-2 md:flex">
    <Button
      variant="outline"
      size="icon"
      className="rounded-none"
      onClick={() => scroll("left")}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>

    <Button
      variant="outline"
      size="icon"
      className="rounded-none"
      onClick={() => scroll("right")}
    >
      <ArrowRight className="h-4 w-4" />
    </Button>
  </div>
</div>

      {/* Carousel */}
      <div className="w-full min-w-0 overflow-hidden">
<div
  ref={scrollRef}
  className="
    flex
    gap-3
    px-5
    lg:px-0
    overflow-x-auto
    overflow-y-hidden
    scroll-smooth
    no-scrollbar
    snap-x
    snap-proximity
    touch-pan-x
    [-webkit-overflow-scrolling:touch]
  "
>
       {products.map((product) => (
            <div
  key={product.id}
  className="
  w-[46vw]
  max-w-45
  sm:w-48
  md:w-56
  lg:w-64
  xl:w-72
  shrink-0
  snap-start
"
>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}