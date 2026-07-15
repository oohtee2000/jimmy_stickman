"use client";

import Link from "next/link";
import { 
    Menu,
    User,
    Heart,
    ShoppingBag,
 } from "lucide-react";



import { Button } from "@/components/ui/button";
import { NavAction } from "./NavAction";
import { SearchBar } from "../search/SearchBar";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  {
    name: "MEN",
    href: "/men",
    megaMenu: true,
  },
  {
    name: "SALE",
    href: "/sale",
  },
  {
    name: "SPORT",
    href: "/sports",
    megaMenu: true,
  },
  {
    name: "KIDS",
    href: "/kids",
  },
  {
    name: "SHOES",
    href: "/shoes",
  },
  {
    name: "WOMEN",
    href: "/women",
    megaMenu: true,
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">

  {/* ================= MOBILE ================= */}
<div className="grid h-16 grid-cols-3 items-center md:hidden">

  {/* Left */}
  <div className="flex items-center gap-1">

    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
          />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent
  side="left"
  className="w-full max-w-sm p-0"
>
  {/* Logo */}
  <div className="border-b px-6 py-5">
    <Link
      href="/"
      className="text-2xl font-bold tracking-tight"
    >
      JS
    </Link>
  </div>

  {/* Navigation */}
  <nav className="flex flex-col p-4">
    {navLinks.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="
          rounded-lg
          px-4
          py-3
          text-base
          font-medium
          transition-colors
          hover:bg-muted
        "
      >
        {item.name}
      </Link>
    ))}
  </nav>
</SheetContent>
    </Sheet>

    <NavAction
      href="/wishlist"
      icon={<Heart className="h-6 w-6 ml-4" />}
    />

  </div>

  {/* Center */}
  <div className="flex justify-center">
    <Link
      href="/"
      className="text-2xl font-bold tracking-tight text-primary"
    >
      JS
    </Link>
  </div>

  {/* Right */}
  <div className="flex items-center justify-end gap-1">
    <SearchBar />

    <NavAction
      href="/account"
      icon={<User className="h-6 w-6" />}
    />

    <NavAction
      href="/cart"
      icon={<ShoppingBag className="h-6 w-6" />}
    />
  </div>

</div>

  {/* ================= DESKTOP ================= */}
  <div className="hidden h-16 items-center md:flex">

    {/* Left */}
    <div className="flex flex-1 items-center">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight text-primary"
      >
        JS
      </Link>
    </div>

    {/* Center Navigation */}
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.megaMenu ? (
              <>
                <NavigationMenuTrigger>
                  {item.name}
                </NavigationMenuTrigger>

                <NavigationMenuContent
                  className="
                    left-0
                    top-full
                    w-screen
                    rounded-none
                    border-t
                    bg-background
                    shadow-none
                  "
                >
                  <div className="mx-auto max-w-7xl px-8 py-10">
                    <div className="grid grid-cols-5 gap-16">

                      <div>
                        <h3 className="mb-5 text-sm font-bold uppercase">
                          Shoes
                        </h3>

                        <ul className="space-y-3">
                          <li><Link href="#">Running</Link></li>
                          <li><Link href="#">Lifestyle</Link></li>
                          <li><Link href="#">Football</Link></li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-5 text-sm font-bold uppercase">
                          Clothing
                        </h3>

                        <ul className="space-y-3">
                          <li><Link href="#">T-Shirts</Link></li>
                          <li><Link href="#">Shorts</Link></li>
                          <li><Link href="#">Jackets</Link></li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-5 text-sm font-bold uppercase">
                          Accessories
                        </h3>

                        <ul className="space-y-3">
                          <li><Link href="#">Bags</Link></li>
                          <li><Link href="#">Caps</Link></li>
                          <li><Link href="#">Socks</Link></li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-5 text-sm font-bold uppercase">
                          Sports
                        </h3>

                        <ul className="space-y-3">
                          <li><Link href="#">Football</Link></li>
                          <li><Link href="#">Running</Link></li>
                          <li><Link href="#">Basketball</Link></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                render={<Link href={item.href} />}
              >
                {item.name}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>

    {/* Right */}
    <div className="flex flex-1 justify-end items-center gap-2">
      <SearchBar />

      <NavAction
        href="/account"
        icon={<User className="h-6 w-6" />}
      />

      <NavAction
        href="/wishlist"
        icon={<Heart className="h-6 w-6" />}
      />

      <NavAction
        href="/cart"
        icon={<ShoppingBag className="h-6 w-6" />}
      />
    </div>

  </div>

</div>
    </header>
  );
}