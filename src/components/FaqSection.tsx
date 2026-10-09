import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto tengo que pedir como mínimo?',
      answer:
        'Para restaurantes y cafeterías en la Ciudad de México, el pedido mínimo es de 2 cubetas (entre 8 y 10 litros). Puedes combinar diferentes sabores en cada pedido. Para maquila o marca propia, arrancamos con lotes de prueba desde 50 litros.'
    },
    {
      question: '¿Cómo me aseguran que el helado llega en buenas condiciones?',
      answer:
        'Contamos con vehículos refrigerados que mantienen el helado a temperatura controlada durante todo el trayecto. El producto sale directamente de nuestra cámara de frío y se entrega en mano a tu personal. Para envíos fuera de CDMX, usamos transporte refrigerado especializado con embalaje de hielo seco.'
    },
    {
      question: '¿Puedo crear un sabor exclusivo para mi restaurante o marca?',
      answer:
        'Sí. Nuestro equipo en la fábrica puede desarrollar cualquier sabor que necesites — desde combinaciones con ingredientes locales hasta recetas de autor. Trabajamos bajo acuerdo de confidencialidad para que tu receta sea 100% exclusiva.'
    },
    {
      question: '¿Cada cuánto pueden entregarme?',
      answer:
        'En la Ciudad de México y zona metropolitana hacemos entregas programadas semanalmente. También podemos coordinar entregas urgentes. Para el interior de la República, la frecuencia depende del volumen y la ruta, pero normalmente es quincenal o mensual.'
    },
    {
      question: '¿Tienen opciones sin azúcar, veganas o para dietas especiales?',
      answer:
        'Sí. Contamos con línea splenda, veganos, kosher y sin azúcar. Todas las líneas tienen la misma calidad de sabor y textura.'
    },
    {
      question: '¿Qué normas y certificaciones cumplen?',
      answer:
        'Nuestra fábrica opera bajo los lineamientos de la NOM-243 (norma para productos lácteos y helados) con controles de calidad por cada lote producido. También ofrecemos asesoría para el etiquetado de tu producto conforme a la NOM-051 si necesitas vender al público con tu propia marca.'
    },
    {
      question: '¿Cómo empiezo a trabajar con Gelatieri?',
      answer:
        'Es muy sencillo: 1) Escríbenos por WhatsApp o llena el formulario de contacto. 2) Te enviamos un kit de muestras sin costo para que pruebes los sabores. 3) Eliges los que más te gusten y acordamos volumen, presentación y frecuencia de entrega. 4) Empezamos a surtirte. Así de simple.'
    }
  ];

  return (
    <section className="py-20 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-normal" style={{ color: 'var(--text-primary)' }}>
            ¿Tienes dudas? Aquí te respondemos
          </h2>
          <p className="mt-2 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
            Las preguntas más comunes de restaurantes, hoteles y marcas que trabajan con nosotros.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border overflow-hidden transition-all duration-200"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span className="text-sm font-semibold">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    style={{ color: 'var(--accent)' }}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t pt-3 text-left" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-light)' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
