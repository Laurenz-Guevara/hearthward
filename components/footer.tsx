import { Separator } from "@/components/ui/separator"
import { IconBrandGithub, IconTerminal2 } from "@tabler/icons-react"
import Link from "next/link"
import { BrandMark } from "./brand-mark"

export function Footer() {
  return (
    <footer className="container mx-auto mb-14 sm:mb-4">
      <div className="space-y-4 px-4">
        <Separator className="mb-0" />
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-20">
          <div className="flex flex-auto">
            <BrandMark />
          </div>
          <div className="flex flex-col space-y-2">
            <Link className="text-sm hover:text-blue-400 w-min text-nowrap" href="/household">
              Household
            </Link>
            <Link className="text-sm hover:text-blue-400 w-min text-nowrap" href="/pricing">
              Pricing
            </Link>
            <Link className="text-sm hover:text-blue-400 w-min text-nowrap" href="/account">
              Account
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link className="flex space-x-1 text-sm hover:text-blue-400 w-min" target="_blank" href="https://laurenzguevara.com">
              <IconTerminal2 /> <span>Portfolio</span>
            </Link>
            <Link className="flex space-x-1 text-sm hover:text-blue-400 w-min" target="_blank" href="https://github.com/Laurenz-Guevara/twisty-moto">
              <IconBrandGithub /> <span>Github</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-between py-2 sm:pt-6 text-sm text-muted-foreground">
          <p>Hearthward</p>
          <p>Built by&nbsp;<Link className="hover:text-blue-400" target="_blank" href="https://laurenzguevara.com">Laurenz Guevara</Link></p>
        </div>
      </div>
    </footer>
  )
}
