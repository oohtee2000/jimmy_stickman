"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "SAMBA OG SHOES",
    category: "Women Originals",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    oldPrice: "₦208,000",
    price: "₦62,400",
    discount: "-70%",
  },
  {
    id: 2,
    name: "ALPHABOOST V1",
    category: "Men Sportswear",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    oldPrice: "₦234,000",
    price: "₦70,200",
    discount: "-70%",
  },
  {
    id: 3,
    name: "TRAINER SHOES",
    category: "Women Performance",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    oldPrice: "₦126,000",
    price: "₦37,800",
    discount: "-70%",
  },
  {
    id: 4,
    name: "REAL MADRID JERSEY",
    category: "Football",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    oldPrice: "₦112,000",
    price: "₦33,600",
    discount: "-70%",
  },
  {
    id: 5,
    name: "ULTRABOOST",
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    oldPrice: "₦190,000",
    price: "₦57,000",
    discount: "-70%",
  },
  {
    id: 6,
    name: "ADIZERO",
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    oldPrice: "₦180,000",
    price: "₦54,000",
    discount: "-70%",
  },
];

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 320;

const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -CARD_WIDTH,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({
    left: CARD_WIDTH,
    behavior: "smooth",
  });
};

  return (
    <section
  className="
    mx-auto
    max-w-screen-2xl

    px-4
    py-8

    sm:px-6
    md:px-8
    lg:px-10
    xl:px-12
    2xl:px-16
  "
>

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          BEST SELLERS
        </h2>

        <div className="hidden gap-2 md:flex">

          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={scrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

        </div>

      </div>

      {/* Products */}

      <div
        ref={scrollRef}
        className="
          flex
          gap-5
          overflow-x-auto
          scroll-smooth
          pb-2
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {products.map((product) => (
      <div
        key={product.id}
        className="
          w-[220px]
          shrink-0
          snap-start

          sm:w-[250px]
          md:w-[280px]
          lg:w-[300px]
        "
      >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

    </section>
  );
}