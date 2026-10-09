"use client"

import { MapPin, Plus, Pencil, Trash2, Check } from "lucide-react"

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "Yusuf Olororo",
    address: "12 Allen Avenue",
    city: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
    phone: "+234 803 366 2512",
    isDefault: true,
  },
  {
    id: 2,
    type: "Work",
    name: "Yusuf Olororo",
    address: "25 Marina Road",
    city: "Lagos Island",
    state: "Lagos",
    country: "Nigeria",
    phone: "+234 803 366 2512",
    isDefault: false,
  },
]

export function AddressBook() {
  return (
    <section className="bg-white px-8 py-10 md:px-10 md:py-12">
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            Account
          </p>

          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-5xl">
            Address Book
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-500">
            Manage your delivery addresses and choose where your orders
            should be delivered.
          </p>
        </div>

        <button
          type="button"
          className="
            flex h-12 shrink-0 items-center justify-center gap-2
            bg-black px-6 text-sm font-bold uppercase text-white
            transition hover:bg-neutral-800
          "
        >
          <Plus className="h-4 w-4" />
          Add Address
        </button>
      </div>

      {/* Address list */}
      <div className="mt-8 space-y-5">
        {addresses.map((address) => (
          <article
            key={address.id}
            className={`
              relative border p-6 transition
              ${
                address.isDefault
                  ? "border-black"
                  : "border-neutral-200 hover:border-neutral-400"
              }
            `}
          >
            {/* Default badge */}
            {address.isDefault && (
              <div className="absolute right-5 top-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                <Check className="h-3.5 w-3.5" />
                Default
              </div>
            )}

            <div className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-neutral-100">
                <MapPin className="h-5 w-5" strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 pr-20 sm:flex-row sm:items-center sm:gap-3">
                  <h3 className="text-lg font-black uppercase">
                    {address.type}
                  </h3>

                  {!address.isDefault && (
                    <span className="text-xs text-neutral-400">
                      Saved address
                    </span>
                  )}
                </div>

                <div className="mt-4 space-y-1 text-sm leading-6 text-neutral-600">
                  <p className="font-medium text-black">
                    {address.name}
                  </p>

                  <p>{address.address}</p>
                  <p>
                    {address.city}, {address.state}
                  </p>
                  <p>{address.country}</p>
                  <p>{address.phone}</p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-5 border-t border-neutral-100 pt-5">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-xs font-bold uppercase transition hover:text-neutral-500"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                    Edit
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-2 text-xs font-bold uppercase text-neutral-500 transition hover:text-black"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Remove
                  </button>

                  {!address.isDefault && (
                    <button
                      type="button"
                      className="text-xs font-bold uppercase underline underline-offset-4"
                    >
                      Make Default
                    </button>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty/additional state */}
      <div className="mt-8 border border-dashed border-neutral-300 px-6 py-8 text-center">
        <p className="text-sm text-neutral-500">
          You can save multiple addresses for faster checkout.
        </p>
      </div>
    </section>
  )
}