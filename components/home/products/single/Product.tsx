'use client'
import { useState, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Heart, ArrowLeft, SlidersHorizontal } from "lucide-react";
import { CardImage } from "./CardImage";
import { ProductDetails } from "./ProductDetail";
import { ProductDescription } from "./ProductDescription";
import { ProductFeatures } from "./ProductFeatures";
import { ProductCarousel } from "./ProductCarousel";
import { Product } from "@/types/product";
import { ProductImages } from "./ProductImages";
import { ProductHeader } from "./ProductHeader";


//Block-scoped variable 'images' used before its declaration.ts(2448)


const products: Product[] = [
  {
    id: 1,
    name: "Adilette Comfort Slides",
    category: "Women Sportswear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    oldPrice: "₦96,000",
    price: "₦48,000",
    discount: "-50%",
    gender: "Women",
  },
  {
    id: 2,
    name: "Tensaur Run Shoes",
    category: "Kids Sportswear",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800",
    oldPrice: "₦78,000",
    price: "₦46,800",
    discount: "-40%",
    gender: "Kids",
  },
  {
    id: 3,
    name: "DailyRun 7/8 Leggings",
    category: "Women Running",
    image:
      "https://images.unsplash.com/photo-1506629905607-d405b7a30db9?w=800",
    oldPrice: "₦129,000",
    price: "₦77,400",
    discount: "-40%",
    gender: "Women",
  },
  {
    id: 4,
    name: "Classic Shorts",
    category: "Kids Swim",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    oldPrice: "₦51,000",
    price: "₦30,600",
    discount: "-40%",
    gender: "Kids",
  },
  {
    id: 5,
    name: "Own The Run Tee",
    category: "Men Running",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800",
    oldPrice: "₦45,000",
    price: "₦27,000",
    discount: "-40%",
    gender: "Men",
  },
];


const images = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
];
export default function SingleProduct(){

    const scrollRef = useRef<HTMLDivElement>(null);

    const [visibleImages, setVisibleImages] = useState(4);
const isExpanded = visibleImages >= images.length;
    
      const CARD_WIDTH = 320;

    const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -CARD_WIDTH,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({
    left: CARD_WIDTH,
    behavior: "smooth",
  });
};


    return(
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
    

<div className="my-10 border-b hidden lg:flex" />

{/* Product */}

{/* Desktop */}
<div className="hidden lg:flex gap-10">
  {/* Left */}
  <div className="basis-2/3 min-w-0">
        <div>

          <div className="absolute left-8 top-8 z-20">
                {/* Breadcrumb */}
<div className="relative z-20 -mb-12 px-8 pt-8">
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
          </div>

          <ProductImages images={images} />

        </div>
    
    <ProductDescription />
    <ProductFeatures />

    <ProductCarousel
      title="You May Also Like"
      products={products}
    />

    <ProductCarousel
      title="Others also bought"
      products={products}
    />

    <ProductCarousel
      title="Recently viewed"
      products={products}
    />
  </div>

  {/* Right */}
  {/* Right */}
<aside
  className="
    basis-1/3
    self-start
    sticky
    top-24
    h-fit
  "
>
  <ProductDetails />
</aside>
</div>


{/* Mobile */}
<div className="lg:hidden space-y-10">

  <div className="flex lg:hidden" >
          {/* Product Name */}
        <ProductHeader
    category="Women • Performance"
    title="AMPLIMOVE TRAINER SHOES"
    currentPrice="₦37,800"
    originalPrice="₦126,000"
  />
       </div>
        

  <ProductImages images={images} />

  <ProductDetails />

  <ProductDescription />

  <ProductFeatures />

  <ProductCarousel
    title="You May Also Like"
    products={products}
  />

  <ProductCarousel
    title="Others also bought"
    products={products}
  />

  <ProductCarousel
    title="Recently viewed"
    products={products}
  />
</div>

</section>

);

}