"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AuthForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <section className="max-w-xl">
      <div className="mb-8">
        <h2 className="text-5xl font-black uppercase">
          Welcome Back
        </h2>

        <p className="mt-5 leading-8 text-muted-foreground">
          Sign in to your account to access your orders,
          personalized offers, faster checkout and more.
        </p>
      </div>

      <form onSubmit={handleSignIn} className="space-y-6">
        <Input
          type="email"
          placeholder="EMAIL ADDRESS *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-16 rounded-none"
          required
          disabled={loading}
        />

        <Input
          type="password"
          placeholder="PASSWORD *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-16 rounded-none"
          required
          disabled={loading}
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm font-bold uppercase underline underline-offset-4"
          >
            Forgot password?
          </Link>
        </div>

        {error && (
          <div className="border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Button
            type="submit"
            disabled={loading}
            className="h-16 rounded-none px-10 font-bold uppercase"
          >
            {loading ? "Signing In..." : "Sign In →"}
          </Button>

          <Link
            href="/register"
            className="font-bold uppercase underline underline-offset-4"
          >
            Create an account
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          By signing in, you agree to our Terms & Conditions and
          Privacy Policy.
        </p>
      </form>
    </section>
  );
}