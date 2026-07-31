"use client";

import { Input } from "@/components/ui/input";

export default function AddressSection() {
  return (
    <section>

      <h2 className="text-3xl font-black uppercase">
        Delivery Address
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <Input
          className="h-14 rounded-none"
          placeholder="First Name"
        />

        <Input
          className="h-14 rounded-none"
          placeholder="Last Name"
        />

        <Input
          className="h-14 rounded-none md:col-span-2"
          placeholder="Street Address"
        />

        <Input
          className="h-14 rounded-none"
          placeholder="City"
        />

        <Input
          className="h-14 rounded-none"
          placeholder="State"
        />

        <Input
          className="h-14 rounded-none"
          placeholder="Postal Code"
        />

        <Input
          className="h-14 rounded-none"
          placeholder="Phone Number"
        />

      </div>

    </section>
  );
}