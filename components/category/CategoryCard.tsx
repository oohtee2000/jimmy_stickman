"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Category } from "@/types/category";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group block"
    >
      {/* Category Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <Image
          fill
          src={category.image}
          alt={category.name}
          sizes="(max-width:640px) 50vw,
                 (max-width:1024px) 33vw,
                 25vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* View Category */}
        <div
          className="
            absolute
            bottom-3
            right-3
            z-10
            opacity-100
            transition-opacity
            duration-300

            sm:bottom-4
            sm:right-4

            lg:opacity-0
            lg:group-hover:opacity-100
          "
        >
          <Button
            size="icon"
            className="
              h-9
              w-9
              rounded-full
              bg-white
              text-black
              shadow-sm
              hover:bg-white/90
            "
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="pt-3 sm:pt-4 lg:pt-5">
        <div className="flex items-center justify-between gap-3">
          <h3
            className="
              line-clamp-2
              text-sm
              font-semibold
              uppercase
              leading-snug

              sm:text-base
            "
          >
            {category.name}
          </h3>

          <span className="shrink-0 text-xs text-muted-foreground sm:text-sm">
            {category.productCount}
          </span>
        </div>

        {category.description && (
          <p
            className="
              mt-1
              line-clamp-2
              text-xs
              text-muted-foreground

              sm:text-sm
            "
          >
            {category.description}
          </p>
        )}
      </div>
    </Link>
  );
}