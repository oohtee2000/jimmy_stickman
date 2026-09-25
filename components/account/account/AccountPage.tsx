"use client"

import { useState } from "react"

import { AccountHeader } from "./Header"
import { AccountSidebar } from "./Sidebar"
import { AccountDetails } from "./Detail"

export function AccountPage() {
  const [activeSection, setActiveSection] = useState(
    "personal-information"
  )

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black">
      <AccountHeader active="ACCOUNT" />

      <main className="px-6 py-20 md:px-12 lg:px-[60px] lg:py-[120px]">
        <div className="grid gap-12 lg:grid-cols-[375px_minmax(0,1fr)] lg:gap-[68px]">
          {/* Sidebar */}
          <AccountSidebar
            active={activeSection}
            onSelect={setActiveSection}
          />

          {/* Content */}
          <div className="min-w-0">
            {activeSection === "personal-information" && (
              <AccountDetails />
            )}

            {activeSection === "address-book" && (
              <AccountSection title="Address Book">
                <p className="text-lg text-neutral-600">
                  Manage your saved addresses.
                </p>
              </AccountSection>
            )}

            {activeSection === "preferences" && (
              <AccountSection title="Preferences">
                <p className="text-lg text-neutral-600">
                  Manage your account preferences.
                </p>
              </AccountSection>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function AccountSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="bg-white px-8 py-10 md:px-10 md:py-12">
      <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
        {title}
      </h2>

      <div className="mt-8">
        {children}
      </div>
    </section>
  )
}