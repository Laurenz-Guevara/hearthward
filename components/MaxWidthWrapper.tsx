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
        "min-h-screen py-5 px-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

