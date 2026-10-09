import React from 'react';
import { Lightbulb, Beaker, CheckCircle, PackageCheck, Truck } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: Lightbulb,
      phase: 'Fase 01',
      title: 'Briefing & Conceptualización',
      desc: 'Analizamos el perfil de tu público, el tipo de servicio (carta, mostrador o vitrina de supermercado) y definimos ingredientes, alérgenos y costos meta.',
    },
    {
      icon: Beaker,
      phase: 'Fase 02',
      title: 'Formulación en Laboratorio I+D',
      desc: 'Nuestros maestros heladeros calibran los grados Brix, porcentaje de materia grasa láctea y punto de congelación en nuestra planta de Azcapotzalco.',
    },
    {
      icon: CheckCircle,
      phase: 'Fase 03',
      title: 'Sesión de Cata & Calibración',
      desc: 'Te enviamos muestras refrigeradas o te recibimos en fábrica para probar la receta. Ajustamos textura, intensidad de sabor y retrogusto.',
    },
    {
      icon: PackageCheck,
      phase: 'Fase 04',
      title: 'Envasado & Cumplimiento NOM',
      desc: 'Integración en el empaque elegido (cubetas gastronómicas o pintas retail) con asesoría técnica en etiquetado y tablas nutrimentales oficiales.',
    },
    {
      icon: Truck,
      phase: 'Fase 05',
      title: 'Producción & Logística -18°C',
      desc: 'Mantecado programado y distribución continua en vehículos refrigerados para asegurar que nunca se rompa la cadena de frío en tu negocio.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#68102B] block mb-2">
            Metodología de Acompañamiento
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3A0717] font-normal leading-tight">
            El flujo de trabajo para crear tu producto o abastecer tu restaurante
          </h2>
          <p className="mt-3 text-[#66544E] text-base">
            De la primera idea en papel a la cuchara de tu comensal, con rigor técnico y soporte continuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#FAF7F5] border border-[#E0D4CB] hover:border-[#68102B] transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#68102B]/10 text-[#68102B] flex items-center justify-center mb-4 group-hover:bg-[#68102B] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#68102B] block mb-1">
                    {step.phase}
                  </span>
                  <h3 className="font-editorial text-lg text-[#3A0717] font-semibold mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5A4944] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
