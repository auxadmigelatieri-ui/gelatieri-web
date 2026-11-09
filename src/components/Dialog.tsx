import { useEffect, useId, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { EASE, Frame } from './motion';
import { lockScroll } from '../lib/smoothScroll';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  label: string;
  title: string;
  children: ReactNode;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Dialog({ open, onClose, label, title, children }: DialogProps) {
  const id = useId();
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    lockScroll('dialog', true);
    const t = window.setTimeout(() => panel.current?.querySelector<HTMLElement>('input, select, textarea, button')?.focus(), 80);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !panel.current) return;
      const items = Array.from(panel.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      lockScroll('dialog', false);
      previous?.focus?.();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] overflow-y-auto"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div aria-hidden className="fixed inset-0 bg-cacao-deep/90" onClick={onClose} />
          <div className="relative flex min-h-full items-center justify-center p-3 sm:p-8">
            <motion.div
              ref={panel}
              role="dialog"
              aria-modal="true"
              aria-labelledby={id}
              className="surface-dark relative w-full max-w-[720px] bg-cacao"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <Frame play inset={10} delay={0.1} className="p-[clamp(28px,5vw,60px)]">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center text-panna-soft transition-colors hover:text-panna"
                  aria-label="Cerrar"
                >
                  <X aria-hidden className="h-5 w-5" />
                </button>
                <p className="t-label">{label}</p>
                <h2 id={id} className="t-h3 mt-4 max-w-[22ch] pr-10">
                  {title}
                </h2>
                <span aria-hidden className="mt-6 block h-px w-12 bg-[var(--line)]" />
                <div className="mt-8">{children}</div>
              </Frame>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
