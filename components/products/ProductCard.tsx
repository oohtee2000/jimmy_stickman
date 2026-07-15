"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        {/* Wishlist */}
        <Button
          size="icon"
          variant="ghost"
          className="
            absolute
            right-2
            top-2
            z-20
            h-8
            w-8
            rounded-full
            bg-white/90
            shadow-sm
            hover:bg-white

            sm:right-3
            sm:top-3
            sm:h-9
            sm:w-9
          "
        >
          <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        {/* Discount */}
        {product.discount && (
          <div
            className="
              absolute
              bottom-2
              left-2
              z-20
              bg-white
              px-2
              py-1
              text-xs
              font-semibold

              sm:bottom-3
              sm:left-3
              sm:text-sm
            "
          >
            {product.discount}
          </div>
        )}

        <Image
          fill
          src={product.image}
          alt={product.name}
          sizes="(max-width:640px) 50vw,
                 (max-width:1024px) 33vw,
                 25vw"
          className="
            object-contain
            p-4
            transition-transform
            duration-300
            group-hover:scale-105

            sm:p-6
            lg:p-8
          "
        />
      </div>

      {/* Details */}
      <div className="pt-3 sm:pt-4 lg:pt-5">
        {/* Prices */}
        <div className="flex flex-wrap items-center gap-2">
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through sm:text-sm">
              {product.oldPrice}
            </span>
          )}

          <span
            className={
              product.oldPrice
                ? "text-sm font-semibold text-red-600 sm:text-base"
                : "text-sm font-semibold text-foreground sm:text-base"
            }
          >
            {product.price}
          </span>
        </div>

        {/* Name */}
        <h3
          className="
            mt-2
            line-clamp-2
            text-sm
            font-semibold
            uppercase
            leading-snug

            sm:mt-3
            sm:text-base
          "
        >
          {product.name}
        </h3>

        {/* Category */}
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {product.category}
        </p>

        {/* Colors */}
        {product.colors && (
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            {product.colors}
          </p>
        )}
      </div>
    </Link>
  );
}