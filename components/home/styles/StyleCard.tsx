"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Style {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface StyleCardProps {
  style: Style;
}

export function StyleCard({
  style,
}: StyleCardProps) {
  return (
    <Link
      href={`/styles/${style.id}`}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={style.image}
          alt={style.name}
          fill
          sizes="(max-width:768px) 220px, (max-width:1200px) 320px, 400px"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="mt-5 space-y-3">

        <h3
          className="
            text-xl
            font-semibold
            tracking-tight
          "
        >
          {style.name}
        </h3>

        <p
          className="
            text-sm
            leading-6
            text-muted-foreground
          "
        >
          {style.description}
        </p>

        <span
          className="
            inline-flex
            items-center
            gap-2
            font-semibold
            underline
            underline-offset-4
            transition-all
            group-hover:gap-3
          "
        >
          Shop Now

          <ArrowRight className="h-4 w-4" />
        </span>

      </div>
    </Link>
  );
}