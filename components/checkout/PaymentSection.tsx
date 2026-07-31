"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PaymentSection() {
  return (
    <section>
      <h2 className="text-3xl font-black uppercase">
        Payment
      </h2>

      <div className="mt-6 rounded-none border p-8">

        <p className="text-sm text-muted-foreground">
          We accept
        </p>

        {/* Payment Methods */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-b pb-6">

          <Image
            src="/images/visa.png"
            alt="Visa"
            width={52}
            height={32}
          />

          <Image
            src="/images/mastercard.png"
            alt="Mastercard"
            width={52}
            height={32}
          />

          <Image
            src="/images/paypal.png"
            alt="PayPal"
            width={52}
            height={32}
          />

          <Image
            src="/images/amex.png"
            alt="American Express"
            width={52}
            height={32}
          />

          {/* Digital Wallets */}
          <Image
            src="/images/google-pay.png"
            alt="Google Pay"
            width={70}
            height={32}
          />

          <Image
            src="/images/apple-pay.png"
            alt="Apple Pay"
            width={70}
            height={32}
          />

          {/* African Payment Providers */}
          <Image
            src="/images/online-payment-.png"
            alt="Paystack"
            width={80}
            height={32}
          />

          <Image
            src="/images/full.svg"
            alt="Flutterwave"
            width={130}
            height={32}
            className="object-contain"
            />

        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Your payment is securely processed through{" "}
          <span className="font-semibold text-foreground">
            Paystack
          </span>{" "}
          or{" "}
          <span className="font-semibold text-foreground">
            Flutterwave
          </span>
          . We do not store your card details.
        </p>

      </div>

      <Button
        className="mt-8 h-14 w-full rounded-none font-bold uppercase"
      >
        Place Order
      </Button>
    </section>
  );
}