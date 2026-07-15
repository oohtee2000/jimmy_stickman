"use client";

import Link from "next/link";

interface PopularItemProps {
  title: string;
}

export function PopularItem({
  title,
}: PopularItemProps) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(title)}`}
      className="
        group
        block
        border-b
        border-zinc-300
        py-8
        transition-colors
        hover:border-black
      "
    >
      <h3
        className="
          text-4xl
          font-black
          tracking-tight
          lowercase
          transition-transform
          duration-300
          group-hover:translate-x-1

          md:text-5xl
        "
      >
        {title}
      </h3>
    </Link>
  );
}