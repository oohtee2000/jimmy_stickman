"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, SlidersHorizontal, ArrowLeft, Heart } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { ProductCard } from "@/components/products/ProductCard";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "WORLDWIDE HOOPS GRAPHIC T-SHIRT",
    category: "Men Performance",
    colors: "1 colour",
    price: "₦60,900",
    oldPrice: "₦87,000",
    discount: "-30%",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "NEUCLASSICS T-SHIRT",
    category: "Men Originals",
    colors: "1 colour",
    price: "₦39,000",
    oldPrice: "₦78,000",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "ADICOLOR CLASSICS 3-STRIPES T-SHIRT",
    category: "Men Originals",
    colors: "1 colour",
    price: "₦59,000",
    oldPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "TIRO 23 LEAGUE TRACKSUIT BOTTOMS",
    category: "Men Performance",
    colors: "1 colour",
    price: "₦107,000",
    oldPrice: null,
    discount: null,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ProductCollection() {
  return (
    <section
  className="
    mx-auto
    max-w-screen-2xl

    px-4
    py-8

    sm:px-6
    md:px-8
    lg:px-10
    xl:px-12
    2xl:px-16
  "
>
      <div className="mx-auto max-w-screen-2xl px-8 py-10">
       {/* Breadcrumb */}
<div className="flex items-center justify-between">
  <div className="flex items-center gap-4 text-sm">
    <Button
      variant="ghost"
      size="sm"
      className="px-0 uppercase font-bold"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>

    <div className="text-muted-foreground">
      <Link
        href="/"
        className="underline underline-offset-4 hover:text-foreground"
      >
        Home
      </Link>

      <span className="mx-2">/</span>

      <span className="text-foreground">
        Men Clothing
      </span>
    </div>
  </div>
</div>

{/* Category Header */}
<div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

  <div>
    <div className="flex items-end gap-3">
      <h1 className="text-2xl font-black uppercase italic tracking-tight lg:text-5xl">
        Men Clothing
      </h1>

      <span className="pb-2 text-lg text-muted-foreground">
        [890]
      </span>
    </div>
  </div>

  <Button
    variant="outline"
    size="lg"
    className="h-14 rounded-none border-2 border-black px-8 uppercase tracking-wide"
  >
    Filter & Sort

    <SlidersHorizontal className="ml-4 h-5 w-5" />
  </Button>

</div>

<div className="my-10 border-b" />




        
        

        {/* Products */}
        
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

        <div className="mt-24 border-t pt-10">
  <Pagination>
    <PaginationContent className="gap-2">

      <PaginationItem>
        <PaginationPrevious
          href="#"
          className="rounded-none"
        />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          href="#"
          isActive
          className="rounded-none"
        >
          1
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          href="#"
          className="rounded-none"
        >
          2
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          href="#"
          className="rounded-none"
        >
          3
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>

      <PaginationItem>
        <PaginationLink
          href="#"
          className="rounded-none"
        >
          15
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationNext
          href="#"
          className="rounded-none"
        />
      </PaginationItem>

    </PaginationContent>
  </Pagination>
</div>
      </div>
    </section>
  );
}