import React from 'react';
import { ArrowRight, CheckCircle2, Award, Truck } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenSampleModal }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase" style={{ backgroundColor: 'var(--accent-light)', borderWidth: 1, borderColor: 'var(--accent-light)', color: 'var(--accent)' }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></span>
              <span>Fábrica de Helado Artesanal en México • Desde 2006</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Helado artesanal de calidad superior,{' '}
              <span className="italic font-serif block sm:inline" style={{ color: 'var(--accent)' }}>
                listo para tu negocio.
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed max-w-2xl font-light" style={{ color: 'var(--text-secondary)' }}>
              Elaboramos helado con recetas italianas tradicionales e ingredientes naturales de primera calidad. Proveemos a <strong>restaurantes</strong>, <strong>hoteles</strong> y <strong>cadenas</strong>, y también fabricamos <strong>helado con tu propia marca</strong>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>Ingredientes 100% naturales</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>Sin grasas artificiales</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>Recetas italianas auténticas</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>Fruta fresca mexicana</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>Opciones sin azúcar</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span>Entrega en frío garantizada</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-quote-button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg group"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-explore-button"
                onClick={onOpenSampleModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-sm transition-all shadow-xs"
                style={{ borderWidth: 1, borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
              >
                <span>Pedir Kit de Muestras Gratis</span>
              </button>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Atención personalizada directa desde nuestra fábrica en Azcapotzalco, CDMX.</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 aspect-[4/5] sm:aspect-[4/4.8]" style={{ borderColor: 'var(--bg-card)', backgroundColor: 'var(--bg-secondary)' }}>
                <video
                  src="/videos/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A0717]/60 via-transparent to-black/5"></div>
              </div>

              <div className="absolute -top-4 -left-4 sm:-left-6 backdrop-blur-md p-4 rounded-xl shadow-lg text-left max-w-[210px]" style={{ backgroundColor: 'var(--bg-card)', borderWidth: 1, borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>
                    20 Años de Experiencia
                  </span>
                </div>
                <p className="text-xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>Desde 2006</p>
                <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>Helado artesanal italiano hecho en México</p>
              </div>

              <div className="absolute -bottom-5 -right-4 sm:-right-6 backdrop-blur-md p-4 rounded-xl shadow-lg text-left max-w-[220px]" style={{ backgroundColor: 'var(--bg-card)', borderWidth: 1, borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Entrega Refrigerada
                  </span>
                </div>
                <p className="text-xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>Siempre en Frío</p>
                <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>Entregas programadas en CDMX y envíos a toda la República</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
