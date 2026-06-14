import { type ReactNode, type ElementType } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
