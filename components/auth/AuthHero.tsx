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

      <div className="space-y-4 hidden md:hidden">
        <h1 className="text-3xl font-black uppercase leading-none">
          Join Our
          
          Community
          
          Today!
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground">
          Sign up for our newsletter to get the latest updates on new
          arrivals, exclusive offers and insider news. Be the first to
          know.
        </p>
      </div>
    </section>
  );
}