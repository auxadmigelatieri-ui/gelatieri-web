import React, { useState } from 'react';
import { X, Send, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('maquila');
  const [volume, setVolume] = useState('100-500');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const typeLabel =
      projectType === 'maquila'
        ? 'Maquila / Marca Privada'
        : projectType === 'restaurante'
        ? 'Suministro para Restaurante'
        : 'Desarrollo de Receta Exclusiva';

    const text = `*Solicitud Directa de Cotización - Gelatieri*%0A%0A` +
      `*Nombre:* ${name}%0A` +
      `*Negocio:* ${business}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Tipo de Proyecto:* ${typeLabel}%0A` +
      `*Volumen Estimado:* ${volume} L/mes%0A` +
      `*Notas:* ${notes || 'Sin notas adicionales'}`;

    window.open(`https://wa.me/525530491823?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left" style={{ backgroundColor: 'var(--bg-secondary)', borderWidth: 1, borderColor: 'var(--border)' }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#EAE2DC]"
          style={{ color: 'var(--text-primary)' }}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl" style={{ color: 'var(--text-primary)' }}>¡Mensaje Preparado!</h3>
            <p className="text-xs max-w-sm mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Se ha generado tu enlace a WhatsApp. Un asesor técnico de Gelatieri atenderá tus requerimientos de formulación y volumen.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-5 py-2 rounded-full text-white text-xs font-bold uppercase"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-1" style={{ color: 'var(--accent)' }}>
                Atención Inmediata
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                Cotizar Maquila o Suministro
              </h3>
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                Envía tus requerimientos a nuestra planta en Azcapotzalco, CDMX.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Tu Nombre *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Restaurante o Marca *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Osteria Romana"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="55..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Correo Electrónico</label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Tipo de Solicitud</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  >
                    <option value="maquila">Maquila / Marca Privada</option>
                    <option value="restaurante">Suministro para Restaurante / Horeca</option>
                    <option value="receta">Desarrollo de Receta Exclusiva I+D</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Volumen Mensual Aprox.</label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  >
                    <option value="50-100">50 a 100 Litros (Pruebas / Cafetería)</option>
                    <option value="100-500">100 a 500 Litros (Restaurante)</option>
                    <option value="500-1500">500 a 1,500 Litros (Cadena / Marca)</option>
                    <option value="1500+">Más de 1,500 Litros (Retail nacional)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Detalles del Proyecto o Sabores</label>
                <textarea
                  rows={2}
                  placeholder="Ej. Busco cubetas de pistacho y maracuyá para 2 sucursales en Polanco..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  style={{ backgroundColor: 'var(--accent)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enviar Cotización Directa</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
