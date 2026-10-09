import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, Sparkles, MessageCircle, ChevronRight } from 'lucide-react';
import { SampleItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  selectedSamples: SampleItem[];
  onOpenSampleModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedSamples,
  onOpenSampleModal,
  onOpenQuoteModal,
}) => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoSrc = theme === 'presencia'
    ? '/images/logos/presencia-negativo.png'
    : theme === 'clasico'
      ? '/images/logos/clasico-positivo.png'
      : '/images/logos/minimalista-positivo.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nuestra Historia', href: '#sobre-nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sabores Destacados', href: '#sabores-destacados' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <div className="text-xs py-2 px-4 border-b" style={{ backgroundColor: 'var(--bg-card-dark, var(--brand-cacao))', color: 'var(--text-on-dark)', borderColor: 'rgba(0,0,0,0.15)' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">Fábrica en Azcapotzalco, CDMX • Envíos en frío a toda la República</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
            <a
              href="https://wa.me/525530491823?text=Hola%20Gelatieri,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20mi%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#F2ECE7]/90 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Ventas</span>
            </a>
            <span className="text-[#F2ECE7]/30">|</span>
            <a href="mailto:cliente@gelatieri.com" className="hover:text-white transition-colors">
              cliente@gelatieri.com
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? 'backdrop-blur-md shadow-sm py-3'
            : 'py-4'
        }`}
        style={{ backgroundColor: isScrolled ? 'color-mix(in srgb, var(--bg-secondary) 95%, transparent)' : 'var(--bg-secondary)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img
              src={logoSrc}
              alt="Gelatieri"
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors relative py-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              id="navbar-sample-button"
              onClick={onOpenSampleModal}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full border transition-all text-xs font-medium shadow-xs"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
              title="Ver kit de muestras seleccionado"
            >
              <ShoppingBag className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              <span className="hidden sm:inline">Kit de Muestras</span>
              <span className="w-5 h-5 rounded-full text-white text-[11px] font-bold flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
                {selectedSamples.length}
              </span>
            </button>

            <button
              id="navbar-quote-cta"
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-medium tracking-wide uppercase shadow-sm hover:shadow-md transition-all duration-200"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cotizar</span>
            </button>

            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex flex-col justify-start pt-16">
          <div className="border-b p-6 shadow-xl max-h-[85vh] overflow-y-auto" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
            <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <img src={logoSrc} alt="Gelatieri" className="h-10 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full"
                style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-medium border-b"
                  style={{ color: 'var(--text-primary)', borderColor: 'var(--border-light)' }}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSampleModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border font-medium text-sm"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Kit de Muestras ({selectedSamples.length} seleccionados)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-medium text-sm shadow-sm"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Cotizar Suministro o Maquila</span>
              </button>
            </div>

            <div className="mt-6 pt-4 border-t text-xs flex flex-col gap-2" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
              <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Atención directa de fábrica:</p>
              <p>Norte 79 B No 117, Azcapotzalco, CDMX</p>
              <a href="tel:5530491823" className="flex items-center gap-1 font-medium" style={{ color: 'var(--accent)' }}>
                <Phone className="w-3.5 h-3.5" /> +52 (55) 3049-1823
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
