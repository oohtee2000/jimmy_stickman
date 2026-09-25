"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  {
    label: "FEED",
    href: "/feed",
  },
  {
    label: "ORDERS",
    href: "/orders",
  },
  {
    label: "ACCOUNT",
    href: "/account",
  },
]

export function AccountHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b border-neutral-300 bg-white">
      <div className="relative min-h-[230px] px-6 md:px-12">
        {/* Greeting */}
        <div className="absolute left-6 top-20 md:left-14 md:top-24">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            HI THERE!
          </h1>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Account navigation"
          className="
            absolute bottom-0 left-1/2
            flex -translate-x-1/2
            whitespace-nowrap
          "
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative
                  px-5 pb-4 pt-5
                  text-base
                  transition-colors
                  md:px-7
                  md:text-lg
                  ${
                    isActive
                      ? "font-bold text-black"
                      : "font-normal text-neutral-500 hover:text-black"
                  }
                `}
              >
                {item.label}

                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-black" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}