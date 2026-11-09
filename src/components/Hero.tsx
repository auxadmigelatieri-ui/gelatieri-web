import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Award, Truck } from 'lucide-react';
import { DrawRule, EASE, Frame, LineReveal, Reveal } from './motion';
import { FactoryVideo } from './FactoryVideo';
import { HERO } from '../content';

interface HeroProps {
  play: boolean;
  onOpenQuote: () => void;
  onOpenKit: () => void;
}

const CARD_ICONS = [Award, Truck];

export function Hero({ play, onOpenQuote, onOpenKit }: HeroProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="surface-dark relative flex min-h-[100svh] items-center overflow-hidden bg-cacao">
      <Frame
        play={play}
        delay={0.15}
        className="pointer-events-none absolute inset-x-[clamp(12px,2.4vw,32px)] bottom-[clamp(12px,2.4vw,32px)] top-[92px]"
      />

      <div className="container-x relative z-10 grid items-center gap-16 pt-[140px] pb-[96px] lg:grid-cols-12 lg:gap-10 lg:pb-[110px]">
        <motion.div style={reduce ? undefined : { y: textY, opacity: fade }} className="lg:col-span-7 lg:pr-6">
          <LineReveal
            as="h1"
            play={play}
            delay={0.12}
            lines={['La fábrica', 'del helado']}
            className="t-display text-[clamp(2.6rem,0.9rem+4.2vw,5rem)]"
          />
          <Reveal play={play} delay={0.42} y={16}>
            <p className="t-quote mt-5 text-[clamp(1.35rem,1rem+1.2vw,2rem)] text-miele">{HERO.tagline}</p>
          </Reveal>
          <DrawRule play={play} delay={0.5} className="mt-8 origin-left" />
          <Reveal play={play} delay={0.55} className="mt-8 max-w-[52ch]">
            <p className="t-body">{HERO.text}</p>
          </Reveal>

          <motion.ul
            className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3.5 sm:grid-cols-3"
            initial={reduce ? false : 'hidden'}
            animate={play ? 'shown' : 'hidden'}
            variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.06, delayChildren: 0.65 } } }}
          >
            {HERO.benefits.map((b) => (
              <motion.li
                key={b}
                className="flex items-center gap-3 text-[14px] text-panna"
                variants={{ hidden: { opacity: 0, y: 12 }, shown: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } }}
              >
                <span aria-hidden className="h-[5px] w-[5px] shrink-0 rotate-45 bg-miele" />
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <Reveal play={play} delay={0.9} className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button type="button" className="btn btn-solid" onClick={onOpenQuote}>
              Solicitar cotización
              <ArrowRight aria-hidden />
            </button>
            <button type="button" className="btn btn-line" onClick={onOpenKit}>
              Pedir muestras sin costo
            </button>
          </Reveal>
          <Reveal play={play} delay={1.05} className="mt-7">
            <p className="flex items-center gap-3 text-[13px] text-panna-soft">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-miele" />
              {HERO.note}
            </p>
          </Reveal>
        </motion.div>

        <motion.div style={reduce ? undefined : { y: mediaY }} className="relative lg:col-span-5">
          <Reveal play={play} delay={0.3} y={40} className="mx-auto max-w-[460px] lg:max-w-none">
            <Frame play={play} delay={0.5} inset={10} className="p-[20px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-cacao-deep">
                <FactoryVideo />
              </div>
            </Frame>
          </Reveal>

          <div className="mx-auto mt-5 grid max-w-[460px] grid-cols-2 gap-3 lg:contents">
            {HERO.cards.map((c, i) => {
              const Icon = CARD_ICONS[i];
              return (
                <Reveal
                  key={c.title}
                  play={play}
                  delay={1 + i * 0.15}
                  y={24}
                  className={`lg:absolute lg:z-10 lg:w-[232px] ${i === 0 ? 'lg:-left-10 lg:top-10' : 'lg:-right-8 lg:-bottom-8'}`}
                >
                  <div className={`surface-light card-featured card p-5 ${reduce ? '' : i === 0 ? 'float-lg' : 'float-lg-alt'}`}>
                    <p className="t-label flex items-center gap-2 text-[10px]">
                      <Icon aria-hidden className="h-3.5 w-3.5" strokeWidth={1.5} />
                      {c.label}
                    </p>
                    <p className="mt-3 font-display text-[clamp(1.3rem,1.1rem+0.6vw,1.65rem)] leading-tight font-semibold tracking-[0.06em] uppercase">
                      {c.title}
                    </p>
                    <p className="mt-1.5 text-[12.5px] leading-snug text-[var(--fg-soft)]">{c.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
