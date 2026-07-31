"use client";

import ContactSection from "./ContactSection";
import AddressSection from "./AddressSection";
import ShippingSection from "./ShippingSection";
import PaymentSection from "./PaymentSection";
import OrderSummary from "./OrderSection";

export default function CheckoutForm() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      <div className="text-center mb-14">

        <h1 className="text-5xl font-black uppercase tracking-[0.25em]">
          Checkout
        </h1>

        <p className="mt-3 text-muted-foreground">
          Secure Checkout
        </p>

      </div>

      <div className="grid gap-14 lg:grid-cols-[2fr_420px]">

        <div className="space-y-12">

          <ContactSection />

          <AddressSection />

          <ShippingSection />

          <PaymentSection />

        </div>

        <OrderSummary />

      </div>

    </section>
  );
}