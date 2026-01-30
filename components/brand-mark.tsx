import { IconHomeSpark } from "@tabler/icons-react";
import Link from "next/link";

export function BrandMark() {
  return (
    <Link href="/" className="flex space-x-0.5 flex-1 sm:flex-none">
      <IconHomeSpark stroke={2} size={26} />
      <span className="text-xl font-bold">Hearthward</span>
    </Link>
  )
}
