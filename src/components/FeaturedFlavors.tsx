import React from 'react';
import { Sparkles, Check, Plus, ArrowRight } from 'lucide-react';
import { Flavor, SampleItem } from '../types';
import { FLAVORS_DATA } from '../data/flavors';

interface FeaturedFlavorsProps {
  selectedSamples: SampleItem[];
  onToggleSample: (flavor: Flavor) => void;
  onOpenSampleModal: () => void;
  onOpenQuoteModal: () => void;
}

export const FeaturedFlavors: React.FC<FeaturedFlavorsProps> = ({
  selectedSamples,
  onToggleSample,
  onOpenSampleModal,
  onOpenQuoteModal,
}) => {
  return (
    <section id="sabores-destacados" className="py-20 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Los Más Pedidos</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--text-primary)' }}>
            Sabores Más Pedidos
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Pruébalos agregándolos a tu kit de muestras sin costo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {FLAVORS_DATA.map((flavor) => {
            const isInKit = selectedSamples.some((s) => s.id === flavor.id);

            return (
              <div
                key={flavor.id}
                className="group rounded-2xl border hover:shadow-sm transition-all duration-300 overflow-hidden text-center flex flex-col"
                style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
              >
                <div className="relative aspect-square overflow-hidden bg-[#EAE2DC]">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 flex flex-col items-center gap-3 flex-1 justify-between">
                  <h3 className="font-editorial text-lg font-normal" style={{ color: 'var(--text-primary)' }}>
                    {flavor.name}
                  </h3>

                  <button
                    onClick={() => onToggleSample(flavor)}
                    className={`w-full px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      isInKit
                        ? 'bg-emerald-100 text-emerald-800'
                        : ''
                    }`}
                    style={isInKit ? undefined : { backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}
                  >
                    {isInKit ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>En kit</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Pedir muestra</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
            ¿Buscas un sabor especial o una receta a la medida? Contamos con más de 35 sabores y desarrollamos recetas exclusivas.
          </p>
          <a
            href="https://wa.me/525530491823?text=Hola%20Gelatieri,%20me%20gustar%C3%ADa%20conocer%20su%20cat%C3%A1logo%20completo%20de%20sabores."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            <span>Solicitar Catálogo Completo por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
