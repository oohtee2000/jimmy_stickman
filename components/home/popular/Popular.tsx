"use client";

import { PopularItem } from "./PopularItem";
import { popularItems } from "./popular-data";

export function Popular() {
  return (
    <section
      className="
        mx-auto
        max-w-screen-2xl

        px-4
        py-16

        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
      "
    >
      <h2
        className="
          mb-12
          text-3xl
          font-black
          uppercase
          tracking-tight

          md:text-5xl
        "
      >
        Popular Right Now
      </h2>

      <div
        className="
          grid
          gap-x-16
          gap-y-10

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {popularItems.map((item) => (
          <PopularItem
            key={item}
            title={item}
          />
        ))}
      </div>
    </section>
  );
}