import { Compass, HeartHandshake, Milk, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Frame, Item, LineReveal, Parallax, Reveal, ScrollWords, Stagger } from '../components/motion';
import { STORY } from '../content';

const base = import.meta.env.BASE_URL;
const VALUE_ICONS = [Milk, ShieldCheck, HeartHandshake, Compass];

export function Story() {
  return (
    <section id="historia" className="surface-light section-y bg-panna">
      <div className="container-x">
        <SectionHeading numeral="I" label="Nuestra historia" title={['Gelato italiano', 'con oficio mexicano']} lead={STORY.lead} />

        <div className="mt-[clamp(64px,8vw,112px)] grid items-center gap-14 lg:grid-cols-12 lg:gap-[clamp(40px,5vw,88px)]">
          <Reveal className="lg:col-span-6" y={40}>
            <Frame inset={10} className="p-[20px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-cacao">
                <Parallax amount={36} scale={[1.14, 1.14]} className="h-full">
                  <img
                    src={`${base}images/fabrica/mantecadora.webp`}
                    alt="Gelato saliendo de la mantecadora en la fábrica de Gelatieri"
                    width={720}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </Parallax>
              </div>
            </Frame>
            <p className="t-label mt-5 text-center">Azcapotzalco · Ciudad de México</p>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal y={12}>
              <p className="t-label">{STORY.kicker}</p>
            </Reveal>
            <LineReveal as="h3" lines={[STORY.title]} className="t-h3 mt-4 max-w-[24ch]" delay={0.08} />
            <ScrollWords
              text={STORY.statement}
              className="mt-8 font-display text-[clamp(1.45rem,1.05rem+1.3vw,2.15rem)] leading-[1.25] font-medium"
            />
            <div className="mt-8 grid gap-5">
              {STORY.body.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p className="t-body">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[clamp(88px,10vw,140px)] flex flex-col items-center text-center">
          <Reveal y={12}>
            <p className="t-label">Lo que nos define</p>
          </Reveal>
          <LineReveal as="h3" lines={['Por qué elegir a Gelatieri']} className="t-h3 mt-4" delay={0.08} />
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STORY.values.map((v, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <Item key={v.title} lift className="card flex flex-col p-7 lg:p-8">
                <Item y={14}>
                  <span className="icon-box">
                    <Icon aria-hidden />
                  </span>
                </Item>
                <Item y={14}>
                  <h4 className="t-subhead mt-7">{v.title}</h4>
                </Item>
                <Item y={14}>
                  <p className="t-small mt-3">{v.text}</p>
                </Item>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
