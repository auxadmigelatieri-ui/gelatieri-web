import React from 'react';
import { UtensilsCrossed, PackageOpen, Check, ArrowRight, Shield, Sparkles, Crown, Briefcase, Factory } from 'lucide-react';

interface B2BServicesProps {
  onOpenQuote: () => void;
  onOpenSampleModal: () => void;
}

export const B2BServices: React.FC<B2BServicesProps> = ({ onOpenQuote, onOpenSampleModal }) => {
  return (
    <section id="servicios" className="py-20 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold block mb-2" style={{ color: 'var(--accent)' }}>
            Nuestros Servicios
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--text-primary)' }}>
            Tres líneas de producto, un mismo estándar de calidad
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Ofrecemos helado para distintos tipos de negocio y presupuesto. Desde nuestra línea más accesible hasta la formulación más exclusiva, todo se elabora en nuestra planta con ingredientes reales.
          </p>
        </div>

        {/* 3 Product Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

          <div className="rounded-2xl border-2 text-white p-7 flex flex-col justify-between shadow-xl text-left group relative" style={{ borderColor: 'color-mix(in srgb, var(--gold) 40%, transparent)', backgroundColor: 'var(--bg-card-dark)' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase" style={{ backgroundColor: 'var(--gold)', color: 'var(--text-primary)' }}>
              Más Solicitada
            </div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Crown className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase" style={{ backgroundColor: 'color-mix(in srgb, var(--gold) 20%, transparent)', color: 'var(--gold)', borderWidth: 1, borderColor: 'color-mix(in srgb, var(--gold) 30%, transparent)' }}>
                  Premium
                </span>
              </div>
              <h3 className="font-editorial text-xl text-white mb-2">Línea Premium</h3>
              <p className="text-sm text-[#E0D5CF] leading-relaxed mb-5">
                Para quienes buscan lo mejor. Pastas importadas directamente desde Italia, frutas frescas de temporada, vainilla de Madagascar en vaina. El helado que impresiona a cualquier paladar.
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-[#E0D5CF]">
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Ingredientes de origen premium importados</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#E0D5CF]">
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Desarrollo de sabores exclusivos a medida</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#E0D5CF]">
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Ideal para menús de autor y hoteles boutique</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#E0D5CF]">
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Textura y densidad tipo gelato auténtico</span>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5 border-t border-white/10">
              <button
                onClick={onOpenQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                style={{ backgroundColor: 'var(--gold)', color: '#241A1C' }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cotizar Línea Premium</span>
              </button>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 text-left group relative" style={{ borderColor: 'var(--border)' }}>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
                  Comercial
                </span>
              </div>
              <h3 className="font-editorial text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Línea Comercial</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                El equilibrio perfecto entre calidad y costo. La opción favorita de restaurantes y cafeterías que quieren ofrecer algo superior sin complicarse.
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span>Ingredientes naturales de buena calidad</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span>Más de 25 sabores disponibles</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span>Excelente relación calidad-precio</span>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5 border-t" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={onOpenSampleModal}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                style={{ backgroundColor: 'var(--accent)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              >
                <span>Pedir Muestras Gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 text-left group" style={{ borderColor: 'var(--border)' }}>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
                  <Factory className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F2ECE7] text-[10px] font-semibold tracking-wider uppercase" style={{ color: 'var(--accent)' }}>
                  Industrial
                </span>
              </div>
              <h3 className="font-editorial text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Línea Industrial</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                Ideal para negocios de alto volumen que necesitan un helado confiable a precio competitivo. Sabores clásicos con buena textura y consistencia, elaborados con ingredientes de calidad estándar.
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span>Precio accesible por volumen</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span>Sabores populares siempre disponibles</span>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5 border-t" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={onOpenQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs font-medium hover:bg-[#F2ECE7] transition-colors"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Two Service Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="rounded-2xl border bg-white p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 text-left relative group overflow-hidden" style={{ borderColor: 'var(--border)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 5%, transparent)' }}></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F2ECE7] text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--accent)' }}>
                  Suministro para Negocios
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl mb-3" style={{ color: 'var(--text-primary)' }}>
                Proveemos a Restaurantes, Hoteles y Cadenas
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Te surtimos helado listo para servir en cubetas profesionales. Solo necesitas un congelador — nosotros nos encargamos de la producción, la calidad y la entrega puntual en frío. Tú te concentras en atender a tus clientes.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span><strong>Entregas programadas:</strong> recibe tu pedido cada semana, siempre en frío y a tiempo.</span>
                </div>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span><strong>Listo para servir:</strong> el helado sale de la cubeta con la textura perfecta, sin esperar.</span>
                </div>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span><strong>Excelente margen:</strong> costos claros por porción para que tu negocio sea rentable.</span>
                </div>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--accent)' }} />
                  <span><strong>CDMX y República:</strong> cobertura en el Valle de México y envíos refrigerados a todo el país.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t flex flex-col sm:flex-row gap-3" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={onOpenSampleModal}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                style={{ backgroundColor: 'var(--accent)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              >
                <span>Pedir Kit de Muestras Gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl border text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl relative group overflow-hidden text-left" style={{ borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)', backgroundColor: 'var(--bg-card-dark)' }}>
            <div className="absolute top-0 right-0 w-36 h-36 bg-white/[0.04] rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <PackageOpen className="w-6 h-6" style={{ color: 'var(--gold)' }} />
                </div>
                <span className="px-3 py-1 rounded-full text-white text-xs font-semibold tracking-wider uppercase border border-white/20" style={{ backgroundColor: 'var(--accent)' }}>
                  Maquila & Marca Propia
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-3">
                Crea Tu Propia Marca de Helado
              </h3>

              <p className="text-[#E0D5CF] text-sm leading-relaxed mb-6">
                ¿Quieres vender helado con tu marca sin tener una fábrica? Nosotros lo producimos por ti. Desarrollamos la receta, lo envasamos con tu etiqueta y te lo entregamos listo para vender. Todo bajo acuerdo de confidencialidad.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-[#E0D5CF]">
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span><strong>Tu receta o la nuestra:</strong> creamos sabores exclusivos o fabricamos tu fórmula.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#E0D5CF]">
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span><strong>Lotes desde 50 litros:</strong> empieza con un lote piloto y escala cuando lo necesites.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#E0D5CF]">
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span><strong>Te ayudamos con el etiquetado:</strong> asesoría para cumplir con las normas oficiales mexicanas.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#E0D5CF]">
                  <Check className="w-4 h-4 mt-1 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span><strong>Varios formatos:</strong> vasquetas, litros, cubetas o vasos individuales.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenQuote}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                style={{ backgroundColor: 'var(--gold)', color: '#241A1C' }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cotizar Maquila</span>
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 p-6 rounded-xl bg-[#F2ECE7] border flex flex-col md:flex-row items-center justify-between gap-6 text-left" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--accent)' }}>
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Capacidad de Producción y Garantía de Calidad</h4>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                Contamos con dos plantas de producción con capacidad conjunta de más de 100,000 litros al mes, con control de calidad por lote y cadena de frío supervisada.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/525530491823?text=Hola%20Gelatieri,%20deseo%20agendar%20una%20visita%20o%20conocer%20la%20f%C3%A1brica%20en%20Azcapotzalco."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold hover:underline shrink-0"
            style={{ color: 'var(--accent)' }}
          >
            <span>Agendar visita a la fábrica</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
