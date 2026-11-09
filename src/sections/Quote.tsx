import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { animate, useReducedMotion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EASE, Frame, Reveal } from '../components/motion';
import { whatsappUrl } from '../content';

const BUSINESS = [
  { id: 'restaurante', label: 'Restaurante u hotel' },
  { id: 'cafeteria', label: 'Cafetería o bistró' },
  { id: 'marca_propia', label: 'Marca propia' },
  { id: 'retail', label: 'Tienda o retail' },
] as const;

const LINES = [
  { id: 'industrial', label: 'Industrial', note: 'Alto volumen, precio competitivo', perLiter: 140 },
  { id: 'comercial', label: 'Comercial', note: 'Equilibrio entre calidad y costo', perLiter: 160 },
  { id: 'premium', label: 'Premium', note: 'Ingredientes importados de Italia', perLiter: 195 },
] as const;

const PACKS = [
  { id: 'litro', label: 'Litro', note: 'Para llevar', liters: 1, extra: 16, unit: 'litros' },
  { id: 'cubeta_4l', label: 'Cubeta 4 L', note: 'Para restaurante', liters: 4, extra: 0, unit: 'cubetas de 4 L' },
  { id: 'cubeta_10l', label: 'Cubeta 10 L', note: 'Para alto volumen', liters: 10, extra: 0, unit: 'cubetas de 10 L' },
  { id: 'vasqueta', label: 'Vasqueta 4.5 L', note: 'Para vitrina', liters: 4.5, extra: 0, unit: 'vasquetas de 4.5 L' },
] as const;

const MIN = 40;
const MAX = 2500;

function discountFor(volume: number) {
  if (volume >= 1000) return 0.22;
  if (volume >= 500) return 0.15;
  if (volume >= 200) return 0.08;
  return 0;
}

function Tween({ value, className }: { value: number; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (n: number) => Math.round(n).toLocaleString('es-MX');
    if (reduce) {
      el.textContent = fmt(value);
      return;
    }
    const c = animate(prev.current, value, { duration: 0.9, ease: EASE, onUpdate: (n) => (el.textContent = fmt(n)) });
    prev.current = value;
    return () => c.stop();
  }, [value, reduce]);
  return (
    <span ref={ref} className={className}>
      {Math.round(value).toLocaleString('es-MX')}
    </span>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-[var(--hairline)] pt-8 first:border-t-0 first:pt-0">
      <legend className="sr-only">{title}</legend>
      <p aria-hidden className="mb-6 flex items-baseline gap-4">
        <span className="t-quote text-[22px] text-cacao">{n}</span>
        <span className="t-subhead text-[12px]">{title}</span>
      </p>
      {children}
    </fieldset>
  );
}

