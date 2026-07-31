import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AuthForm() {
  return (
    <section className="max-w-xl">
      <div className="mb-8">
        <h2 className="text-5xl font-black uppercase">
          Join the Community
        </h2>

        <p className="mt-5 text-muted-foreground leading-8">
          Join the community for exclusive access to new releases,
          personalized offers, faster checkout and order tracking.
        </p>
      </div>

      <div className="space-y-6">
        <Input
          placeholder="EMAIL ADDRESS *"
          className="h-16 rounded-none"
        />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Button className="h-16 rounded-none px-10 font-bold uppercase">
            Continue →
          </Button>

          <button className="font-bold uppercase underline underline-offset-4">
            Log in instead
          </button>
        </div>

        <p className="text-sm text-muted-foreground">
          By clicking "Submit" you agree to our Terms & Conditions.
        </p>
      </div>
    </section>
  );
}