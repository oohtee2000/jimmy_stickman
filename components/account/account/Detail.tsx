import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AccountDetails() {
  return (
    <section className="bg-white px-8 py-10 md:px-10 md:py-12">
      {/* Heading */}
      <div className="mb-20">
        <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
          My Details
        </h2>

        <p className="mt-4 text-lg">
          Feel free to edit any of your details below so your account is up to
          date.
        </p>
      </div>

      {/* Details */}
      <div>
        <h3 className="mb-8 text-4xl font-black uppercase tracking-tight">
          Details
        </h3>

        <div className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium uppercase"
            >
              Name
            </label>

            <Input
              id="name"
              defaultValue="Your Name"
              className="h-14 rounded-none border-neutral-400 text-base"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium uppercase"
            >
              Email
            </label>

            <Input
              id="email"
              type="email"
              defaultValue="you@example.com"
              className="h-14 rounded-none border-neutral-400 text-base"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium uppercase"
            >
              Phone
            </label>

            <Input
              id="phone"
              defaultValue="+234 000 000 0000"
              className="h-14 rounded-none border-neutral-400 text-base"
            />
          </div>

          <Button
            className="
              mt-4 h-14 rounded-none bg-black px-10
              text-sm font-bold uppercase
              hover:bg-neutral-800
            "
          >
            Save Changes
          </Button>
        </div>
      </div>
    </section>
  )
}