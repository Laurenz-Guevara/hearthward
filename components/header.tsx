import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react"
import { Navigation } from "@/components/navigation";
import { BrandMark } from "@/components/brand-mark";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <nav className="fixed bottom-0 sm:sticky bg-background sm:top-0 h-14 sm:h-20 w-full z-50">
      <div className="sm:container mx-auto w-full flex justify-between items-center h-full px-4 space-x-2">
        <BrandMark />
        <Navigation className="order-3 sm:order-2" />
        <div className="flex justify-between items-center space-x-2 order-2 sm:order-3">
          <ThemeSwitcher />
          <Suspense>
            <AuthButton />
          </Suspense>
        </div>
      </div>
    </nav>
  )
}

