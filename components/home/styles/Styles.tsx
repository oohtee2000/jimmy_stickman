"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { StyleCard } from "./StyleCard";

const styles = [
  {
    id: 1,
    name: "Football",
    description: "Dominate every match with elite football gear.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Running",
    description: "Designed for speed, comfort and endurance.",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Lifestyle",
    description: "Everyday essentials inspired by street culture.",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Training",
    description: "Push your limits with premium training apparel.",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Originals",
    description: "Classic adidas icons that never go out of style.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
];

export function Styles() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    scrollRef.current?.scrollBy({
      left: direction * 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Shop by Style
        </h2>

        <div className="hidden gap-2 md:flex">
          <Button
            size="icon"
            variant="outline"
            className="rounded-full"
            onClick={() => scroll(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="rounded-full"
            onClick={() => scroll(1)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

      </div>

      <div
        ref={scrollRef}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          pb-2
          [&::-webkit-scrollbar]:hidden
          [scrollbar-width:none]
        "
      >
        {styles.map((style) => (
          <div
            key={style.id}
            className="
              w-[260px]
              shrink-0

              sm:w-[280px]
              md:w-[320px]
            "
          >
            <StyleCard style={style} />
          </div>
        ))}
      </div>
    </section>
  );
}