"use client";

import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <Link
  href={`/category/${category.id}`}
  className="group block"
>
  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
    <Image
      src={category.image}
      alt={category.name}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  <h3 className="mt-4 text-center text-lg font-semibold group-hover:text-primary">
    {category.name}
  </h3>
</Link>
  );
}