import { cn } from "@/lib/utils";

interface FilterPillsProps {
  pills: readonly string[];
  active: string;
  onSelect: (pill: string) => void;
}

export function FilterPills({ pills, active, onSelect }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {pills.map((pill) => {
        const isActive = pill === active;
        return (
          <button
            key={pill}
            type="button"
            onClick={() => onSelect(pill)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full border border-[#DAD4C8] px-4 py-2 text-base font-normal transition-colors duration-150",
              isActive
                ? "bg-black text-white"
                : "bg-white text-[#222222] hover:bg-black/5",
            )}
          >
            {pill}
          </button>
        );
      })}
    </div>
  );
}

export default FilterPills;
