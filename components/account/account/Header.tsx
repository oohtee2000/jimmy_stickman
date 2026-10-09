"use client"

const navigation = [
  {
    label: "FEED",
    id: "feed",
  },
  {
    label: "ORDERS",
    id: "orders",
  },
  {
    label: "ACCOUNT",
    id: "account",
  },
] as const

type MainTab = (typeof navigation)[number]["id"]

interface AccountHeaderProps {
  activeTab: MainTab
  onTabChange: (tab: MainTab) => void
}

export function AccountHeader({
  activeTab,
  onTabChange,
}: AccountHeaderProps) {
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
            const isActive = activeTab === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
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
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}