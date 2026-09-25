import Image from "next/image";

export default function AuthHero() {
  return (
    <section className="space-y-8">
      <Image
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
        alt="Fitness community"
        width={700}
        height={450}
        className="w-full object-cover"
      />

      <div className="hidden space-y-4">
        <h1 className="text-3xl font-black uppercase leading-none">
          Welcome
          <br />
          Back!
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground">
          Sign in to access your account, track your orders, manage your
          profile and enjoy a faster checkout experience.
        </p>
      </div>
    </section>
  );
}