import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Item, Reveal, Stagger } from '../components/motion';
import { CONTACT, whatsappUrl } from '../content';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Norte 79 B 117, Un Hogar Para Cada Trabajador, Azcapotzalco, 02060 Ciudad de México',
)}`;

function Block({ label, icon: Icon, children }: { label: string; icon: LucideIcon; children: ReactNode }) {
  return (
    <Item lift className="card flex gap-5 p-6 sm:p-7">
      <span className="icon-box shrink-0">
        <Icon aria-hidden />
      </span>
      <div>
        <p className="t-label">{label}</p>
        <div className="mt-3 text-[15.5px] leading-relaxed text-panna">{children}</div>
      </div>
    </Item>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      'Contacto desde el sitio de Gelatieri',
      '',
      `Nombre: ${form.name}`,
      `Correo: ${form.email}`,
      `Teléfono: ${form.phone}`,
      `Mensaje: ${form.message}`,
    ].join('\n');
    window.open(whatsappUrl(text), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section id="contacto" className="surface-dark section-y bg-cacao-deep">
      <div className="container-x">
        <SectionHeading
          numeral="VII"
          label="Contacto"
          title={['Hablemos de', 'tu carta']}
          lead="Escríbenos para cotizar, pedir muestras o resolver dudas. Hacemos envíos refrigerados a todo el país."
        />

        <div className="mt-[clamp(64px,8vw,112px)] grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[clamp(48px,6vw,104px)]">
          <Stagger className="grid content-start gap-4" stagger={0.1}>
            <Block label="Fábrica y oficinas" icon={MapPin}>
              {CONTACT.addressLines.map((l) => (
                <p key={l}>{l}</p>
              ))}
              <a className="link-line t-subhead mt-4 text-[11px]" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Cómo llegar
                <ArrowRight aria-hidden />
              </a>
            </Block>
            <Block label="Correo" icon={Mail}>
              {CONTACT.emails.map((m) => (
                <p key={m}>
                  <a className="nav-link text-panna" href={`mailto:${m}`}>
                    {m}
                  </a>
                </p>
              ))}
            </Block>
            <Block label="Teléfono y WhatsApp" icon={Phone}>
              <a className="nav-link tabular text-panna" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                {CONTACT.phoneDisplay}
              </a>
              <p className="t-small mt-2">{CONTACT.hours}. Entregas programadas según tu zona.</p>
            </Block>
          </Stagger>

          <Reveal delay={0.1}>
            <div className="card p-[clamp(28px,4vw,56px)]">
              <form onSubmit={submit} className="grid gap-7">
                <p className="t-h3">Escríbenos</p>
                <label className="field">
                  <span>Nombre o empresa</span>
                  <input className="input" required value={form.name} onChange={set('name')} autoComplete="organization" />
                </label>
                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="field">
                    <span>Correo</span>
                    <input className="input" required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
                  </label>
                  <label className="field">
                    <span>Teléfono o WhatsApp</span>
                    <input className="input" required type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  </label>
                </div>
                <label className="field">
                  <span>¿En qué te ayudamos?</span>
                  <textarea
                    className="input"
                    required
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Tipo de negocio, volumen aproximado, sabores que te interesan…"
                  />
                </label>
                <button type="submit" className="btn btn-solid mt-2 w-full sm:w-auto sm:justify-self-start">
                  {sent ? <Check aria-hidden /> : null}
                  {sent ? 'Mensaje preparado en WhatsApp' : 'Enviar mensaje'}
                  {sent ? null : <ArrowRight aria-hidden />}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
