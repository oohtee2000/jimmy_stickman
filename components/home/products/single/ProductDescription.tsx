"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export function ProductDescription() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-t">
      {/* Header */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="group flex w-full items-center justify-between py-7 transition-colors"
      >
        <span className="text-base font-semibold tracking-wide">
          Description
        </span>

        <ChevronUp
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "rotate-0" : "rotate-180"
          } group-hover:text-foreground`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid items-center gap-14 pb-14 pt-2 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div className="max-w-2xl">
            <h3 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-tight lg:text-3xl">
              Training-Specific Shoes,
              Made In Part With
              Recycled Materials.
            </h3>

            <div className="mt-8 max-w-lg space-y-6 text-[15px] leading-8 text-muted-foreground">
              <p>
                Whether you aspire to train like a pro or simply elevate your
                workout, these adidas training shoes help unlock your athletic
                potential. The breathable mesh upper and zoned TPU overlays
                provide lightweight support while keeping your foot secure.
              </p>

              <p>
                A sculpted midsole offers lasting comfort and flexibility,
                while the multidirectional outsole delivers reliable traction
                during every movement.
              </p>

              <p>
                Made with at least 20% recycled materials to help reduce waste,
                conserve valuable resources, and lower the environmental impact
                of production.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex aspect-square w-full max-w-[430px] items-center justify-center bg-muted/60 p-10">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                alt="Training Shoe"
                width={420}
                height={420}
                className="h-auto w-full max-w-[320px] object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}