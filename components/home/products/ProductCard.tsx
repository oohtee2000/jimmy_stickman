"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  oldPrice: string;
  price: string;
  discount: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
    >
      {/* Image Container */}
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          bg-zinc-100
        "
      >
        {/* Wishlist */}
        <Button
          variant="ghost"
          size="icon"
          className="
            absolute
            right-3
            top-3
            z-20
            rounded-full
            bg-white/90
            shadow-sm
            hover:bg-white
          "
        >
          <Heart className="h-5 w-5" />
        </Button>

        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 220px,
                 (max-width:1024px) 280px,
                 300px"
          className="
            object-contain
            p-8
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Discount */}
        <Badge
          className="
            absolute
            bottom-3
            left-3
            rounded-none
            bg-white
            px-3
            py-1
            font-semibold
            text-black
            shadow-sm
          "
        >
          {product.discount}
        </Badge>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-2">

        {/* Prices */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground line-through">
            {product.oldPrice}
          </span>

          <span className="font-semibold text-red-600">
            {product.price}
          </span>
        </div>

        {/* Name */}
        <h3
          className="
            line-clamp-2
            text-base
            font-semibold
            uppercase
            tracking-wide
            transition-colors
            group-hover:text-primary
          "
        >
          {product.name}
        </h3>

        {/* Category */}
        <p className="text-sm text-muted-foreground">
          {product.category}
        </p>

      </div>
    </Link>
  );
}