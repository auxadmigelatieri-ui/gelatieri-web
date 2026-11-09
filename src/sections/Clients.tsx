import { useReducedMotion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { Counter, Item, Reveal, Stagger } from '../components/motion';
import { STORY, TESTIMONIALS } from '../content';

type Testimonial = (typeof TESTIMONIALS)[number];

function TestimonialCard({ t, duplicate = false }: { t: Testimonial; duplicate?: boolean }) {
  return (
    <figure aria-hidden={duplicate || undefined} className="card flex w-[min(84vw,410px)] shrink-0 flex-col p-8 sm:p-9">
      <span aria-hidden className="font-display text-[64px] leading-[0.5] text-miele">
        &ldquo;
      </span>
      <blockquote className="t-quote mt-6 flex-1 text-[clamp(1.15rem,1rem+0.45vw,1.4rem)] text-panna">{t.quote}</blockquote>
      <figcaption className="mt-8 border-t border-[var(--hairline)] pt-6">
        <p className="t-subhead text-[12px] text-panna">{t.name}</p>
        <p className="t-small mt-1 text-[13px]">
          {t.role} · {t.business}
        </p>
        <p className="t-label mt-4 text-[10.5px]">Cliente desde {t.since}</p>
      </figcaption>
    </figure>
  );
}

export function Clients() {
  const reduce = useReducedMotion();
  return (
    <section id="clientes" className="surface-dark section-y overflow-hidden bg-cacao">
      <div className="container-x">
        <SectionHeading
          numeral="IV"
          label="Clientes"
          title={['Lo que dicen', 'nuestros clientes']}
          lead="Chefs, directores de alimentos y fundadores de marcas cuentan cómo es trabajar con nosotros."
        />
      </div>

      {reduce ? (
        <div className="container-x mt-16 grid justify-items-center gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      ) : (
        <Reveal className="marquee mt-[clamp(64px,8vw,104px)]" y={40}>
          <div className="marquee-track flex w-max items-stretch gap-5 pr-5">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={i} t={t} duplicate={i >= TESTIMONIALS.length} />
            ))}
          </div>
        </Reveal>
      )}

      <div className="container-x">
        <Stagger className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4" stagger={0.1}>
          {STORY.stats.map((s) => (
            <Item key={s.label} lift className="card flex flex-col items-center gap-4 px-5 py-9 text-center">
              <Counter
                value={s.value}
                prefix={'prefix' in s ? s.prefix : ''}
                suffix={'suffix' in s ? s.suffix : ''}
                className="tabular font-display text-[clamp(1.8rem,1.2rem+2.4vw,3.4rem)] leading-none font-medium whitespace-nowrap text-panna"
              />
              <span aria-hidden className="h-px w-6 bg-[var(--line)]" />
              <span className="t-label max-w-[20ch] text-panna-soft">{s.label}</span>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
