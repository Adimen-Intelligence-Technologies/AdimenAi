import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function Card({ title, description, icon: Icon, index }: CardProps) {
  return (
    <div className="rounded border border-white bg-white/10 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-600/10 text-violet-700">
          <span className="text-sm font-semibold">0{index + 1}</span>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-black/5 text-black/70">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
