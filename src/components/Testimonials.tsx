import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  location: string;
  image: string;
  category: 'restaurantes' | 'maquila' | 'hoteles';
  quote: string;
  highlightFlavor: string;
  yearsAsClient: string;
}

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const testimonials: Testimonial[] = [
    {
      id: 'matteo-valenti',
      name: 'Chef Matteo V.',
      role: 'Chef Ejecutivo',
      business: 'Trattoria & Osteria di Roma',
      location: 'Polanco, CDMX',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80',
      category: 'restaurantes',
      quote:
        'El pistacho y la stracciatella tienen un sabor y una textura que mis comensales confunden con helado importado de Italia. Desde que trabajamos con Gelatieri, la carta de postres es uno de los puntos más elogiados del restaurante.',
      highlightFlavor: 'Pistacho Siciliano',
      yearsAsClient: 'Cliente desde 2019',
    },
    {
      id: 'sofia-morales',
      name: 'Sofía Morales',
      role: 'Directora de Alimentos y Bebidas',
      business: 'Grupo Botanica & Cafés de Especialidad',
      location: 'Condesa & Juárez, CDMX',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      category: 'restaurantes',
      quote:
        'Llevamos más de 4 años usando su vainilla y fior di latte para nuestro affogato de especialidad. Las entregas siempre llegan a tiempo y en perfecto estado. Nunca hemos tenido un problema de calidad.',
      highlightFlavor: 'Vainilla de Madagascar',
      yearsAsClient: 'Cliente desde 2020',
    },
    {
      id: 'rodrigo-alarcon',
      name: 'Rodrigo Alarcón',
      role: 'Fundador',
      business: 'Nieve de Barrio (Marca Propia)',
      location: 'Distribución Nacional',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      category: 'maquila',
      quote:
        'Quería lanzar mi propia marca de helado pero no tenía fábrica. Gelatieri desarrolló mi receta, me ayudó con el etiquetado y me entrega las pintas listas para vender. Fue la mejor decisión para mi negocio.',
      highlightFlavor: 'Maquila de Marca Propia',
      yearsAsClient: 'Cliente desde 2021',
    },
    {
      id: 'elena-garza',
      name: 'Chef Elena Garza',
      role: 'Chef Pastelera',
      business: 'Banquetería y Eventos de Autor',
      location: 'Lomas de Chapultepec',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      category: 'hoteles',
      quote:
        'El sorbete de maracuyá es el limpiador de paladar perfecto en mis menús de 5 tiempos para bodas. Tiene un sabor puro a fruta fresca que no se consigue con ningún helado industrial.',
      highlightFlavor: 'Sorbete de Maracuyá',
      yearsAsClient: 'Cliente desde 2018',
    },
    {
      id: 'mauricio-arechiga',
      name: 'Mauricio A.',
      role: 'Gerente de Operaciones',
      business: 'Casona San Jerónimo Boutique Hotel',
      location: 'San Ángel, CDMX',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      category: 'hoteles',
      quote:
        'Antes teníamos nuestra propia máquina de helados y era un dolor de cabeza. Desde que pasamos al suministro directo con Gelatieri, eliminamos la merma, ahorramos tiempo y nuestro margen en postres mejoró notablemente.',
      highlightFlavor: 'Cubetas para Hotelería',
      yearsAsClient: 'Cliente desde 2017',
    },
    {
      id: 'carlos-del-valle',
      name: 'Chef Daniel R.',
      role: 'Head Chef',
      business: 'Restaurante Fuego & Origen',
      location: 'San Pedro Garza García (Monterrey)',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      category: 'restaurantes',
      quote:
        'Aunque estamos fuera de CDMX, el envío refrigerado llega impecable. El chocolate belga 70% con sal marina es el cierre perfecto de nuestras cenas maridaje. Los clientes siempre lo piden de nuevo.',
      highlightFlavor: 'Chocolate Belga 70%',
      yearsAsClient: 'Cliente desde 2022',
    },
  ];

  const filteredTestimonials =
    activeFilter === 'todos'
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  return (
    <section id="testimonios" className="py-20 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <Award className="w-3.5 h-3.5" />
            <span>Testimonios</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--text-primary)' }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Chefs, directores de alimentos y fundadores de marcas comparten su experiencia trabajando con nosotros.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'restaurantes', label: 'Restaurantes' },
            { id: 'maquila', label: 'Maquila & Marca Propia' },
            { id: 'hoteles', label: 'Hoteles & Eventos' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'text-white shadow-xs'
                  : 'bg-white border'
              }`}
              style={
                activeFilter === tab.id
                  ? { backgroundColor: 'var(--accent)', color: 'white' }
                  : { color: 'var(--text-secondary)', borderColor: 'var(--border)' }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left relative group"
              style={{ borderColor: 'var(--border)' }}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 transition-colors"
                      style={{ borderColor: 'var(--border)' }}
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="font-editorial text-lg font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>
                        {t.name}
                      </h3>
                      <p className="text-[11px] font-medium leading-tight" style={{ color: 'var(--text-muted)' }}>
                        {t.role}
                      </p>
                      <p className="text-[11px] font-semibold mt-0.5" style={{ color: 'var(--accent)' }}>
                        {t.business}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 transition-colors shrink-0" style={{ color: 'var(--border)' }} />
                </div>

                <div className="flex items-center justify-between mb-3.5 pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5"
                        style={{ color: 'var(--gold)', fill: 'var(--gold)' }}
                      />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-medium border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Cliente verificado</span>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] leading-relaxed italic font-editorial" style={{ color: 'var(--text-primary)' }}>
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t flex items-center justify-between text-[11px]" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                <div className="truncate pr-2">
                  <span className="text-[10px] uppercase tracking-wider block" style={{ color: 'var(--text-muted)' }}>Sabor favorito:</span>
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{t.highlightFlavor}</span>
                </div>
                <span className="text-[10px] font-medium px-2 py-1 rounded-md shrink-0" style={{ color: 'var(--accent)', backgroundColor: 'color-mix(in srgb, var(--accent) 5%, transparent)' }}>
                  {t.yearsAsClient}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 p-6 sm:p-8 rounded-2xl text-white border" style={{ backgroundColor: 'var(--bg-card-dark)', borderColor: 'var(--accent-hover)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <p className="font-editorial text-3xl sm:text-4xl font-medium" style={{ color: 'var(--gold)' }}>20 Años</p>
              <p className="text-xs text-[#E0D5CF] mt-1">Elaborando helado artesanal desde 2006</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-editorial text-3xl sm:text-4xl font-medium" style={{ color: 'var(--gold)' }}>~200</p>
              <p className="text-xs text-[#E0D5CF] mt-1">Clientes activos en todo México</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-editorial text-3xl sm:text-4xl font-medium" style={{ color: 'var(--gold)' }}>35+</p>
              <p className="text-xs text-[#E0D5CF] mt-1">Sabores disponibles en catálogo</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="font-editorial text-3xl sm:text-4xl font-medium" style={{ color: 'var(--gold)' }}>4.9 / 5</p>
              <p className="text-xs text-[#E0D5CF] mt-1">Satisfacción promedio de nuestros clientes</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
