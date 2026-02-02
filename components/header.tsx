import { Suspense } from "react"
import { AuthButton } from "@/components/auth-button";
import { Navigation } from "@/components/navigation";
import { Logo } from "@/components/logo";
import { ThemeSwitcher } from "./theme-switcher";

export function Header({
  authButton = <AuthButton />
}: {
  authButton?: React.ReactNode
}) {
  return (
    <nav className="fixed bottom-0 sm:sticky bg-background sm:top-0 h-14 sm:h-20 w-full z-50">
      <div className="sm:container mx-auto w-full flex justify-between items-center h-full px-4 space-x-2">
        <Logo />
        <Navigation className="order-3 sm:order-2" />
        <div className="flex justify-between items-center space-x-2 order-2 sm:order-3">
          <ThemeSwitcher />
          <Suspense>
            {authButton}
          </Suspense>
        </div>
      </div>
    </nav>
  )
}

