import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTABlock() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <p className="text-3xl tracking-tighter sm:text-5xl">Mauris ac aliquam purus. Sed.</p>
      <p className="max-w-[700px] text-muted-foreground md:text-xl">
        Sed tristique id ex et ultrices. Proin tristique imperdiet justo, vel dapibus lacus scelerisque.
      </p>
      <div className="space-x-4 pt-4">
        <Button className="hover:cursor-pointer" asChild>
          <Link
            prefetch={false}
            href={"/auth/sign-up"}
          >
            Create Free Account
          </Link>
        </Button>
      </div>
    </div>
  )
}

