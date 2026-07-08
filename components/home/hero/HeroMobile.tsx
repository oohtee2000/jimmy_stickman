"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import { heroSlides } from "@/app/constants/hero-slides";
// Cannot find module '@/constants/heroSlides' or its corresponding type declarations.ts(2307)
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroMobile() {

    return (

        <Carousel
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>

                {heroSlides.map((slide) => (

                    <CarouselItem key={slide.id}>

                        <section className="relative h-[85vh]">

                            <Image
                                src={slide.image}
                                fill
                                alt={slide.title}
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-black/20"/>

                            <div className="absolute bottom-20 left-8 right-8 text-white">

                                <h2 className="text-5xl font-black">
                                    {slide.title}
                                </h2>

                                <p className="mt-4 text-xl">
                                    {slide.description}
                                </p>

                                <Button
                                    className="mt-8 h-14 rounded-none bg-white px-8 text-black hover:bg-white"
                                >
                                    {slide.button}

                                    <ArrowRight className="ml-5"/>
                                </Button>

                            </div>

                        </section>

                    </CarouselItem>

                ))}

            </CarouselContent>

        </Carousel>

    );
}