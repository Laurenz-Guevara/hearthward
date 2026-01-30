import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-h-screen mx-auto py-5 px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

