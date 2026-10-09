import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import { SampleItem } from '../types';
import { FLAVORS_DATA } from '../data/flavors';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSamples: SampleItem[];
  onRemoveSample: (id: string) => void;
  onAddSample: (id: string, name: string, category: string) => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  isOpen,
  onClose,
  selectedSamples,
  onRemoveSample,
  onAddSample,
}) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const flavorNames = selectedSamples.map((s) => s.name).join(', ') || 'A recomendación del maestro heladero';
    const message = `*Solicitud de Muestras B2B - Gelatieri*%0A%0A` +
      `*Establecimiento:* ${businessName}%0A` +
      `*Chef / Responsable:* ${contactName}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Ubicación:* ${address}%0A` +
      `*Sabores seleccionados:* ${flavorNames}`;

    window.open(`https://wa.me/525530491823?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-left" style={{ backgroundColor: 'var(--bg-secondary)', borderWidth: 1, borderColor: 'var(--border)' }}>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#EAE2DC] transition-colors"
          style={{ color: 'var(--text-primary)' }}
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-editorial text-3xl" style={{ color: 'var(--text-primary)' }}>
              ¡Solicitud de Muestra Registrada!
            </h3>
            <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Hemos preparado tu solicitud. Nuestro equipo de atención técnica para restaurantes se pondrá en contacto para coordinar el horario y temperatura de entrega.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Volver al Sitio
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold block mb-1" style={{ color: 'var(--accent)' }}>
                Servicio Exclusivo B2B / Foodservice
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                Kit de Muestras & Degustación Técnica
              </h3>
              <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                Para chefs ejecutivos, directores de A&B y marcas interesadas en evaluar nuestra textura y perfil de sabor.
              </p>
            </div>

            {/* Selected Flavors Chips */}
            <div className="mb-6 p-4 rounded-xl bg-white border" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  Sabores en tu Kit ({selectedSamples.length} de 4 máx.)
                </span>
                {selectedSamples.length < 4 && (
                  <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                    Puedes añadir más desde el catálogo
                  </span>
                )}
              </div>

              {selectedSamples.length === 0 ? (
                <div className="py-3 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
                  No has agregado sabores aún. Puedes elegir 4 en el catálogo o seleccionarlos aquí abajo:
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {selectedSamples.map((s) => (
                    <span
                      key={s.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: 'var(--accent-light)', borderWidth: 1, borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)', color: 'var(--accent)' }}
                    >
                      <span>{s.name}</span>
                      <button
                        type="button"
                        onClick={() => onRemoveSample(s.id)}
                        className="hover:text-red-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Quick Add Suggestions if empty */}
              {selectedSamples.length < 4 && (
                <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-[11px] font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Sugerencias rápidas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {FLAVORS_DATA.slice(0, 5)
                      .filter((f) => !selectedSamples.some((s) => s.id === f.id))
                      .map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => onAddSample(f.id, f.name, f.category)}
                          className="text-[10px] px-2.5 py-1 rounded-md hover:bg-[#EAE2DC] border transition-colors"
                          style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                        >
                          + {f.name}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Request Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Restaurante / Empresa / Marca *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Grupo Rosetta, Café Bistro..."
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Nombre del Chef o Contacto *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nombre y apellido"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 55 1234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="correo@tuempresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  Dirección o Zona de Entrega (Colonia, Alcaldía, Ciudad)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Roma Norte, Cuauhtémoc, CDMX"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border text-xs focus:outline-none"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                  style={{ backgroundColor: 'var(--accent)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enviar Solicitud a Coordinación de Catas</span>
                </button>
                <p className="text-[10px] text-center mt-2" style={{ color: 'var(--text-muted)' }}>
                  * Muestras sin costo para restaurantes, hoteles y proyectos de maquila formalmente establecidos.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
