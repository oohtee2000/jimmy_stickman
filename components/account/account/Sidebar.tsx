"use client"

import { ChevronRight } from "lucide-react"

const menuItems = [
  {
    label: "Personal Information",
    id: "personal-information",
  },
  {
    label: "Address Book",
    id: "address-book",
  },
  {
    label: "Preferences",
    id: "preferences",
  },
]

interface AccountSidebarProps {
  active?: string
  onSelect?: (id: string) => void
}

export function AccountSidebar({
  active = "personal-information",
  onSelect,
}: AccountSidebarProps) {
  return (
    <aside className="w-full lg:max-w-[375px]">
      <h2 className="mb-8 text-2xl font-black uppercase tracking-tight">
        Account Overview
      </h2>

      <div className="overflow-hidden bg-white">
        {menuItems.map((item) => {
          const isActive = active === item.id

          return (
            <button
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={`
                flex w-full items-center justify-between
                px-6 py-7
                text-left
                transition-colors
                ${
                  isActive
                    ? "font-bold text-black"
                    : "font-normal text-neutral-800 hover:bg-neutral-50"
                }
              `}
            >
              <span className="text-lg">
                {item.label}
              </span>

              <ChevronRight
                className="h-6 w-6 shrink-0"
                strokeWidth={2}
              />
            </button>
          )
        })}
      </div>
    </aside>
  )
}