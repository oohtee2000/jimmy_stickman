"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Shop",
    links: [
      "New Arrivals",
      "Men",
      "Women",
      "Kids",
      "Accessories",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "Contact Us",
      "Shipping",
      "Returns",
      "Track Order",
      "FAQs",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Our Story",
      "Careers",
      "Blog",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms & Conditions",
      "Cookie Policy",
    ],
  },
];
const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaGithub, href: "#" },
  { icon: FaDribbble, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        {/* CTA */}

        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-primary px-8 py-8 text-primary-foreground lg:flex-row">
        <div>
            <h2 className="text-2xl font-bold">
            Discover Your Next Favorite Style
            </h2>

            <p className="mt-2 text-sm text-primary-foreground/80">
            Shop premium fashion, footwear, and accessories at unbeatable prices.
            </p>
        </div>

        <Link href="/shop">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        </div>
        {/* Links */}

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold">{section.title}</h3>

              <ul className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Logo */}

            <Link
            href="/"
            className="text-3xl font-black tracking-tight"
            >
            Jimmystickman
            </Link>

            {/* Socials */}

            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="rounded-full border p-2 transition-colors hover:bg-muted"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Copyright */}

            <p className="text-center text-sm text-muted-foreground md:text-right">
            © {new Date().getFullYear()} Jimmystickman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}