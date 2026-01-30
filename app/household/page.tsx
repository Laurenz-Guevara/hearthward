import Link from "next/link";

export default function Household() {
  return (
    <main className="min-h-screen">
      <Link
        href="/"
        className="underline underline-offset-4"
      >
        Home
      </Link>
      <p>Household</p>
    </main>
  )
}
