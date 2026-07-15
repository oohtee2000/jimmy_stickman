"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    id: 1,
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Kids",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Sports",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
  },
];

export function Categories() {
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
          Who are you Shopping for?
        </h2>

        

      </div>

      {/* Categories */}

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
        {categories.map((category) => (
      <div
        key={category.id}
        className="
          w-[220px]
          shrink-0
          snap-start

          sm:w-[250px]
          md:w-[280px]
          lg:w-[300px]
        "
      >
            <CategoryCard category={category} />
          </div>
        ))}
      </div>

    </section>
  );
}