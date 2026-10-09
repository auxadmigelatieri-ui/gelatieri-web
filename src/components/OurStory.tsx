import React from 'react';
import { History, HeartHandshake, ShieldCheck, Milk, Compass } from 'lucide-react';

export const OurStory: React.FC = () => {
  const values = [
    {
      icon: Milk,
      title: 'Ingredientes Puros',
      desc: 'Usamos leche fresca, fruta natural de temporada y pastas importadas de Italia. Sin grasas artificiales, sin colorantes químicos, sin atajos.',
    },
    {
      icon: ShieldCheck,
      title: 'Calidad Consistente',
      desc: 'Cada lote se elabora con la misma fórmula y los mismos estándares. El helado que pruebas hoy es el mismo que recibirás siempre.',
    },
    {
      icon: HeartHandshake,
      title: 'Socio de tu Negocio',
      desc: 'Entendemos las necesidades de una cocina en servicio: cumplimos horarios, mantenemos la cadena de frío y nos adaptamos a tus volúmenes.',
    },
    {
      icon: Compass,
      title: 'Producto Mexicano con Tradición Italiana',
      desc: 'Trabajamos con productores locales de fruta y combinamos esa riqueza con técnicas y recetas de la tradición heladera italiana.',
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-20 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <History className="w-3.5 h-3.5" />
            <span>Nuestra Historia</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--text-primary)' }}>
            Auténtico gelato italiano con corazón mexicano
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Nacimos con una idea sencilla: que los restaurantes y negocios de México tuvieran acceso a un helado de verdad, hecho con ingredientes reales y recetas italianas auténticas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                alt="Elaboración artesanal de helado Gelatieri"
                className="w-full aspect-4/3 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            </div>
          </div>

          <div className="lg:col-span-6 text-left space-y-5">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold block mb-1" style={{ color: 'var(--accent)' }}>
                Cómo Empezó Todo
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight" style={{ color: 'var(--text-primary)' }}>
                De una pasión a más de 200 clientes satisfechos
              </h3>
            </div>

            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              En 2006, notamos que la mayoría de los restaurantes en la Ciudad de México servían helado: lleno de aire, con saborizantes artificiales y grasas vegetales. No existía una opción de helado artesanal de calidad profesional pensada para el canal de restaurantes y hoteles.
            </p>

            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Así nació Gelatieri: una fábrica en la Ciudad de México dedicada a producir helado con la receta y el método del gelato italiano — elaboración lenta, ingredientes naturales y una textura cremosa y densa que se distingue al instante. Hoy, nuestra planta en Azcapotzalco abastece a cerca de 200 restaurantes, hoteles y marcas en todo el país.
            </p>

          </div>

        </div>

        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-bold block mb-1" style={{ color: 'var(--accent)' }}>
              Lo Que Nos Define
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-normal" style={{ color: 'var(--text-primary)' }}>
              ¿Por qué elegir a Gelatieri?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between group"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-editorial text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {v.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
