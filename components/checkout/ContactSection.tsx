"use client";

import { Input } from "@/components/ui/input";

export default function ContactSection() {
  return (
    <section>

      <h2 className="text-3xl font-black uppercase">
        Contact
      </h2>

      <p className="mt-2 text-muted-foreground">
        We'll send your receipt and order updates here.
      </p>

      <Input
        className="mt-6 h-14 rounded-none"
        placeholder="Email Address"
      />

    </section>
  );
}