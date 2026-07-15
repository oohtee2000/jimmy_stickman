"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

const details = [
  "Regular fit",
  "Seamless mesh upper with welded overlays",
  "Zoned TPU support overlays in forefoot and midfoot",
  "Multidirectional rubber outsole",
  "Lace closure",
  "Textile lining",
  "Sculpted Vis-Tech EVA midsole",
  "Contains at least 20% recycled content",
];

export function ProductFeatures() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-t">
      {/* Header */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-7"
      >
        <span className="text-base font-semibold tracking-wide">
          Details
        </span>

        <ChevronUp
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "" : "rotate-180"
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid gap-x-20 gap-y-4 pb-10 sm:grid-cols-2">
          {details.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

              <p className="leading-8 text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}