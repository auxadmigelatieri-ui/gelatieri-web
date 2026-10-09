import React, { useState } from 'react';
import { DollarSign, TrendingUp, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [menuPrice, setMenuPrice] = useState<number>(120); // MXN sale price on dessert menu
  const [servingsPerDay, setServingsPerDay] = useState<number>(30); // portions sold daily
  const [operatingDays, setOperatingDays] = useState<number>(26); // days open per month

  // Authentic food cost metrics for 90g scoop of artisan gelato in Mexico
  const costPerScoop = 16.5; // Average cost per 90g scoop in Gelatieri 4L tub
  const garnishCost = 8.5; // Crumble, wafer, or espresso shot
  const totalCostPerDessert = costPerScoop + garnishCost;

  const grossProfitPerDessert = Math.max(0, menuPrice - totalCostPerDessert);
  const marginPercentage = menuPrice > 0 ? Math.round((grossProfitPerDessert / menuPrice) * 100) : 0;

  const monthlyDesserts = servingsPerDay * operatingDays;
  const monthlyRevenue = monthlyDesserts * menuPrice;
  const monthlyProfit = monthlyDesserts * grossProfitPerDessert;

  return (
    <section id="rentabilidad" className="py-20 bg-[#FAF7F5] border-b border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Food Cost & Rentabilidad Horeca</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#3A0717] font-normal leading-tight">
            Calcula el retorno de servir Gelatieri en tu carta de postres
          </h2>
          <p className="mt-3 text-[#66544E] text-base">
            El postre con el mayor margen bruto de tu restaurante, con cero merma de preparación y servicio al minuto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#D8C7BC] shadow-sm space-y-6 text-left">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3A0717]">
                  Precio de venta en tu carta de postres
                </label>
                <span className="text-base font-bold text-[#68102B] font-mono">
                  ${menuPrice} MXN
                </span>
              </div>
              <input
                type="range"
                min="65"
                max="220"
                step="5"
                value={menuPrice}
                onChange={(e) => setMenuPrice(Number(e.target.value))}
                className="w-full accent-[#68102B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8C766B] mt-1">
                <span>$65 MXN (Cafetería casual)</span>
                <span>$120 MXN (Bistro / Restaurante)</span>
                <span>$220 MXN (Fine Dining)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3A0717]">
                  Porciones servidas por día
                </label>
                <span className="text-base font-bold text-[#68102B] font-mono">
                  {servingsPerDay} postres / día
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={servingsPerDay}
                onChange={(e) => setServingsPerDay(Number(e.target.value))}
                className="w-full accent-[#68102B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8C766B] mt-1">
                <span>10 al día</span>
                <span>30 al día</span>
                <span>60 al día</span>
                <span>120 al día</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3A0717]">
                  Días de operación al mes
                </label>
                <span className="text-base font-bold text-[#68102B] font-mono">
                  {operatingDays} días
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="31"
                step="1"
                value={operatingDays}
                onChange={(e) => setOperatingDays(Number(e.target.value))}
                className="w-full accent-[#68102B] cursor-pointer"
              />
            </div>

            {/* In-house vs Gelatieri Comparison */}
            <div className="p-4 rounded-xl bg-[#FAF7F5] border border-[#E0D4CB] space-y-2 text-xs text-[#5A4944]">
              <div className="flex items-center gap-2 text-[#3A0717] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Costo del helado por porción (90g): ~${costPerScoop.toFixed(2)} MXN</span>
              </div>
              <div className="flex items-center gap-2 text-[#5A4944]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Costo de emplatado (teja, coulis o café): ~${garnishCost.toFixed(2)} MXN</span>
              </div>
              <p className="text-[11px] text-[#7A6963] pt-1 border-t border-[#E8DFD8]">
                Ahorras un 100% en inversión de mantecadoras italianas ($30,000+ USD) y eliminas mermas de producción casera.
              </p>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-[#3A0717] text-white p-8 sm:p-10 rounded-2xl shadow-xl border border-white/10 text-left space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C59A64] font-bold block mb-1">
                Análisis de Rentabilidad Mensual
              </span>
              <h3 className="font-editorial text-3xl text-white font-normal">
                Ganancia Neta Estimada
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-[#D8C7BC] block">Margen Bruto</span>
                <span className="text-3xl sm:text-4xl font-bold text-emerald-400 font-mono block mt-1">
                  {marginPercentage}%
                </span>
                <span className="text-[10px] text-[#D8C7BC]">Food cost menor a 22%</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] text-[#D8C7BC] block">Utilidad por Plato</span>
                <span className="text-3xl sm:text-4xl font-bold text-[#C59A64] font-mono block mt-1">
                  ${Math.round(grossProfitPerDessert)} <span className="text-xs font-normal">MXN</span>
                </span>
                <span className="text-[10px] text-[#D8C7BC]">Por cada porción</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs text-emerald-200">Utilidad Bruta Mensual:</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  +${Math.round(monthlyProfit).toLocaleString()} MXN
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/70">
                Calculado sobre {monthlyDesserts} postres vendidos al mes sin costo de personal pastelero adicional.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/525530491823?text=Hola%20Gelatieri,%20quiero%20integrar%20su%20gelato%20en%20mi%20carta%20de%20postres.%20Me%20gustar%C3%ADa%20recibir%20precios%20Horeca%20para%20restaurantes."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#68102B] hover:bg-[#7D1434] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Solicitar Lista de Precios Horeca</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
