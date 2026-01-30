import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react"
import { Navigation } from "@/components/navigation";
import { BrandMark } from "@/components/brand-mark";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <nav className="container fixed bottom-0 mx-auto sm:sticky sm:top-0 w-full flex justify-between items-center px-4 h-14 sm:h-20 bg-background space-x-2">
      <BrandMark />
      <Navigation className="order-3 sm:order-2" />
      <div className="flex justify-between space-x-2 order-2 sm:order-3">
        <ThemeSwitcher />
        <Suspense>
          <AuthButton />
        </Suspense>
      </div>
    </nav>
  )
}

