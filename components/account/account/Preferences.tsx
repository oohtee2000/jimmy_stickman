"use client"

import { useState } from "react"
import {
  Bell,
  Mail,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
} from "lucide-react"

export function Preferences() {
  const [preferences, setPreferences] = useState({
    email: true,
    orders: true,
    promotions: false,
    sms: false,
  })

  const togglePreference = (
    key: keyof typeof preferences
  ) => {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }))
  }

  return (
    <section className="bg-white px-8 py-10 md:px-10 md:py-12">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
          Account
        </p>

        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight md:text-5xl">
          Preferences
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-500">
          Customize how you receive updates, notifications, and
          communication from us.
        </p>
      </div>

      {/* Notifications */}
      <PreferenceGroup
        icon={Bell}
        title="Notifications"
        description="Choose which notifications you want to receive."
      >
        <PreferenceToggle
          title="Email Notifications"
          description="Receive important account updates by email."
          enabled={preferences.email}
          onToggle={() => togglePreference("email")}
        />

        <PreferenceToggle
          title="Order Updates"
          description="Get notified when your order status changes."
          enabled={preferences.orders}
          onToggle={() => togglePreference("orders")}
        />

        <PreferenceToggle
          title="Promotional Updates"
          description="Receive new arrivals, offers, and special promotions."
          enabled={preferences.promotions}
          onToggle={() => togglePreference("promotions")}
        />

        <PreferenceToggle
          title="SMS Notifications"
          description="Receive selected updates through SMS."
          enabled={preferences.sms}
          onToggle={() => togglePreference("sms")}
        />
      </PreferenceGroup>

      {/* Communication */}
      <PreferenceGroup
        icon={MessageSquare}
        title="Communication"
        description="Manage how we communicate with you."
      >
        <button
          type="button"
          className="
            flex w-full items-center justify-between
            border border-neutral-200 p-5
            text-left transition hover:border-black
          "
        >
          <div>
            <p className="font-bold uppercase">
              Communication Preferences
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Manage your preferred communication channels.
            </p>
          </div>

          <ChevronRight className="h-5 w-5 shrink-0" />
        </button>
      </PreferenceGroup>

      {/* Privacy */}
      <PreferenceGroup
        icon={ShieldCheck}
        title="Privacy & Security"
        description="Control your account privacy and security settings."
      >
        <button
          type="button"
          className="
            flex w-full items-center justify-between
            border border-neutral-200 p-5
            text-left transition hover:border-black
          "
        >
          <div>
            <p className="font-bold uppercase">
              Privacy Settings
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Review your privacy and data preferences.
            </p>
          </div>

          <ChevronRight className="h-5 w-5 shrink-0" />
        </button>

        <button
          type="button"
          className="
            flex w-full items-center justify-between
            border border-neutral-200 p-5
            text-left transition hover:border-black
          "
        >
          <div>
            <p className="font-bold uppercase">
              Security
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Change your password and security options.
            </p>
          </div>

          <ChevronRight className="h-5 w-5 shrink-0" />
        </button>
      </PreferenceGroup>
    </section>
  )
}

/* -------------------------------------------------- */
/* Preference Group */
/* -------------------------------------------------- */

function PreferenceGroup({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ElementType
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-neutral-200 py-10 last:border-b-0">
      <div className="mb-6 flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-neutral-100">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div>
          <h3 className="text-xl font-black uppercase tracking-tight">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-neutral-500">
            {description}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

/* -------------------------------------------------- */
/* Toggle */
/* -------------------------------------------------- */

function PreferenceToggle({
  title,
  description,
  enabled,
  onToggle,
}: {
  title: string
  description: string
  enabled: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-between gap-6 border border-neutral-200 p-5">
      <div>
        <p className="font-bold uppercase">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-neutral-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`
          relative h-6 w-11 shrink-0 rounded-full transition
          ${enabled ? "bg-black" : "bg-neutral-300"}
        `}
      >
        <span
          className={`
            absolute top-1 h-4 w-4 rounded-full bg-white transition
            ${enabled ? "left-6" : "left-1"}
          `}
        />
      </button>
    </div>
  )
}