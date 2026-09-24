export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">{title}</h2>
    </div>
  );
}
