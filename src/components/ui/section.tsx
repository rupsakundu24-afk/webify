import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "gradient";
  id?: string;
}

export function Section({ children, className, variant = "default", id }: SectionProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-muted",
    gradient: "bg-gradient-subtle",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8",
        variants[variant],
        className
      )}
    >
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}