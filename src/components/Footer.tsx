import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const logoSrc = theme === 'presencia'
    ? '/images/logos/presencia-negativo.png'
    : theme === 'clasico'
      ? '/images/logos/clasico-negativo.png'
      : '/images/logos/minimalista-negativo.png';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t transition-colors duration-500" style={{ backgroundColor: 'var(--bg-card-dark)', color: 'var(--text-on-dark)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-left">

          <div className="lg:col-span-2 space-y-4">
            <img src={logoSrc} alt="Gelatieri" className="h-10 w-auto" />

            <p className="text-xs leading-relaxed max-w-sm font-light" style={{ color: 'var(--text-on-dark)', opacity: 0.7 }}>
              Fábrica mexicana de helado artesanal con recetas italianas desde 2006. Ingredientes naturales, calidad constante y entrega refrigerada para restaurantes, hoteles y marcas en todo México.
            </p>

            <div className="text-[11px] space-y-1 pt-1" style={{ color: 'var(--text-on-dark)', opacity: 0.6 }}>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
                <span>Norte 79 B No 117, Azcapotzalco, CDMX</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
                <span>cliente@gelatieri.com | rodolfo@gelatieri.com</span>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Servicios
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.75 }}>
              <li><a href="#servicios" className="hover:text-white transition-colors">Líneas de Producto</a></li>
              <li><a href="#sabores-destacados" className="hover:text-white transition-colors">Sabores Destacados</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Suministro para Restaurantes</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Maquila y Marca Propia</a></li>
              <li><a href="#cotizador" className="hover:text-white transition-colors">Cotizador de Costos</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Gelatieri
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.75 }}>
              <li><a href="#sobre-nosotros" className="hover:text-white transition-colors">Nuestra Historia</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios de Clientes</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto y Ubicación</a></li>
              <li><a href="https://wa.me/525530491823" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Agendar Visita a la Fábrica</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Contacto Directo
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-on-dark)', opacity: 0.6 }}>
              Atención personalizada para restaurantes, hoteles y marcas que buscan un proveedor de helado de calidad.
            </p>
            <a
              href="https://wa.me/525530491823"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-white text-xs font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <span>WhatsApp Ventas</span>
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'var(--text-on-dark)', opacity: 0.5 }}>
          <div>
            <p>&copy; {new Date().getFullYear()} Gelatieri, S.A. de C.V. Todos los derechos reservados.</p>
            <p className="text-[10px] mt-0.5" style={{ opacity: 0.7 }}>
              Hecho con dedicación en la Ciudad de México.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            style={{ color: 'var(--text-on-dark)', opacity: 0.75 }}
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
