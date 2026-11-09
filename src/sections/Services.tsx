import { ArrowRight, Briefcase, Check, Crown, Factory, PackageOpen, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Item, Reveal, Stagger } from '../components/motion';
import { PRODUCT_LINES, SERVICES, whatsappUrl } from '../content';

const LINE_ICONS = { premium: Crown, comercial: Briefcase, industrial: Factory } as const;
const SERVICE_ICONS = { suministro: UtensilsCrossed, maquila: PackageOpen } as const;

interface ServicesProps {
  onOpenQuote: () => void;
  onOpenKit: () => void;
}

export function Services({ onOpenQuote, onOpenKit }: ServicesProps) {
  const act = (action: string) => (action === 'samples' ? onOpenKit : onOpenQuote);

  return (
    <section id="servicios" className="surface-dark section-y bg-cacao">
      <div className="container-x">
        <SectionHeading
          numeral="II"
          label="Nuestros servicios"
          title={['Tres líneas,', 'un mismo estándar']}
          lead="Helado para cada tipo de negocio y presupuesto. Desde la línea más accesible hasta la más exclusiva, todo se elabora en nuestra planta con ingredientes reales."
        />

        <Stagger className="mt-[clamp(64px,8vw,104px)] grid items-stretch gap-6 md:grid-cols-3" stagger={0.12}>
          {PRODUCT_LINES.map((line) => {
            const Icon = LINE_ICONS[line.id];
            const featured = 'seal' in line;
            return (
              <Item
                key={line.id}
                lift
                className={`card flex flex-col p-[clamp(26px,2.6vw,36px)] ${featured ? 'card-featured surface-light' : ''}`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-arancia px-3 py-1.5 font-label text-[10.5px] font-medium tracking-[0.16em] whitespace-nowrap text-panna uppercase">
                    {line.seal}
                  </span>
                )}
                <Item y={14} className="flex items-center justify-between">
                  <span className="icon-box">
                    <Icon aria-hidden />
                  </span>
                  <span className="chip">{line.name}</span>
                </Item>
                <Item y={14}>
                  <h3 className="t-h3 mt-8">{line.title}</h3>
                </Item>
                <Item y={14}>
                  <p className="t-small mt-4">{line.text}</p>
                </Item>
                <Item y={14}>
                  <ul className="check-list mt-7">
                    {line.points.map((p) => (
                      <li key={p}>
                        <Check aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Item>
                <div className="mt-auto pt-9">
                  <div className="border-t border-[var(--hairline)] pt-7">
                    <button type="button" className={`btn w-full ${featured ? 'btn-solid' : 'btn-line'}`} onClick={act(line.cta.action)}>
                      {line.cta.label}
                      <ArrowRight aria-hidden />
                    </button>
                  </div>
                </div>
              </Item>
            );
          })}
        </Stagger>

        <Stagger className="mt-6 grid gap-6 lg:grid-cols-2" stagger={0.15}>
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.id];
            const featured = s.id === 'maquila';
            return (
              <Item key={s.id} lift className={`card flex flex-col p-[clamp(28px,3.4vw,52px)] ${featured ? 'card-featured surface-light' : ''}`}>
                <Item y={14} className="flex items-center justify-between gap-4">
                  <span className="icon-box">
                    <Icon aria-hidden />
                  </span>
                  <span className="chip">{s.label}</span>
                </Item>
                <Item y={14}>
                  <h3 className="t-h3 mt-8 max-w-[22ch]">{s.title}</h3>
                </Item>
                <Item y={14}>
                  <p className="t-small mt-4 max-w-[52ch]">{s.text}</p>
                </Item>
                <Item y={14}>
                  <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {s.points.map(([term, desc]) => (
                      <div key={term} className="flex gap-3">
                        <Check aria-hidden className="mt-[3px] h-[15px] w-[15px] shrink-0 text-[var(--accent-text)]" />
                        <div>
                          <dt className="text-[14px] font-semibold">{term}</dt>
                          <dd className="t-small mt-0.5 text-[13.5px]">{desc}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </Item>
                <div className="mt-auto pt-10">
                  <div className="border-t border-[var(--hairline)] pt-7">
                    {s.cta === 'samples' ? (
                      <button type="button" className="btn btn-line" onClick={onOpenKit}>
                        Pedir kit de muestras
                        <ArrowRight aria-hidden />
                      </button>
                    ) : (
                      <button type="button" className="btn btn-solid" onClick={onOpenQuote}>
                        Cotizar maquila
                        <ArrowRight aria-hidden />
                      </button>
                    )}
                  </div>
                </div>
              </Item>
            );
          })}
        </Stagger>

        <Reveal className="mt-6" y={24}>
          <div className="card flex flex-col items-start gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-5">
              <span className="icon-box shrink-0">
                <ShieldCheck aria-hidden />
              </span>
              <div>
                <p className="t-subhead">Capacidad de producción y garantía de calidad</p>
                <p className="t-small mt-1.5 max-w-[68ch]">
                  Dos plantas con capacidad conjunta de más de 100,000 litros al mes, control de calidad por lote y cadena de frío supervisada.
                </p>
              </div>
            </div>
            <a
              className="link-line t-subhead shrink-0 text-[12px]"
              href={whatsappUrl('Hola, me gustaría agendar una visita a la fábrica de Gelatieri.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar visita a la fábrica
              <ArrowRight aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
