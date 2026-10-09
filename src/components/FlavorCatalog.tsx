import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Check, Info, Sparkles, X, ChevronRight } from 'lucide-react';
import { FLAVORS_DATA, CATEGORY_LABELS } from '../data/flavors';
import { Flavor, FlavorCategory, SampleItem } from '../types';

interface FlavorCatalogProps {
  selectedSamples: SampleItem[];
  onToggleSample: (flavor: Flavor) => void;
  onOpenSampleModal: () => void;
}

export const FlavorCatalog: React.FC<FlavorCatalogProps> = ({
  selectedSamples,
  onToggleSample,
  onOpenSampleModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalFlavor, setActiveModalFlavor] = useState<Flavor | null>(null);

  const categories = [
    { id: 'todos', name: 'Todos los Sabores' },
    { id: 'clasicos', name: 'Tradición Italiana' },
    { id: 'frutas', name: 'Sorbettos Veganos' },
    { id: 'bienestar', name: 'Zero Azúcar / Keto' },
    { id: 'gastronomicos', name: 'Edición Chef / Salados' },
  ];

  const filteredFlavors = useMemo(() => {
    return FLAVORS_DATA.filter((flavor) => {
      const matchesCategory =
        activeCategory === 'todos' || flavor.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        flavor.name.toLowerCase().includes(query) ||
        flavor.italianName.toLowerCase().includes(query) ||
        flavor.description.toLowerCase().includes(query) ||
        flavor.ingredients.some((ing) => ing.toLowerCase().includes(query)) ||
        flavor.tastingNotes.some((note) => note.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const isSelected = (id: string) => selectedSamples.some((s) => s.id === id);

  return (
    <section id="catalogo" className="py-20 bg-[#FAF7F5] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#68102B]/10 text-[#68102B] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Formulaciones Maestras</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3A0717] font-normal leading-tight">
              Catálogo de Sabores & Fichas Técnicas
            </h2>
            <p className="text-[#66544E] text-sm sm:text-base mt-2 max-w-2xl">
              Cada receta es formulada en nuestra planta para lograr equilibrio térmico, textura densa y sabor puro sin saborizantes químicos.
            </p>
          </div>

          {/* Sample Bar CTA */}
          <div className="bg-white p-4 rounded-xl border border-[#D8C7BC] shadow-sm flex items-center justify-between gap-4 shrink-0">
            <div>
              <p className="text-xs font-semibold text-[#3A0717]">
                Kit de Degustación B2B ({selectedSamples.length}/4)
              </p>
              <p className="text-[11px] text-[#7A6963]">
                {selectedSamples.length === 0
                  ? 'Elige hasta 4 sabores para tu muestra'
                  : selectedSamples.length === 4
                  ? '¡Kit completo! Listo para solicitar'
                  : `Puedes agregar ${4 - selectedSamples.length} más`}
              </p>
            </div>
            <button
              id="catalog-sample-tray-btn"
              onClick={onOpenSampleModal}
              disabled={selectedSamples.length === 0}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                selectedSamples.length > 0
                  ? 'bg-[#68102B] text-white hover:bg-[#520B20] cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Pedir Muestra
            </button>
          </div>
        </div>

        {/* Filters and Search Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#68102B] text-white shadow-sm'
                    : 'bg-white text-[#5A4944] border border-[#D5C4B8] hover:border-[#68102B] hover:bg-[#F2ECE7]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-[#8C766B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por sabor, pistacho, vegano, maridaje..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#D5C4B8] text-xs text-[#3A0717] placeholder-[#8C766B] focus:outline-none focus:border-[#68102B] focus:ring-1 focus:ring-[#68102B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Subtitle */}
        <div className="mb-8 pb-3 border-b border-[#E8DFD8] flex items-center justify-between">
          <p className="text-xs text-[#6B5B55] italic">
            {CATEGORY_LABELS[activeCategory]?.subtitle || 'Catálogo general de producción'}
          </p>
          <span className="text-xs font-semibold text-[#68102B]">
            {filteredFlavors.length} {filteredFlavors.length === 1 ? 'sabor encontrado' : 'sabores encontrados'}
          </span>
        </div>

        {/* Flavors Grid */}
        {filteredFlavors.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DFD8]">
            <p className="text-base font-semibold text-[#3A0717]">No encontramos sabores con esa búsqueda</p>
            <p className="text-xs text-[#66544E] mt-1">Prueba con otro término como "chocolate", "pistacho" o "vegano".</p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#68102B] text-white text-xs font-medium"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredFlavors.map((flavor) => {
              const selected = isSelected(flavor.id);
              return (
                <div
                  key={flavor.id}
                  className="rounded-2xl bg-white border border-[#D8C7BC] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#68102B]/40 transition-all duration-300 group"
                >
                  {/* Card Image with Badges */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#EFE9E4]">
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>

                    {/* Category / Feature Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {flavor.isBestseller && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#68102B] text-white text-[10px] font-bold uppercase tracking-wider">
                          Más Pedido
                        </span>
                      )}
                      {flavor.isVegan && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider">
                          100% Vegano
                        </span>
                      )}
                      {flavor.isSugarFree && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-700 text-white text-[10px] font-bold uppercase tracking-wider">
                          Cero Azúcar
                        </span>
                      )}
                      {flavor.category === 'gastronomicos' && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#3A0717] text-[#C59A64] text-[10px] font-bold uppercase tracking-wider border border-[#C59A64]/30">
                          Edición Chef
                        </span>
                      )}
                    </div>

                    {/* Quick Specs Pill at Image Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/95">
                      <span className="italic font-serif opacity-90">{flavor.italianName}</span>
                      <span className="bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs font-mono text-[10px]">
                        {flavor.fatContent}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-editorial text-xl text-[#3A0717] leading-tight font-semibold">
                          {flavor.name}
                        </h3>
                      </div>

                      <p className="text-xs text-[#5A4944] line-clamp-3 leading-relaxed mb-4">
                        {flavor.description}
                      </p>

                      {/* Tasting Notes Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {flavor.tastingNotes.map((note, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-[#FAF7F5] border border-[#E0D4CB] text-[10px] font-medium text-[#4A3935]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Info Modal & Sample Select */}
                    <div className="pt-4 border-t border-[#EFE8E2] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalFlavor(flavor)}
                        className="inline-flex items-center gap-1.5 text-xs text-[#68102B] hover:text-[#3A0717] font-medium py-1.5 px-2 hover:bg-[#FAF7F5] rounded-lg transition-colors cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Ficha Técnica</span>
                      </button>

                      <button
                        onClick={() => onToggleSample(flavor)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                          selected
                            ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                            : 'bg-[#FAF7F5] border border-[#D5C4B8] text-[#3A0717] hover:border-[#68102B] hover:bg-white'
                        }`}
                      >
                        {selected ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>En mi Muestra</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3 text-[#68102B]" />
                            <span>Añadir a Muestra</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Technical Sheet Modal */}
        {activeModalFlavor && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#FAF7F5] border border-[#D8C7BC] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-left relative">
              <button
                onClick={() => setActiveModalFlavor(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#EAE2DC] text-[#3A0717] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs uppercase tracking-widest text-[#68102B] font-bold block mb-1">
                Ficha Técnica de Producción
              </span>
              <h3 className="font-editorial text-3xl text-[#3A0717] font-medium">
                {activeModalFlavor.name}
              </h3>
              <p className="font-serif italic text-sm text-[#7A6963] mb-4">
                {activeModalFlavor.italianName}
              </p>

              <div className="rounded-xl overflow-hidden mb-6 h-48 sm:h-56 bg-gray-100">
                <img
                  src={activeModalFlavor.image}
                  alt={activeModalFlavor.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-sm text-[#40302C]">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#3A0717] mb-1">
                    Descripción Sensorial
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A4944] leading-relaxed">
                    {activeModalFlavor.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-3.5 bg-white rounded-xl border border-[#E0D4CB]">
                  <div>
                    <span className="text-[11px] text-[#7A6963] block">Materia Grasa</span>
                    <span className="font-semibold text-xs text-[#3A0717]">{activeModalFlavor.fatContent}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#7A6963] block">Perfil de Azúcar</span>
                    <span className="font-semibold text-xs text-[#3A0717]">{activeModalFlavor.sugarProfile}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#3A0717] mb-1">
                    Ingredientes Declarados
                  </h4>
                  <p className="text-xs text-[#5A4944]">
                    {activeModalFlavor.ingredients.join(', ')}.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#3A0717] mb-1">
                    Alérgenos
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalFlavor.allergens.map((alg, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-red-50 text-red-700 text-xs border border-red-200">
                        {alg}
                      </span>
                    ))}
                  </div>
                </div>

                {activeModalFlavor.recommendedPairing && (
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#3A0717] mb-1">
                      Maridaje Recomendado en Carta
                    </h4>
                    <p className="text-xs text-[#5A4944] italic">
                      {activeModalFlavor.recommendedPairing}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#3A0717] mb-1">
                    Formatos de Entrega Disponibles
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalFlavor.availableFormats.map((fmt, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#F2ECE7] text-[#3A0717] text-xs font-medium">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFD8] flex items-center justify-between">
                <button
                  onClick={() => {
                    onToggleSample(activeModalFlavor);
                    setActiveModalFlavor(null);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isSelected(activeModalFlavor.id)
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#68102B] text-white hover:bg-[#520B20]'
                  }`}
                >
                  {isSelected(activeModalFlavor.id)
                    ? 'Quitar de Muestra'
                    : 'Añadir al Kit de Muestras'}
                </button>
                <button
                  onClick={() => setActiveModalFlavor(null)}
                  className="text-xs text-[#6B5B55] hover:text-[#3A0717]"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
