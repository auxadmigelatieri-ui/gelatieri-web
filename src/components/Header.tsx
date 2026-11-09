import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Logo } from './Logo';
import { EASE } from './motion';
import { CONTACT, NAV, ROMAN, whatsappUrl } from '../content';
import { lockScroll, scrollToId, scrollToTop } from '../lib/smoothScroll';

interface HeaderProps {
  kitCount: number;
  onOpenKit: () => void;
  onOpenQuote: () => void;
  logoVisible: boolean;
}

export function Header({ kitCount, onOpenKit, onOpenQuote, logoVisible }: HeaderProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const delta = y - last.current;
    last.current = y;
    setScrolled(y > 24);
    if (Math.abs(delta) < 4) return;
    setHidden(delta > 0 && y > 360);
  });

  useEffect(() => {
    lockScroll('menu', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => (e: ReactMouseEvent) => {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => scrollToId(id), open ? 380 : 0);
  };

  const left = NAV.slice(0, 3);
  const right = NAV.slice(3);
  const solid = scrolled || open;

  return (
    <>
      <motion.header
        className="surface-dark fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div
          className={`transition-[background-color,border-color] duration-700 ${
            solid ? 'border-b border-[var(--line-soft)] bg-cacao' : 'border-b border-transparent bg-transparent'
          }`}
        >
          <div
            className={`container-x grid grid-cols-[48px_1fr_48px] items-center transition-[height] duration-700 xl:grid-cols-[1fr_auto_1fr] ${
              scrolled ? 'h-[68px]' : 'h-[88px]'
            }`}
          >
            <nav aria-label="Principal" className="hidden items-center gap-9 text-[12px] tracking-[0.16em] whitespace-nowrap uppercase xl:flex">
              {left.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={go(item.id)} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={onOpenKit}
              className="relative flex h-10 w-10 items-center justify-center border border-[var(--hairline)] xl:hidden"
              aria-label={`Kit de muestras, ${kitCount} sabores`}
            >
              <span className="t-numeral text-[17px] text-panna">{kitCount}</span>
            </button>

            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                scrollToTop();
              }}
              className="justify-self-center"
              aria-label="Gelatieri, ir al inicio"
            >
              <Logo
                data-header-logo
                className={`block w-auto transition-[height] duration-700 ${scrolled ? 'h-[30px] xl:h-[34px]' : 'h-[32px] xl:h-[44px]'}`}
                style={{ opacity: logoVisible ? 1 : 0 }}
              />
            </a>

            <div className="hidden items-center justify-end gap-9 text-[12px] tracking-[0.16em] whitespace-nowrap uppercase xl:flex">
              {right.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={go(item.id)} className="nav-link">
                  {item.label}
                </a>
              ))}
              <button type="button" onClick={onOpenKit} className="nav-link uppercase" aria-label={`Kit de muestras, ${kitCount} sabores`}>
                Kit <span className="t-numeral ml-1 text-[15px] tracking-normal">{kitCount}</span>
              </button>
              <button type="button" onClick={onOpenQuote} className="btn btn-line min-h-[42px] px-5 text-[11px]">
                Cotizar
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] justify-self-end xl:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              <motion.span className="block h-px w-6 bg-panna" animate={open ? { y: 4, rotate: 45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.5, ease: EASE }} />
              <motion.span className="block h-px w-6 bg-panna" animate={open ? { y: -4, rotate: -45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.5, ease: EASE }} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            className="surface-dark fixed inset-0 z-40 flex flex-col bg-cacao pt-[100px] xl:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav aria-label="Menú" className="container-x flex flex-1 flex-col justify-center gap-2">
              {NAV.map((item, i) => (
                <div key={item.id} className="overflow-hidden">
                  <motion.a
                    href={`#${item.id}`}
                    onClick={go(item.id)}
                    className="flex items-baseline gap-5 py-3"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '110%' }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <span className="t-numeral w-8 text-[16px]">{ROMAN[i]}</span>
                    <span className="t-display text-[clamp(28px,8vw,44px)]">{item.label}</span>
                  </motion.a>
                </div>
              ))}
            </nav>
            <motion.div
              className="container-x grid gap-3 pb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
            >
              <button
                type="button"
                className="btn btn-solid w-full"
                onClick={() => {
                  setOpen(false);
                  onOpenQuote();
                }}
              >
                Solicitar cotización
              </button>
              <a className="btn btn-line w-full" href={whatsappUrl('Hola, me gustaría información sobre Gelatieri.')} target="_blank" rel="noopener noreferrer">
                WhatsApp {CONTACT.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
