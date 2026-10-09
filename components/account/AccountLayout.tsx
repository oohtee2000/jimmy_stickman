"use client"

import { useState } from "react"
import { AccountHeader } from "./account/Header"
import { AccountPage } from "./account/AccountPage"
import { FeedPage } from "./feed/FeedPage"
import { OrdersPage } from "./orders/OrdersPage"

type MainTab = "feed" | "orders" | "account"

export function AccountLayout() {
  const [activeTab, setActiveTab] = useState<MainTab>("account")

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black">
      <AccountHeader
        activeTab={activeTab}


        //Type '{ activeTab: MainTab; onTabChange: Dispatch<SetStateAction<MainTab>>; }' is not assignable to type 'IntrinsicAttributes'.
//   Property 'activeTab' does not exist on type 'IntrinsicAttributes'.ts(2322)
        onTabChange={setActiveTab}
      />

      {activeTab === "feed" && <FeedPage />}

      {activeTab === "orders" && <OrdersPage />}

      {activeTab === "account" && <AccountPage />}
    </div>
  )
}