export function Quote() {
  const [business, setBusiness] = useState<string>('restaurante');
  const [line, setLine] = useState<string>('comercial');
  const [pack, setPack] = useState<string>('cubeta_4l');
  const [volume, setVolume] = useState(120);
  const [custom, setCustom] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const L = LINES.find((l) => l.id === line)!;
  const P = PACKS.find((p) => p.id === pack)!;
  const discount = discountFor(volume);
  const perLiter = Math.round(L.perLiter * (1 - discount));
  const units = Math.max(1, Math.round(volume / P.liters));
  const unitPrice = Math.round(perLiter * P.liters + P.extra);
  const monthly = units * unitPrice;
  const fill = ((volume - MIN) / (MAX - MIN)) * 100;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const b = BUSINESS.find((x) => x.id === business)!;
    const text = [
      'Cotización Gelatieri',
      '',
      `Cliente: ${name}`,
      `Contacto: ${phone}${email ? ` · ${email}` : ''}`,
      `Tipo de negocio: ${b.label}`,
      `Línea: ${L.label}`,
      `Presentación: ${P.label}`,
      `Volumen mensual: ${volume} L`,
      `Sabor a la medida: ${custom ? 'Sí' : 'No'}`,
      `Estimado: $${unitPrice.toLocaleString('es-MX')} MXN por unidad · aprox. $${monthly.toLocaleString('es-MX')} MXN al mes + IVA`,
    ].join('\n');
    window.open(whatsappUrl(text), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section id="cotizador" className="surface-light section-y bg-panna">
      <div className="container-x">
        <SectionHeading
          numeral="V"
          label="Cotizador"
          title={['Calcula', 'tu pedido']}
          lead="Elige el tipo de negocio, la línea y el volumen. Te mostramos un estimado directo de fábrica, sin intermediarios."
        />

        <div className="mt-[clamp(64px,8vw,112px)] grid items-start gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-[clamp(40px,5vw,88px)]">
          <Reveal className="card grid gap-10 p-[clamp(24px,3.4vw,48px)]">
            <Step n="i" title="Tipo de negocio">
              <div className="grid grid-cols-2 gap-2.5">
                {BUSINESS.map((b) => (
                  <button key={b.id} type="button" className="choice" aria-pressed={business === b.id} onClick={() => setBusiness(b.id)}>
                    <span className="text-[14px] font-medium">{b.label}</span>
                  </button>
                ))}
              </div>
            </Step>

            <Step n="ii" title="Línea de helado">
              <div className="grid gap-2.5 sm:grid-cols-3">
                {LINES.map((l) => (
                  <button key={l.id} type="button" className="choice" aria-pressed={line === l.id} onClick={() => setLine(l.id)}>
                    <span className="t-subhead text-[12px]">{l.label}</span>
                    <span className="text-[13px] opacity-75">{l.note}</span>
                  </button>
                ))}
              </div>
            </Step>

            <Step n="iii" title="Presentación">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {PACKS.map((p) => (
                  <button key={p.id} type="button" className="choice" aria-pressed={pack === p.id} onClick={() => setPack(p.id)}>
                    <span className="text-[14px] font-medium">{p.label}</span>
                    <span className="text-[12px] opacity-75">{p.note}</span>
                  </button>
                ))}
              </div>
            </Step>

            <Step n="iv" title="Volumen mensual">
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="volumen" className="t-small">
                  Litros al mes
                </label>
                <p className="font-display text-[34px] leading-none font-medium">
                  <Tween value={volume} className="tabular" /> <span className="text-[18px]">L</span>
                </p>
              </div>
              <input
                id="volumen"
                type="range"
                min={MIN}
                max={MAX}
                step={20}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="range mt-5"
                style={{ ['--fill' as string]: `${fill}%` }}
              />
              <div className="t-label mt-3 flex justify-between text-[10px] text-[var(--fg-soft)]">
                <span>40 L · prueba</span>
                <span>200 L</span>
                <span>500 L</span>
                <span>1,000 L+</span>
              </div>
              <label className="mt-8 flex cursor-pointer items-start gap-4">
                <input type="checkbox" checked={custom} onChange={(e) => setCustom(e.target.checked)} className="mt-1 h-4 w-4 accent-cacao" />
                <span className="t-small">
                  <strong className="font-semibold text-cacao">Sabor a la medida.</strong> Incluye sesiones de prueba y desarrollo en la fábrica.
                </span>
              </label>
            </Step>
          </Reveal>

          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <div className="surface-dark bg-cacao">
              <Frame inset={10} className="p-[clamp(28px,3.6vw,48px)]">
                <p className="t-label">Tu estimado</p>
                <p className="mt-6 flex items-baseline gap-2 font-display text-[clamp(3rem,2.2rem+2.6vw,4.6rem)] leading-none font-medium text-panna">
                  $<Tween value={unitPrice} className="tabular" />
                  <span className="font-sans text-[13px] font-normal tracking-normal text-panna-soft">MXN por unidad</span>
                </p>
                <dl className="mt-8 grid gap-3.5 border-t border-[var(--hairline)] pt-7 text-[14px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-panna-soft">Unidades al mes</dt>
                    <dd className="tabular text-right">
                      ~<Tween value={units} /> {P.unit}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-panna-soft">Descuento por volumen</dt>
                    <dd className="tabular">{discount ? `−${Math.round(discount * 100)} %` : 'Precio base'}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-[var(--hairline)] pt-3.5">
                    <dt className="text-panna-soft">Total mensual aprox.</dt>
                    <dd className="tabular font-semibold">
                      $<Tween value={monthly} /> + IVA
                    </dd>
                  </div>
                </dl>

                <form onSubmit={submit} className="mt-10 grid gap-6">
                  <label className="field">
                    <span>Nombre o negocio</span>
                    <input className="input" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="organization" />
                  </label>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="field">
                      <span>WhatsApp</span>
                      <input className="input" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
                    </label>
                    <label className="field">
                      <span>Correo</span>
                      <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                    </label>
                  </div>
                  <button type="submit" className="btn btn-solid mt-2 w-full">
                    {sent ? <Check aria-hidden /> : null}
                    {sent ? 'Cotización enviada' : 'Enviar cotización por WhatsApp'}
                    {sent ? null : <ArrowRight aria-hidden />}
                  </button>
                  <p className="text-center text-[12px] leading-relaxed text-panna-soft">
                    Precios de referencia. El precio final depende de la fórmula y de los ingredientes de temporada.
                  </p>
                </form>
              </Frame>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
