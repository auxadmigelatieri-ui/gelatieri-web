import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { Reveal } from './motion';
import { CONTACT, NAV } from '../content';
import { scrollToId, scrollToTop } from '../lib/smoothScroll';

export function Footer() {
  return (
    <footer className="surface-dark border-t border-[var(--line-soft)] bg-cacao">
      <div className="container-x flex flex-col items-center pt-[clamp(88px,9vw,140px)] pb-10 text-center">
        <Reveal>
          <Logo className="h-auto w-[min(440px,78vw)]" />
        </Reveal>
        <Reveal delay={0.15} className="mt-16 w-full border-y border-[var(--hairline)] py-8">
          <nav aria-label="Pie de página" className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[12px] tracking-[0.16em] uppercase">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(n.id);
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-10 grid gap-2 text-[14px] text-panna-soft">
          <p>{CONTACT.addressLines.join(' · ')}</p>
          <p>
            <a className="nav-link" href={`mailto:${CONTACT.emails[0]}`}>
              {CONTACT.emails[0]}
            </a>
            <span aria-hidden className="mx-3 text-miele">·</span>
            <span className="tabular">{CONTACT.phoneDisplay}</span>
          </p>
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-between gap-6 text-[12px] text-panna-soft sm:flex-row">
          <p>© {new Date().getFullYear()} Gelatieri. Hecho en la Ciudad de México.</p>
          <button type="button" onClick={scrollToTop} className="link-line t-label text-[11px] text-panna-soft">
            Volver arriba
            <ArrowUp aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
