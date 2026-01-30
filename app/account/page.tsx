import Link from "next/link";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

async function UserDetails() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return JSON.stringify(data.claims, null, 2);
}

export default function Account() {
  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <Link
          href="/"
          className="underline underline-offset-4"
        >
          Home
        </Link>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          <Suspense>
            <UserDetails />
          </Suspense>
        </pre>
      </MaxWidthWrapper>
    </section>
  );
}
