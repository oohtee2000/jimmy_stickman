"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavActionProps {
  href: string;
  icon: React.ReactNode;
}

export function NavAction({
  href,
  icon,
}: NavActionProps) {
  const pathname = usePathname();

  const active =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "flex h-11 w-11 font-extralight items-center justify-center transition-colors",
        active
          ? "text-black"
          : "text-zinc-600 hover:text-black"
      )}
    >
      {icon}
    </Link>
  );
}