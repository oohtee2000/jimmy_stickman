import Link from "next/link"

export function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black">
      <main className="px-6 py-24 md:px-12 lg:px-[60px] lg:py-[120px]">
        <section>
          <p className="text-lg md:text-xl">
            Looking for an order from a different account?
          </p>

          <Link
            href="/orders/track"
            className="
              mt-5
              inline-block
              text-base
              font-bold
              uppercase
              tracking-[0.18em]
              underline
              underline-offset-8
              transition-opacity
              hover:opacity-60
            "
          >
            Track the Order
          </Link>
        </section>
      </main>
    </div>
  )
}