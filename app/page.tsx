import { LogoutButton } from "@/components/logout-button";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <MaxWidthWrapper>
        <p>Home</p>
        <nav>
          <ul>
            <li>
              <Link
                href="/household"
                className="underline underline-offset-4"
              >
                Household
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="underline underline-offset-4"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="underline underline-offset-4"
              >
                Account
              </Link>
            </li>
          </ul>
        </nav>
        <LogoutButton />
        <Link
          href="/auth/sign-up"
          className="underline underline-offset-4"
        >
          Sign up
        </Link>
        <Link href="/auth/login" className="underline underline-offset-4">
          Login
        </Link>
      </MaxWidthWrapper>
    </section>
  );
}
