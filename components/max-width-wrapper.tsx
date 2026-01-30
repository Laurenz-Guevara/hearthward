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
        "container mx-auto px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

