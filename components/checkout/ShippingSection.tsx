"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ShippingSection() {
  return (
    <section>

      <h2 className="text-3xl font-black uppercase mb-6">
        Shipping
      </h2>

      <RadioGroup defaultValue="standard">

        <div className="border p-5 flex justify-between">

          <div className="flex gap-4">

            <RadioGroupItem value="standard" id="standard"/>

            <Label htmlFor="standard">
              Standard Delivery
            </Label>

          </div>

          <span>₦3,000</span>

        </div>

        <div className="border p-5 flex justify-between">

          <div className="flex gap-4">

            <RadioGroupItem value="express" id="express"/>

            <Label htmlFor="express">
              Express Delivery
            </Label>

          </div>

          <span>₦6,500</span>

        </div>

      </RadioGroup>

    </section>
  );
}