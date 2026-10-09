"use client"

import { useState } from "react"

import { AccountSidebar } from "./Sidebar"
import { AccountDetails } from "./Detail"
import { AddressBook } from "./AddressBook"
import { Preferences } from "./Preferences"

export function AccountPage() {
  const [activeSection, setActiveSection] = useState(
    "personal-information"
  )

  return (
    <main className="px-6 py-20 md:px-12 lg:px-15 lg:py-30">
      <div className="grid gap-12 lg:grid-cols-[375px_minmax(0,1fr)] lg:gap-17">
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
            <AddressBook />
          )}

          {activeSection === "preferences" && (
            <Preferences />
          )}
        </div>
      </div>
    </main>
  )
}