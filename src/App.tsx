import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Intro } from './components/Intro';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { KitDialog } from './components/KitDialog';
import { QuoteDialog } from './components/QuoteDialog';
import { EASE } from './components/motion';
import { Story } from './sections/Story';
import { Services } from './sections/Services';
import { Flavors } from './sections/Flavors';
import { Clients } from './sections/Clients';
import { Quote } from './sections/Quote';
import { Faq } from './sections/Faq';
import { Contact } from './sections/Contact';
import { MAX_SAMPLES } from './data/flavors';
import { whatsappUrl } from './content';
import { initSmoothScroll, lockScroll } from './lib/smoothScroll';
import type { Flavor, SampleItem } from './types';

const INTRO_KEY = 'gelatieri-intro-seen';

function shouldPlayIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return sessionStorage.getItem(INTRO_KEY) !== '1';
  } catch {
    return true;
  }
}

export default function App() {
  const [intro, setIntro] = useState(shouldPlayIntro);
  const [heroPlay, setHeroPlay] = useState(!intro);
  const [kit, setKit] = useState<SampleItem[]>([
    { id: 'pistache', name: 'Pistache' },
    { id: 'vainilla', name: 'Vainilla' },
  ]);
  const [kitOpen, setKitOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const toastTimer = useRef(0);

  useEffect(() => initSmoothScroll(), []);

  useEffect(() => {
    if (!intro) return;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    lockScroll('intro', true);
    return () => lockScroll('intro', false);
  }, [intro]);

  const onIntroExit = useCallback(() => {
    setHeroPlay(true);
    lockScroll('intro', false);
  }, []);
  const onIntroDone = useCallback(() => {
    setIntro(false);
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* private mode: the intro simply plays again next visit */
    }
  }, []);

  const notify = (text: string) => {
    window.clearTimeout(toastTimer.current);
    setToast({ id: Date.now(), text });
    toastTimer.current = window.setTimeout(() => setToast(null), 3200);
  };

  const toggleFlavor = (f: Flavor) => {
    const inKit = kit.some((s) => s.id === f.id);
    if (inKit) {
      setKit(kit.filter((s) => s.id !== f.id));
      notify(`${f.name} salió de tu kit.`);
      return;
    }
    if (kit.length >= MAX_SAMPLES) {
      notify(`Tu kit ya tiene ${MAX_SAMPLES} sabores. Quita uno para cambiarlo.`);
      return;
    }
    setKit([...kit, { id: f.id, name: f.name }]);
    notify(`${f.name} está en tu kit · ${kit.length + 1} de ${MAX_SAMPLES}.`);
  };

  const { scrollY } = useScroll();
  const [showFloat, setShowFloat] = useState(false);
  useMotionValueEvent(scrollY, 'change', (y) => setShowFloat(y > window.innerHeight * 0.9));

  return (
    <>
      {intro && <Intro onExitStart={onIntroExit} onDone={onIntroDone} />}

      <Header
        kitCount={kit.length}
        onOpenKit={() => setKitOpen(true)}
        onOpenQuote={() => setQuoteOpen(true)}
        logoVisible={!intro}
      />

      <main>
        <Hero play={heroPlay} onOpenQuote={() => setQuoteOpen(true)} onOpenKit={() => setKitOpen(true)} />
        <Story />
        <Services onOpenQuote={() => setQuoteOpen(true)} onOpenKit={() => setKitOpen(true)} />
        <Flavors kit={kit} onToggle={toggleFlavor} onOpenKit={() => setKitOpen(true)} />
        <Clients />
        <Quote />
        <Faq />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showFloat && !kitOpen && !quoteOpen && (
          <motion.a
            href={whatsappUrl('Hola, me gustaría información sobre Gelatieri.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="surface-dark group fixed right-4 bottom-4 z-40 flex h-14 items-center overflow-hidden border border-[var(--line-soft)] bg-cacao sm:right-6 sm:bottom-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="grid h-14 w-14 place-items-center text-miele">
              <MessageCircle aria-hidden className="h-5 w-5" />
            </span>
            <span className="t-label max-w-0 overflow-hidden pr-0 whitespace-nowrap text-panna transition-[max-width,padding] duration-700 ease-out-expo group-hover:max-w-[160px] group-hover:pr-5">
              WhatsApp
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
        <AnimatePresence>
          {toast && (
            <motion.p
              key={toast.id}
              className="surface-dark border border-[var(--line-soft)] bg-cacao-deep px-5 py-3.5 text-[13px] text-panna"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {toast.text}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <KitDialog open={kitOpen} onClose={() => setKitOpen(false)} kit={kit} onToggle={toggleFlavor} />
      <QuoteDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
