import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroDesktop() {
    return (
        <section className="relative h-[90vh]  overflow-hidden">
            <div className="grid grid-cols-3 h-full">

           
            <div className="relative">

                <Image
  src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1200&q=80"
  fill
  alt="Football athlete"
  className="object-cover"
/>

                

                
            </div>

            <div className="relative">
               <Image
  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
  fill
  alt="Soccer boot"
  className="object-cover"
/>
            </div>

            <div className="relative">
              <Image
  src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80"
  fill
  alt="Football player"
  className="object-cover"
/>
            </div>

             </div>

               <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/45
      via-black/10
      to-transparent
    "
  />

            <div className="absolute inset-0">

            <div
                className="
                absolute
                left-14
                top-1/2
                -translate-y-1/2
                max-w-md
                "
            >
                <h1
  className="
    text-7xl
    font-black
    tracking-tight
    text-white
  "
>
  F50
</h1>

<p
  className="
    mt-6
    max-w-md
    text-2xl
    leading-relaxed
    text-white
  "
>
  Experience precision and control with F50 soccer cleats from adidas.
</p>

<Button
  className="
    mt-10
    h-16
    rounded-none
    bg-white
    px-10
    text-base
    font-bold
    tracking-widest
    text-black
    hover:bg-white
  "
>
  SHOP NOW

  <ArrowRight className="ml-6 h-5 w-5" />
</Button>

            </div>

            </div>

        </section>
    );
}