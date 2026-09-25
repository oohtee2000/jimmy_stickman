import AuthHero from "@/components/auth/signin/AuthHero";
import AuthForm from "@/components/auth/signin/AuthForm";

export default function SignupPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="grid min-h-[80vh] gap-16 lg:grid-cols-2 lg:items-center">
        <AuthHero />
        <AuthForm />
      </div>
    </main>
  );
}
