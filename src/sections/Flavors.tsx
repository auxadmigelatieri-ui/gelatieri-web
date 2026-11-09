import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EASE, Item, Reveal, Stagger } from '../components/motion';
import { FLAVORS, MAX_SAMPLES } from '../data/flavors';
import { whatsappUrl } from '../content';
import type { Flavor, SampleItem } from '../types';

function RevealImage({ src, alt }: { src: string; alt: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  return (
    <motion.div
      ref={ref}
      className="relative aspect-[4/5] overflow-hidden bg-cacao"
      initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
      animate={inView ? { clipPath: 'inset(0% 0% 0% 0%)' } : undefined}
      transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
    >
      <div className="h-full w-full transition-transform duration-[1600ms] ease-out-expo group-hover:scale-[1.06]">
        <motion.img src={src} alt={alt} loading="lazy" style={reduce ? undefined : { y, scale: 1.14 }} className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
}

interface FlavorsProps {
  kit: SampleItem[];
  onToggle: (flavor: Flavor) => void;
  onOpenKit: () => void;
}

export function Flavors({ kit, onToggle, onOpenKit }: FlavorsProps) {
  return (
    <section id="sabores" className="surface-light section-y bg-panna">
      <div className="container-x">
        <SectionHeading
          numeral="III"
          label="Sabores"
          title={['Los más', 'pedidos']}
          lead={`Elige hasta ${MAX_SAMPLES} y te enviamos un kit de muestras sin costo. Tenemos más de 35 sabores y desarrollamos recetas a la medida.`}
        />

        <Stagger className="mt-[clamp(64px,8vw,104px)] grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 xl:grid-cols-6" stagger={0.08}>
          {FLAVORS.map((f) => {
            const inKit = kit.some((s) => s.id === f.id);
            return (
              <Item key={f.id} lift className="card group flex flex-col p-2.5 sm:p-3">
                <RevealImage src={f.image} alt={`Textura del gelato de ${f.name.toLowerCase()}`} />
                <div className="flex items-start justify-between gap-2 px-1.5 pt-5">
                  <div>
                    <h3 className="t-h3 text-[clamp(1rem,0.9rem+0.4vw,1.25rem)]">{f.name}</h3>
                    <p className="t-quote mt-1 text-[15px] text-[var(--fg-soft)]">{f.italian}</p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-[var(--card-border)]"
                    style={{ background: f.dot }}
                  />
                </div>
                <button
                  type="button"
                  aria-pressed={inKit}
                  onClick={() => onToggle(f)}
                  className={`mt-5 flex min-h-[42px] items-center justify-center gap-2 border px-2 text-[10.5px] font-semibold tracking-[0.14em] uppercase transition-colors duration-500 ${
                    inKit
                      ? 'border-[var(--btn-bg)] bg-[var(--btn-bg)] text-[var(--btn-fg)]'
                      : 'border-[var(--card-border)] text-[var(--fg)] hover:border-miele'
                  }`}
                >
                  {inKit ? <Check aria-hidden className="h-3.5 w-3.5" /> : <Plus aria-hidden className="h-3.5 w-3.5" />}
                  {inKit ? 'En tu kit' : 'Agregar'}
                </button>
              </Item>
            );
          })}
        </Stagger>

        <Reveal className="mt-[clamp(56px,6vw,88px)]">
          <div className="card flex flex-col items-center justify-between gap-6 p-7 text-center md:flex-row md:p-8 md:text-left">
            <div>
              <p className="t-label">
                Tu kit · <span className="t-numeral text-[18px] tracking-normal">{kit.length}</span> de {MAX_SAMPLES} sabores
              </p>
              <p className="t-small mt-2">¿Buscas un sabor especial? Tenemos más de 35 y desarrollamos recetas exclusivas.</p>
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
              <a
                className="link-line t-subhead text-[12px]"
                href={whatsappUrl('Hola, me gustaría recibir el catálogo completo de sabores de Gelatieri.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Catálogo completo
                <ArrowRight aria-hidden />
              </a>
              <button type="button" className="btn btn-solid" onClick={onOpenKit}>
                Revisar y enviar mi kit
                <ArrowRight aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
