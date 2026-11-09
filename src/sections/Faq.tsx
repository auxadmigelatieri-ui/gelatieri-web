import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { EASE, Reveal } from '../components/motion';
import { FAQS } from '../content';

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <li className={`card ${open ? 'border-[var(--line-soft)]' : ''}`}>
      <h3>
        <button
          type="button"
          id={`${id}-q`}
          aria-expanded={open}
          aria-controls={`${id}-a`}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-8 px-6 py-6 text-left sm:px-8 sm:py-7"
        >
          <span className="font-display text-[clamp(1.3rem,1.05rem+0.8vw,1.75rem)] leading-snug font-medium transition-colors duration-500 group-hover:text-panna">
            {q}
          </span>
          <span aria-hidden className="relative block h-4 w-4 shrink-0">
            <span className="absolute top-1/2 left-0 h-px w-full bg-miele" />
            <motion.span
              className="absolute top-0 left-1/2 h-full w-px bg-miele"
              animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-a`}
            role="region"
            aria-labelledby={`${id}-q`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="t-body max-w-[64ch] px-6 pb-8 sm:px-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="preguntas" className="surface-dark section-y bg-cacao">
      <div className="container-x">
        <SectionHeading numeral="VI" label="Preguntas" title={['Preguntas', 'frecuentes']} />
        <Reveal className="mx-auto mt-[clamp(56px,7vw,96px)] max-w-[880px]" y={32}>
          <ul className="grid gap-3">
            {FAQS.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
