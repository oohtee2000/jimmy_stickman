"use client";

import { ProductCard } from "@/components/products/ProductCard";
import { EmptyWishlist } from "./EmptyWishlist";

import type { Product } from "@/types/product";

interface WishlistProps {
  products: Product[];
}

export function Wishlist({
  products,
}: WishlistProps) {
  const hasProducts = products.length > 0;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-4xl font-black uppercase tracking-tight">
          My Wishlist
        </h1>

        <p className="mt-3 text-lg">
          {products.length} ITEM{products.length !== 1 && "S"}
        </p>
      </div>

      {!hasProducts ? (
        <EmptyWishlist />
      ) : (
        <div
  className="
    grid
    grid-cols-2
    gap-4

    sm:grid-cols-2
    sm:gap-6

    lg:grid-cols-3

    xl:grid-cols-4
  "
>
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
      )}
    </section>
  );
}