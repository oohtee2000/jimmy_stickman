"use client";

import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const cartItems = [
  {
    id: 1,
    name: "Amplimove Trainer Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    size: "42",
    color: "Pink",
    price: "₦37,800",
  },
  {
    id: 2,
    name: "Trefoil Bucket Hat",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800",
    size: "One Size",
    color: "White",
    price: "₦43,200",
  },
];

export default function Cart(){
    return(
            <section className="mx-auto max-w-7xl px-4 py-12">

                  {/* Page Header */}
  <div className="mb-10">
    <h1 className="text-3xl font-black uppercase tracking-tight">
      Your Cart Bag
    </h1>
    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
      Review the items in your bag before proceeding to checkout.
    </p>
  </div>

  <div className="grid gap-12 lg:grid-cols-[2fr_380px]"></div>

<div className="grid gap-12 lg:grid-cols-[2fr_380px]">

    {/* Products */}

    <div className="space-y-5">

        {cartItems.map((item) => (

            <Card
                key={item.id}
                className="rounded-none border p-5 shadow-none"
            >

                <div className="flex gap-5">

                    <div className="relative h-28 w-28 shrink-0">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">

                        <div>

                            <h3 className="font-bold uppercase">
                                {item.name}
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Size {item.size} • {item.color}
                            </p>

                            <p className="mt-3 text-lg font-bold">
                                {item.price}
                            </p>

                        </div>

                        {/* Bottom Controls */}

                        <div className="mt-5 flex items-center justify-between">

                            <div className="flex items-center border">

                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="rounded-none"
                                >
                                    <Minus className="h-4 w-4"/>
                                </Button>

                                <Input
                                    value="1"
                                    readOnly
                                    className="w-12 border-0 text-center shadow-none"
                                />

                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="rounded-none"
                                >
                                    <Plus className="h-4 w-4"/>
                                </Button>

                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-none text-muted-foreground hover:text-red-600"
                            >
                                <Trash2 className="h-5 w-5"/>
                            </Button>

                        </div>

                    </div>

                </div>

            </Card>

        ))}

    </div>

    {/* Summary */}

    <aside className="lg:sticky lg:top-24 h-fit">

        <Card className="rounded-none p-8">

            <h2 className="text-xl font-black uppercase">
                Order Summary
            </h2>

            <div className="mt-8 space-y-4 text-sm">

                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦81,000</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₦3,000</span>
                </div>

                <div className="flex justify-between">
                    <span>Discount</span>
                    <span>-₦20,000</span>
                </div>

                <div className="border-t pt-5 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₦64,000</span>
                </div>

            </div>

            <Button
                className="mt-8 h-12 w-full rounded-none uppercase font-bold"
            >
                Checkout
            </Button>

            <Button
                variant="outline"
                className="mt-3 h-12 w-full rounded-none uppercase"
            >
                Continue Shopping
            </Button>

        </Card>

    </aside>

</div>

</section>


    );
}

