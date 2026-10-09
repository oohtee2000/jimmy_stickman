"use client"

import { Search, ChevronRight, Package, Truck, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const orders = [
  {
    id: "#ORD-10248",
    date: "September 24, 2026",
    status: "Delivered",
    statusColor: "success",
    items: 3,
    total: "₦156,800",
    products: [
      {
        name: "Nike Air Max 270",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
        quantity: 1,
      },
      {
        name: "Classic Backpack",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80",
        quantity: 1,
      },
      {
        name: "Sport Duffel Bag",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80",
        quantity: 1,
      },
    ],
  },
  {
    id: "#ORD-10231",
    date: "September 18, 2026",
    status: "Shipped",
    statusColor: "shipping",
    items: 2,
    total: "₦91,500",
    products: [
      {
        name: "AMPLIMOVE Trainer Shoes",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80",
        quantity: 1,
      },
      {
        name: "Football Bag",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80",
        quantity: 1,
      },
    ],
  },
  {
    id: "#ORD-10192",
    date: "September 10, 2026",
    status: "Processing",
    statusColor: "processing",
    items: 1,
    total: "₦52,000",
    products: [
      {
        name: "Classic Backpack",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80",
        quantity: 1,
      },
    ],
  },
]

const statusConfig = {
  Delivered: {
    icon: CheckCircle2,
    className: "bg-black text-white",
  },
  Shipped: {
    icon: Truck,
    className: "bg-neutral-100 text-black",
  },
  Processing: {
    icon: Package,
    className: "bg-neutral-100 text-neutral-700",
  },
}

export function OrdersPage() {
  return (
    <main className="px-6 py-16 md:px-12 lg:px-[60px] lg:py-[90px]">
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Your shopping activity
              </p>

              <h2 className="text-5xl font-black uppercase tracking-[-0.04em] md:text-6xl">
                My Orders
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-500">
                View your recent purchases, track deliveries, and manage your
                orders.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="font-semibold text-black">6</span>
              orders placed
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8 grid grid-cols-2 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 md:grid-cols-4">
          <OrderStat
            label="All Orders"
            value="6"
          />

          <OrderStat
            label="Processing"
            value="1"
          />

          <OrderStat
            label="Shipped"
            value="2"
          />

          <OrderStat
            label="Delivered"
            value="3"
          />
        </div>

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 border-b border-neutral-200 pb-6 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-[380px]">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />

            <Input
              placeholder="Search orders..."
              className="
                h-12 rounded-none border-neutral-300
                bg-white pl-12
                text-sm
                focus-visible:ring-0
              "
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-12 rounded-none border-neutral-300 bg-white px-6 text-xs font-bold uppercase tracking-wide"
            >
              All Orders
            </Button>

            <Button
              variant="outline"
              className="hidden h-12 rounded-none border-neutral-300 bg-white px-6 text-xs font-bold uppercase tracking-wide sm:flex"
            >
              Recent
            </Button>
          </div>
        </div>

        {/* Orders */}
        <div className="space-y-5">
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

/* ---------------------------------------------
   ORDER STAT
--------------------------------------------- */

function OrderStat({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="bg-white px-6 py-7 md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
        {label}
      </p>

      <p className="mt-3 text-3xl font-black tracking-tight">
        {value}
      </p>
    </div>
  )
}

/* ---------------------------------------------
   ORDER CARD
--------------------------------------------- */

function OrderCard({
  order,
}: {
  order: (typeof orders)[number]
}) {
  const status = statusConfig[
    order.status as keyof typeof statusConfig
  ]

  const StatusIcon = status.icon

  return (
    <article className="bg-white">
      {/* Top */}
      <div className="flex flex-col gap-5 border-b border-neutral-200 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-base font-bold">
              {order.id}
            </h3>

            <span
              className={`
                inline-flex items-center gap-1.5
                px-3 py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-wide
                ${status.className}
              `}
            >
              <StatusIcon className="h-3.5 w-3.5" />

              {order.status}
            </span>
          </div>

          <p className="mt-2 text-sm text-neutral-500">
            Placed on {order.date}
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-xs uppercase tracking-wider text-neutral-400">
            Order total
          </p>

          <p className="mt-1 text-lg font-bold">
            {order.total}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="px-6 py-7 md:px-8">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {order.products.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="group relative h-[120px] w-[120px] shrink-0 overflow-hidden bg-neutral-100"
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                  h-full w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {product.quantity > 1 && (
                <span className="absolute bottom-2 right-2 bg-black px-2 py-1 text-[10px] font-bold text-white">
                  ×{product.quantity}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col justify-between gap-5 border-t border-neutral-100 pt-5 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-500">
            {order.items} {order.items === 1 ? "item" : "items"}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              className="
                h-11 rounded-none
                border-neutral-300
                px-6
                text-xs
                font-bold
                uppercase
                tracking-wide
              "
            >
              View Order
            </Button>

            {order.status === "Delivered" && (
              <Button
                className="
                  h-11 rounded-none
                  bg-black
                  px-6
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  hover:bg-neutral-800
                "
              >
                Buy Again
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}