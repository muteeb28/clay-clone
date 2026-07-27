import Image from "next/image";
import type { OrbitNode } from "@/types/abm";

interface OrbitDiagramProps {
  nodes: OrbitNode[];
  className?: string;
}

const OUTER_POSITIONS = [
  "col-start-1 row-start-1",
  "col-start-2 row-start-1",
  "col-start-3 row-start-1",
  "col-start-1 row-start-2",
  "col-start-3 row-start-2",
  "col-start-1 row-start-3",
  "col-start-2 row-start-3",
  "col-start-3 row-start-3",
];

function OrbitNodeItem({ node }: { node: OrbitNode }) {
  const Icon = node.icon;
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${node.iconBg}`}>
        <Icon className="size-6 text-black/70" />
      </div>
      <p className="text-xs font-medium text-white">
        {node.label}
        {node.sublabel && (
          <>
            <br />
            {node.sublabel}
          </>
        )}
      </p>
    </div>
  );
}

export function OrbitDiagram({ nodes, className }: OrbitDiagramProps) {
  if (nodes.length <= 2) {
    return (
      <div className={`relative overflow-hidden rounded-3xl bg-[rgb(66,157,255)] p-10 ${className ?? ""}`}>
        <div
          aria-hidden
          className="absolute inset-x-0 top-[30%] h-px border-t border-dashed border-white/40"
        />
        <div className="relative flex flex-col items-center gap-10">
          <div className="flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-2xl bg-white p-3 text-center shadow-md">
            <Image src="/images/clay.com/logo/clay-logo.avif" alt="" width={28} height={28} className="h-6 w-auto" unoptimized />
            <p className="text-xs font-semibold text-black">Target account</p>
          </div>
          <div className="flex w-full justify-between px-6">
            {nodes.map((node) => (
              <OrbitNodeItem key={node.label} node={node} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-[rgb(66,157,255)] p-8 sm:p-12 ${className ?? ""}`}>
      <div className="relative grid grid-cols-3 grid-rows-3 place-items-center gap-6">
        {nodes.slice(0, 4).map((node, i) => (
          <div key={node.label} className={OUTER_POSITIONS[i]}>
            <OrbitNodeItem node={node} />
          </div>
        ))}
        <div className="col-start-2 row-start-2 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-2xl bg-white p-3 text-center shadow-md">
          <Image src="/images/clay.com/logo/clay-logo.avif" alt="" width={28} height={28} className="h-6 w-auto" unoptimized />
          <p className="text-xs font-semibold text-black">Target account</p>
        </div>
        {nodes.slice(4, 8).map((node, i) => (
          <div key={node.label} className={OUTER_POSITIONS[i + 4]}>
            <OrbitNodeItem node={node} />
          </div>
        ))}
      </div>
    </div>
  );
}
