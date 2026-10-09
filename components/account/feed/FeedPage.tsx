"use client"

import {
  ArrowUpRight,
  Heart,
  ShoppingBag,
  UserRound,
  Package,
  Sparkles,
} from "lucide-react"

const activities = [
  {
    icon: ShoppingBag,
    title: "Order confirmed",
    description: "Your order #ORD-10482 has been confirmed.",
    time: "2 hours ago",
  },
  {
    icon: Package,
    title: "Order shipped",
    description: "Your Classic Backpack is on its way.",
    time: "Yesterday",
  },
  {
    icon: Heart,
    title: "Saved item",
    description: "You saved AMPLIMOVE Trainer Shoes to your wishlist.",
    time: "2 days ago",
  },
]

const recommendations = [
  {
    name: "Classic Backpack",
    category: "Accessories",
    price: "₦52,000",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Sport Duffel Bag",
    category: "Sports",
    price: "₦71,000",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Trainer Shoes",
    category: "Shoes",
    price: "₦37,800",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
]

export function FeedPage() {
  return (
    <main className="px-6 py-12 md:px-12 lg:px-[60px] lg:py-20">
      <div className="mx-auto max-w-[1400px]">

        {/* Hero */}
        <section className="relative overflow-hidden bg-black px-8 py-12 text-white md:px-12 md:py-16">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
              <Sparkles className="h-4 w-4" />
              Your personal feed
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              Stay in
              <br />
              the loop.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-neutral-300 md:text-lg">
              Keep up with your orders, saved products, recommendations,
              and everything happening around your account.
            </p>
          </div>

          {/* Decorative shape */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-neutral-800 md:h-96 md:w-96" />
        </section>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Activity */}
          <section className="bg-white p-8 md:p-10">
            <div className="flex items-end justify-between border-b border-neutral-200 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                  Your activity
                </p>

                <h3 className="mt-2 text-3xl font-black uppercase tracking-tight">
                  Recent Activity
                </h3>
              </div>

              <button className="hidden text-sm font-bold uppercase hover:underline md:block">
                View all
              </button>
            </div>

            <div className="divide-y divide-neutral-200">
              {activities.map((activity) => {
                const Icon = activity.icon

                return (
                  <div
                    key={activity.title}
                    className="flex gap-5 py-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-neutral-100">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col justify-between gap-1 md:flex-row">
                        <h4 className="font-bold uppercase tracking-tight">
                          {activity.title}
                        </h4>

                        <span className="text-xs text-neutral-400">
                          {activity.time}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-neutral-500">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Account Summary */}
          <section className="bg-white p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Account
            </p>

            <h3 className="mt-2 text-3xl font-black uppercase tracking-tight">
              Your Space
            </h3>

            <div className="mt-8 space-y-3">
              <button className="group flex w-full items-center justify-between border border-neutral-200 p-5 text-left transition hover:border-black">
                <div className="flex items-center gap-4">
                  <UserRound className="h-5 w-5" strokeWidth={1.8} />

                  <div>
                    <p className="font-bold uppercase">
                      Personal Information
                    </p>

                    <p className="mt-1 text-sm text-neutral-500">
                      Manage your details
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button className="group flex w-full items-center justify-between border border-neutral-200 p-5 text-left transition hover:border-black">
                <div className="flex items-center gap-4">
                  <Heart className="h-5 w-5" strokeWidth={1.8} />

                  <div>
                    <p className="font-bold uppercase">
                      Wishlist
                    </p>

                    <p className="mt-1 text-sm text-neutral-500">
                      8 saved products
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button className="group flex w-full items-center justify-between border border-neutral-200 p-5 text-left transition hover:border-black">
                <div className="flex items-center gap-4">
                  <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />

                  <div>
                    <p className="font-bold uppercase">
                      Orders
                    </p>

                    <p className="mt-1 text-sm text-neutral-500">
                      3 active orders
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </section>
        </div>

        {/* Recommendations */}
        <section className="mt-10 bg-white p-8 md:p-10">
          <div className="flex items-end justify-between border-b border-neutral-200 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Curated for you
              </p>

              <h3 className="mt-2 text-3xl font-black uppercase tracking-tight md:text-4xl">
                You might like
              </h3>
            </div>

            <button className="hidden text-sm font-bold uppercase hover:underline md:block">
              Explore all
            </button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((product) => (
              <article key={product.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button
                    aria-label={`Save ${product.name}`}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-white transition hover:bg-black hover:text-white"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {product.category}
                  </p>

                  <div className="mt-1 flex items-start justify-between gap-4">
                    <h4 className="font-bold uppercase tracking-tight">
                      {product.name}
                    </h4>

                    <span className="shrink-0 text-sm font-bold">
                      {product.price}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}