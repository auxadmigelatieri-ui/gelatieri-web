import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { Dialog } from './Dialog';
import { whatsappUrl } from '../content';

const TYPES = ['Suministro para restaurante u hotel', 'Maquila o marca propia', 'Desarrollo de sabor exclusivo'];
const VOLUMES = ['50 a 100 L al mes', '100 a 500 L al mes', '500 a 1,500 L al mes', 'Más de 1,500 L al mes'];

export function QuoteDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', type: TYPES[0], volume: VOLUMES[1], notes: '' });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const close = () => {
    onClose();
    window.setTimeout(() => setSent(false), 500);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      'Solicitud de cotización · Gelatieri',
      '',
      `Nombre: ${form.name}`,
      `Negocio: ${form.business}`,
      `Teléfono: ${form.phone}`,
      `Correo: ${form.email || 'No indicado'}`,
      `Tipo de proyecto: ${form.type}`,
      `Volumen estimado: ${form.volume}`,
      `Detalles: ${form.notes || 'Sin detalles adicionales'}`,
    ].join('\n');
    window.open(whatsappUrl(text), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <Dialog open={open} onClose={close} label="Cotización directa de fábrica" title={sent ? 'Solicitud lista' : 'Cuéntanos tu proyecto'}>
      {sent ? (
        <div className="grid gap-8">
          <p className="t-body">Abrimos WhatsApp con tu solicitud. Un asesor de la fábrica revisa volumen y formulación y te responde en horario de oficina.</p>
          <button type="button" className="btn btn-solid justify-self-start" onClick={close}>
            Volver al sitio
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-7 sm:grid-cols-2">
          <label className="field">
            <span>Nombre</span>
            <input className="input" required value={form.name} onChange={set('name')} autoComplete="name" />
          </label>
          <label className="field">
            <span>Restaurante o marca</span>
            <input className="input" required value={form.business} onChange={set('business')} autoComplete="organization" />
          </label>
          <label className="field">
            <span>Teléfono o WhatsApp</span>
            <input className="input" required type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
          </label>
          <label className="field">
            <span>Correo</span>
            <input className="input" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
          </label>
          <label className="field">
            <span>Tipo de proyecto</span>
            <select className="input" value={form.type} onChange={set('type')}>
              {TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Volumen mensual</span>
            <select className="input" value={form.volume} onChange={set('volume')}>
              {VOLUMES.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="field sm:col-span-2">
            <span>Detalles</span>
            <textarea
              className="input"
              rows={3}
              value={form.notes}
              onChange={set('notes')}
              placeholder="Sabores, presentaciones, número de sucursales…"
            />
          </label>
          <button type="submit" className="btn btn-solid w-full sm:col-span-2 sm:w-auto sm:justify-self-start">
            Enviar por WhatsApp
            <ArrowRight aria-hidden />
          </button>
        </form>
      )}
    </Dialog>
  );
}
