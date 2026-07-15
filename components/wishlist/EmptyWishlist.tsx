"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 rounded-full bg-muted p-5">
        <Heart className="h-10 w-10" />
      </div>

      <h2 className="text-2xl font-bold uppercase">
        Your Wishlist is Empty
      </h2>

      <p className="mt-4 max-w-lg text-muted-foreground">
        You haven't saved any items to your wishlist yet.
        Start shopping and add your favourite products.
      </p>

      <Button
        render={

        <Link href="/products">
          Continue Shopping
        </Link>
        }
        className="mt-8 rounded-none px-10 uppercase"
      >
       
      </Button>
    </div>
  );
}