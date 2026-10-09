import React from 'react';
import { Award, Compass, Droplet, Sparkles, Wind, ShieldCheck, ThermometerSnowflake } from 'lucide-react';

export const CraftsmanshipProcess: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Materia Prima Pura & Sin Químicos',
      subtitle: 'Trazabilidad de origen',
      description:
        'Utilizamos pastas puras de frutos secos importadas directamente de Italia (Piamonte y Sicilia) y frutas frescas mexicanas seleccionadas en su punto óptimo de madurez. Cero saborizantes sintéticos y 0% grasas hidrogenadas.',
      tag: '100% Natural'
    },
    {
      num: '02',
      title: 'Maduración Lenta (12 a 24 Horas)',
      subtitle: 'El reposo que crea la textura',
      description:
        'La mezcla base se somete a un reposo térmico a 4°C durante un mínimo de 12 horas. Esto permite que las proteínas y azúcares se hidraten por completo, logrando una emulsión natural, sedosa y estable.',
      tag: 'Técnica Tradicional'
    },
    {
      num: '03',
      title: 'Mantecación con Bajo Overrun (~25%)',
      subtitle: 'Gelato denso vs. Helado inflado con aire',
      description:
        'El helado industrial inyecta hasta un 100% de aire para abaratar costos. En Gelatieri trabajamos con un overrun de apenas 25% a 30%: más producto real por litro, textura densa y una fusión lenta y placentera en el paladar.',
      tag: 'Bajo Overrun'
    },
    {
      num: '04',
      title: 'Cadena de Frío y Control de Lote',
      subtitle: 'Entrega a -18°C sin cristalización',
      description:
        'El choque térmico a -35°C fija los microcristales de hielo en nanomicras imperceptibles a la lengua. Nuestro protocolo logístico asegura entrega a temperatura regulada en CDMX y envíos congelados a la República.',
      tag: 'Calidad Certificada'
    },
  ];

  return (
    <section id="metodo" className="py-20 bg-white border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#68102B]/10 text-[#68102B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>El Método Gelatieri</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3A0717] font-normal leading-tight">
            Por qué el verdadero gelato italiano no se parece al helado convencional
          </h2>
          <p className="mt-3 text-[#66544E] text-base">
            No vendemos aire congelado. Construimos densidad, cremosidad y sabor noble a través de ciencia artesanal.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-2xl bg-[#FAF7F5] border border-[#E0D4CB] flex flex-col justify-between hover:border-[#68102B] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-editorial text-3xl text-[#68102B] font-light">
                    {pillar.num}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#D5C4B8] text-[10px] font-semibold text-[#68102B] uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-editorial text-xl text-[#3A0717] font-semibold mb-1 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs font-serif italic text-[#7A6963] mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-[#5A4944] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFD8]/60 text-[11px] text-[#68102B] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Estándar Gelatieri desde 2006</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout: Gelatieri vs Helado Industrial */}
        <div className="mt-14 rounded-2xl bg-[#3A0717] text-white p-8 sm:p-10 border border-white/10 shadow-xl">
          <div className="max-w-3xl mb-6 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C59A64] font-bold block mb-1">
              Diferencia Técnica Fundamental
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
              Gelato Artesanal Gelatieri vs. Helado Industrial
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-xs sm:text-sm">
            
            {/* Gelatieri */}
            <div className="p-5 rounded-xl bg-white/5 border border-[#C59A64]/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C59A64]"></span>
                <p className="font-bold text-[#C59A64] uppercase tracking-wider text-xs">
                  Gelato Artesanal Gelatieri
                </p>
              </div>
              <ul className="space-y-2 text-[#E0D5CF] text-xs">
                <li>• <strong>Aire (Overrun):</strong> 20% a 30% máx. Textura elástica, densa y cremosa.</li>
                <li>• <strong>Grasa:</strong> 6% a 9% proveniente de leche y crema fresca entera.</li>
                <li>• <strong>Temperatura de servicio:</strong> -12°C a -14°C (el paladar percibe el sabor de inmediato).</li>
                <li>• <strong>Ingredientes:</strong> Fruta pura, pastas nobles, sin colorantes químicos.</li>
              </ul>
            </div>

            {/* Helado Industrial */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 opacity-80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                <p className="font-bold text-gray-300 uppercase tracking-wider text-xs">
                  Helado Comercial / Industrial
                </p>
              </div>
              <ul className="space-y-2 text-gray-300 text-xs">
                <li>• <strong>Aire (Overrun):</strong> 90% a 110% (la mitad de lo que compras es aire bombeado).</li>
                <li>• <strong>Grasa:</strong> 14% a 22% a base de grasas vegetales o hidrogenadas.</li>
                <li>• <strong>Temperatura de servicio:</strong> -18°C a -20°C (adormece las papilas gustativas).</li>
                <li>• <strong>Ingredientes:</strong> Polvos saborizantes, emulsionantes químicos y colorantes artificiales.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
