import { cn } from "@/lib/utils";
import { TrendingUpIcon } from "@/components/icons";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex items-center justify-center rounded-lg bg-clay-hero-green text-white",
          compact ? "size-6" : "size-7"
        )}
      >
        <TrendingUpIcon
          className={compact ? "size-3.5" : "size-4"}
          strokeWidth={2.5}
        />
      </span>
      <span
        className={cn(
          "font-heading font-bold tracking-tight text-black",
          compact ? "text-lg" : "text-xl"
        )}
      >
        Job<span className="text-clay-hero-green">Flix</span>
      </span>
    </span>
  );
}
