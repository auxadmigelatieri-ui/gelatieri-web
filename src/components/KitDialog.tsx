import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Dialog } from './Dialog';
import { FLAVORS, MAX_SAMPLES } from '../data/flavors';
import { whatsappUrl } from '../content';
import type { Flavor, SampleItem } from '../types';

interface KitDialogProps {
  open: boolean;
  onClose: () => void;
  kit: SampleItem[];
  onToggle: (flavor: Flavor) => void;
}

export function KitDialog({ open, onClose, kit, onToggle }: KitDialogProps) {
  const [form, setForm] = useState({ business: '', contact: '', phone: '', email: '', zone: '' });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const close = () => {
    onClose();
    window.setTimeout(() => setSent(false), 500);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const flavors = kit.map((s) => s.name).join(', ') || 'Recomendación de la fábrica';
    const text = [
      'Solicitud de kit de muestras · Gelatieri',
      '',
      `Negocio: ${form.business}`,
      `Contacto: ${form.contact}`,
      `Teléfono: ${form.phone}`,
      `Correo: ${form.email}`,
      `Zona de entrega: ${form.zone || 'Por confirmar'}`,
      `Sabores: ${flavors}`,
    ].join('\n');
    window.open(whatsappUrl(text), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <Dialog open={open} onClose={close} label="Kit de muestras sin costo" title={sent ? 'Solicitud lista' : `Elige hasta ${MAX_SAMPLES} sabores`}>
      {sent ? (
        <div className="grid gap-8">
          <p className="t-body">
            Abrimos WhatsApp con tu solicitud. Si no se abrió, escríbenos directo al{' '}
            <a className="nav-link text-panna" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp de la fábrica
            </a>
            . Coordinamos contigo el día y la hora de entrega.
          </p>
          <button type="button" className="btn btn-solid justify-self-start" onClick={close}>
            Volver al sitio
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-9">
          <div>
            <p className="t-label mb-4 text-panna-soft">
              Tu kit · {kit.length} de {MAX_SAMPLES}
            </p>
            <ul className="grid grid-cols-3 gap-2.5 sm:grid-cols-6">
              {FLAVORS.map((f) => {
                const on = kit.some((s) => s.id === f.id);
                const full = !on && kit.length >= MAX_SAMPLES;
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      aria-pressed={on}
                      disabled={full}
                      onClick={() => onToggle(f)}
                      className={`group relative block w-full text-left transition-opacity disabled:opacity-35 ${on ? '' : 'opacity-80 hover:opacity-100'}`}
                    >
                      <span className={`relative block aspect-square overflow-hidden border ${on ? 'border-panna' : 'border-transparent'}`}>
                        <img src={f.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                        {on && (
                          <span className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center bg-panna text-cacao">
                            <Check aria-hidden className="h-3 w-3" />
                          </span>
                        )}
                      </span>
                      <span className="mt-2 block text-[12px] tracking-[0.08em] uppercase">{f.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <label className="field">
              <span>Restaurante, empresa o marca</span>
              <input className="input" required value={form.business} onChange={set('business')} autoComplete="organization" />
            </label>
            <label className="field">
              <span>Nombre del contacto</span>
              <input className="input" required value={form.contact} onChange={set('contact')} autoComplete="name" />
            </label>
            <label className="field">
              <span>Teléfono o WhatsApp</span>
              <input className="input" required type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
            </label>
            <label className="field">
              <span>Correo</span>
              <input className="input" required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
            </label>
            <label className="field sm:col-span-2">
              <span>Zona de entrega</span>
              <input className="input" value={form.zone} onChange={set('zone')} placeholder="Colonia, alcaldía o ciudad" />
            </label>
          </div>

          <div className="grid gap-4">
            <button type="submit" className="btn btn-solid w-full sm:w-auto sm:justify-self-start">
              Enviar solicitud por WhatsApp
              <ArrowRight aria-hidden />
            </button>
            <p className="t-small text-[13px]">Muestras sin costo para restaurantes, hoteles y proyectos de maquila establecidos.</p>
          </div>
        </form>
      )}
    </Dialog>
  );
}
