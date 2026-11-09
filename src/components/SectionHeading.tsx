import type { ReactNode } from 'react';
import { DrawRule, LineReveal, Reveal } from './motion';

export function SectionHeading({
  numeral,
  label,
  title,
  lead,
  className = '',
}: {
  numeral: string;
  label: string;
  title: readonly string[];
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`flex flex-col items-center text-center ${className}`}>
      <Reveal className="flex items-center gap-4" y={12}>
        <span className="t-numeral text-[22px] leading-none">{numeral}</span>
        <span aria-hidden className="h-px w-8 bg-[var(--line)]" />
        <span className="t-label">{label}</span>
      </Reveal>
      <LineReveal lines={title} className="t-display t-h2 mt-7" delay={0.08} />
      <DrawRule className="mt-9" delay={0.3} />
      {lead && (
        <Reveal delay={0.25} className="mt-9 max-w-[58ch]">
          <p className="t-body">{lead}</p>
        </Reveal>
      )}
    </header>
  );
}
