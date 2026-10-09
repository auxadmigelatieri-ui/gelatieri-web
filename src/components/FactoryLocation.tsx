import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';

export const FactoryLocation: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*Contacto Fábrica Gelatieri*%0A%0A` +
      `*Nombre:* ${name}%0A` +
      `*Correo:* ${email}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Mensaje:* ${message}`;

    window.open(`https://wa.me/525530491823?text=${formatted}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold block mb-2" style={{ color: 'var(--accent)' }}>
                Contacto
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal leading-tight" style={{ color: 'var(--text-primary)' }}>
                Estamos listos para atenderte
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Escríbenos para cotizar, solicitar muestras o resolver cualquier duda. Nuestra fábrica está en Azcapotzalco, Ciudad de México, y hacemos envíos refrigerados a todo el país.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Fábrica y Oficinas</p>
                  <p className="mt-0.5">Norte 79 B No 117, Colonia Un Hogar Para Cada Trabajador,</p>
                  <p>Alcaldía Azcapotzalco, C.P. 02060, Ciudad de México.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                  <Mail className="w-4 h-4 mb-2" style={{ color: 'var(--accent)' }} />
                  <p className="font-bold text-xs" style={{ color: 'var(--text-primary)' }}>Correo Electrónico</p>
                  <a href="mailto:cliente@gelatieri.com" className="text-xs hover:underline block mt-0.5" style={{ color: 'var(--accent)' }}>
                    cliente@gelatieri.com
                  </a>
                  <a href="mailto:rodolfo@gelatieri.com" className="text-[11px] hover:underline block" style={{ color: 'var(--text-muted)' }}>
                    rodolfo@gelatieri.com
                  </a>
                </div>

                <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
                  <Phone className="w-4 h-4 mb-2" style={{ color: 'var(--accent)' }} />
                  <p className="font-bold text-xs" style={{ color: 'var(--text-primary)' }}>Teléfono y WhatsApp</p>
                  <a href="https://wa.me/525530491823" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-700 font-semibold hover:underline block mt-0.5">
                    +52 (55) 3049-1823
                  </a>
                  <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Respuesta rápida para pedidos y cotizaciones</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border text-xs" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
                <Clock className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>
                  <strong>Horario:</strong> Lunes a Viernes de 8:00 a 17:30 hrs. Entregas programadas según tu zona.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border shadow-sm text-left" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <span className="text-xs uppercase tracking-[0.2em] font-bold block mb-1" style={{ color: 'var(--accent)' }}>
              Mensaje Directo
            </span>
            <h3 className="font-editorial text-2xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
              Escríbenos y te respondemos hoy mismo
            </h3>

            {sent ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-xl" style={{ color: 'var(--text-primary)' }}>¡Mensaje enviado!</h4>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Nos pondremos en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 rounded-full text-white text-xs font-bold uppercase"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre o el de tu negocio"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs focus:outline-none"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="55..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs focus:outline-none"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    ¿En qué te podemos ayudar? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Cuéntanos sobre tu negocio, qué volumen necesitas, si buscas helado para restaurante o quieres crear tu propia marca..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs focus:outline-none"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
