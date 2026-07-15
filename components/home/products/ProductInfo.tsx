"use client";

import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ProductInfo() {
  return (
    <aside
      className="
        hidden
        lg:block
        sticky
        top-0
        h-screen
        overflow-y-auto
        border-l
        bg-background
      "
    >
      <div className="space-y-10 px-10 py-8">

        {/* Category */}
        <p className="text-lg">
          Unisex • Performance
        </p>

        {/* Product Name */}
        <h1 className="text-5xl font-black uppercase leading-none">
          FIFA WORLD CUP 26™
          <br />
          TRIONDA MINI BALL
        </h1>

        {/* Price */}
        <p className="text-3xl font-bold">
          ₦27,000
        </p>

        {/* Colour */}
        <div className="space-y-5">

          <h3 className="text-2xl font-bold">
            1 Colour(s) available
          </h3>

          <div className="w-fit cursor-pointer border-2 border-black p-1">
            <div className="relative h-24 w-24 bg-muted">
              <Image
                fill
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=600&q=80"
                alt=""
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-xl">
            white/royblu/solblu/powred
          </p>

        </div>

        {/* Sizes */}
        <div className="space-y-5">

          <h3 className="text-2xl font-bold">
            Sizes (UK)
          </h3>

          <Button
            variant="outline"
            className="h-16 w-36 rounded-none text-lg"
          >
            1
          </Button>

        </div>

        {/* Buttons */}
        <div className="space-y-4">

          <div className="flex gap-4">

            <Button className="h-16 flex-1 rounded-none text-lg uppercase">
              Add to Bag

              <ArrowRight className="ml-auto h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-16 w-16 rounded-none"
            >
              <Heart />
            </Button>

          </div>

          <Button
            variant="outline"
            className="h-16 w-full rounded-none text-lg uppercase"
          >
            Find Alternatives

            <ArrowRight className="ml-auto h-5 w-5" />
          </Button>

        </div>

      </div>
    </aside>
  );
}