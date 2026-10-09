import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export const MaquilaSimulator: React.FC = () => {
  const [businessType, setBusinessType] = useState<string>('restaurante');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(120);
  const [productLine, setProductLine] = useState<string>('comercial');
  const [packaging, setPackaging] = useState<string>('cubeta_4l');
  const [customRecipe, setCustomRecipe] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [sentSuccess, setSentSuccess] = useState<boolean>(false);

  const calculatePricing = () => {
    let basePerLiter = 140;
    if (productLine === 'comercial') basePerLiter = 160;
    if (productLine === 'premium') basePerLiter = 195;

    let discount = 0;
    if (monthlyVolume >= 200 && monthlyVolume < 500) discount = 0.08;
    else if (monthlyVolume >= 500 && monthlyVolume < 1000) discount = 0.15;
    else if (monthlyVolume >= 1000) discount = 0.22;

    const finalPerLiter = Math.round(basePerLiter * (1 - discount));

    let unitsCount = 0;
    let unitName = '';
    let unitPrice = 0;

    switch (packaging) {
      case 'cubeta_4l':
        unitsCount = Math.round(monthlyVolume / 4);
        unitName = 'Cubetas 4 Litros';
        unitPrice = Math.round(finalPerLiter * 4);
        break;
      case 'cubeta_10l':
        unitsCount = Math.round(monthlyVolume / 10);
        unitName = 'Cubetas 10 Litros';
        unitPrice = Math.round(finalPerLiter * 10);
        break;
      case 'vasqueta_4_5l':
        unitsCount = Math.round(monthlyVolume / 4.5);
        unitName = 'Vasquetas 4.5 Litros';
        unitPrice = Math.round(finalPerLiter * 4.5);
        break;
      case 'litro':
        unitsCount = Math.round(monthlyVolume / 1.0);
        unitName = 'Litros';
        unitPrice = Math.round(finalPerLiter * 1.0 + 16);
        break;
    }

    const estimatedTotalMonthly = Math.round(unitsCount * unitPrice);

    return {
      finalPerLiter,
      discountPct: Math.round(discount * 100),
      unitsCount,
      unitName,
      unitPrice,
      estimatedTotalMonthly,
    };
  };

  const results = calculatePricing();

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Cotización Gelatieri*%0A%0A` +
      `*Cliente:* ${clientName || 'Interesado'}%0A` +
      `*Contacto:* ${clientPhone || 'No proporcionado'} | ${clientEmail || ''}%0A` +
      `*Tipo de negocio:* ${businessType}%0A` +
      `*Línea de helado:* ${productLine}%0A` +
      `*Volumen mensual:* ${monthlyVolume} Litros%0A` +
      `*Presentación:* ${packaging}%0A` +
      `*Receta personalizada:* ${customRecipe ? 'Sí' : 'No'}%0A` +
      `*Estimado:* $${results.unitPrice} MXN por ${results.unitName} (Aprox $${results.estimatedTotalMonthly.toLocaleString()} MXN/mes)`;

    window.open(`https://wa.me/525530491823?text=${message}`, '_blank');
    setSentSuccess(true);
  };

  return (
    <section id="cotizador" className="py-20 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent)' }}>
            <Calculator className="w-3.5 h-3.5" />
            <span>Cotizador</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight" style={{ color: 'var(--text-primary)' }}>
            Calcula el costo de tu pedido
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text-secondary)' }}>
            Elige tu tipo de negocio, la línea de helado y el volumen que necesitas. Te mostramos un estimado al instante, directo de fábrica y sin intermediarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border shadow-sm space-y-6 text-left" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                1. ¿Qué tipo de negocio tienes?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'restaurante', label: 'Restaurante / Hotel' },
                  { id: 'cafeteria', label: 'Cafetería / Bistro' },
                  { id: 'marca_privada', label: 'Marca Propia' },
                  { id: 'retail', label: 'Tienda / Retail' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBusinessType(item.id)}
                    className="p-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer"
                    style={businessType === item.id
                      ? { backgroundColor: 'var(--accent)', color: 'white', borderColor: 'var(--accent)' }
                      : { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }
                    }
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                2. ¿Qué línea de helado te interesa?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'industrial', name: 'Industrial', desc: 'Alto volumen, precio competitivo' },
                  { id: 'comercial', name: 'Comercial', desc: 'Equilibrio calidad-precio' },
                  { id: 'premium', name: 'Premium', desc: 'Ingredientes importados de Italia' },
                ].map((line) => (
                  <div
                    key={line.id}
                    onClick={() => setProductLine(line.id)}
                    className="p-3.5 rounded-xl border cursor-pointer transition-all"
                    style={productLine === line.id
                      ? { borderColor: 'var(--accent)', backgroundColor: 'var(--accent-light)' }
                      : { borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }
                    }
                  >
                    <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>{line.name}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{line.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                3. ¿En qué presentación lo necesitas?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'litro', label: 'Litro', sub: 'Para llevar' },
                  { id: 'cubeta_4l', label: 'Cubeta 4 lts', sub: 'Para restaurantes' },
                  { id: 'cubeta_10l', label: 'Cubeta 10 lts', sub: 'Para alto volumen' },
                  { id: 'vasqueta_4_5l', label: 'Vasqueta 4.5 lts', sub: 'Para vitrinas' },
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackaging(pkg.id)}
                    className="p-2.5 rounded-xl text-left border transition-all cursor-pointer"
                    style={packaging === pkg.id
                      ? { backgroundColor: 'var(--bg-card-dark)', color: 'var(--text-on-dark)', borderColor: 'var(--bg-card-dark)' }
                      : { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }
                    }
                  >
                    <span className="block text-xs font-bold">{pkg.label}</span>
                    <span className="block text-[10px]" style={{ color: packaging === pkg.id ? 'var(--gold)' : 'var(--text-muted)' }}>
                      {pkg.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  4. ¿Cuántos litros necesitas al mes?
                </label>
                <span className="text-sm font-bold px-3 py-0.5 rounded-full" style={{ color: 'var(--accent)', backgroundColor: 'var(--accent-light)' }}>
                  {monthlyVolume} Litros / mes
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="2500"
                step="20"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: 'var(--accent)' }}
              />
              <div className="flex justify-between text-[10px] mt-1 font-medium" style={{ color: 'var(--text-muted)' }}>
                <span>40 L (prueba)</span>
                <span>200 L</span>
                <span>500 L</span>
                <span>1,000 L+</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
              <input
                type="checkbox"
                id="custom-recipe"
                checked={customRecipe}
                onChange={(e) => setCustomRecipe(e.target.checked)}
                className="w-4 h-4 rounded cursor-pointer"
                style={{ accentColor: 'var(--accent)' }}
              />
              <label htmlFor="custom-recipe" className="text-xs cursor-pointer" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>¿Necesitas un sabor a la medida?</strong> Incluye sesiones de prueba y desarrollo en nuestra fábrica.
              </label>
            </div>

          </div>

          <div className="lg:col-span-5 text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 space-y-6 text-left relative overflow-hidden" style={{ backgroundColor: 'var(--bg-card-dark)' }}>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full blur-2xl pointer-events-none" style={{ backgroundColor: 'var(--accent)', opacity: 0.15 }}></div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold block mb-1" style={{ color: 'var(--gold)' }}>
                Tu Estimado
              </span>
              <h3 className="font-editorial text-2xl text-white font-normal">
                Precio aproximado de fábrica
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>Precio por unidad:</span>
                <span className="text-2xl sm:text-3xl font-bold font-mono" style={{ color: 'var(--gold)' }}>
                  ${results.unitPrice} <span className="text-xs font-normal" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>MXN</span>
                </span>
              </div>

              <div className="flex justify-between text-xs pt-2 border-t border-white/10" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
                <span>Unidades al mes:</span>
                <span className="font-semibold text-white" style={{ opacity: 1 }}>~{results.unitsCount} {results.unitName}</span>
              </div>

              <div className="flex justify-between text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
                <span>Descuento por volumen:</span>
                <span className="font-semibold text-emerald-400" style={{ opacity: 1 }}>
                  {results.discountPct > 0 ? `-${results.discountPct}% aplicado` : 'Precio base'}
                </span>
              </div>

              <div className="flex justify-between text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
                <span>Total mensual aprox:</span>
                <span className="font-bold text-white text-sm" style={{ opacity: 1 }}>
                  ${results.estimatedTotalMonthly.toLocaleString()} MXN + IVA
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
                <span>Ingredientes 100% naturales incluidos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
                <span>Entrega refrigerada a tu negocio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
                <span>Sin intermediarios — directo de fábrica</span>
              </div>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-3 pt-2">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre o negocio *"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none"
                  style={{ '--tw-ring-color': 'var(--gold)' } as any}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="tel"
                  placeholder="Teléfono / WhatsApp *"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Enviar Cotización por WhatsApp</span>
              </button>
            </form>

            {sentSuccess && (
              <p className="text-[11px] text-emerald-300 text-center">
                Se ha preparado tu cotización. Un asesor te atenderá de inmediato.
              </p>
            )}

            <p className="text-[10px] text-white/50 text-center">
              * Precios de referencia. El precio final se ajusta según la fórmula y los ingredientes de temporada.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
