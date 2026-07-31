"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OrderSummary() {
  return (
    <aside className="sticky top-24 h-fit">

      <Card className="rounded-none p-8 space-y-8">

        <h2 className="text-2xl font-black uppercase">
          Your Order
        </h2>

        <div className="flex gap-4">

          <div className="relative h-24 w-24">

            <Image
              fill
              className="object-cover"
              alt=""
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
            />

          </div>

          <div>

            <h3 className="font-bold">
              Amplimove Trainer Shoes
            </h3>

            <p className="text-sm text-muted-foreground">
              Size 42 • Pink
            </p>

            <p className="mt-2 font-bold">
              ₦37,800
            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <Input
            placeholder="Promo Code"
            className="rounded-none"
          />

          <Button
            variant="outline"
            className="rounded-none"
          >
            Apply
          </Button>

        </div>

        <div className="space-y-4">

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

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦64,000</span>
          </div>

        </div>

      </Card>

    </aside>
  );
}