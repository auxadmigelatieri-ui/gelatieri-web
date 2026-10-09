import React, { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { B2BServices } from './components/B2BServices';
import { FeaturedFlavors } from './components/FeaturedFlavors';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FactoryLocation } from './components/FactoryLocation';
import { MaquilaSimulator } from './components/MaquilaSimulator';
import { Footer } from './components/Footer';
import { SampleRequestModal } from './components/SampleRequestModal';
import { QuoteModal } from './components/QuoteModal';
import { Flavor, SampleItem } from './types';

export default function App() {
  const [selectedSamples, setSelectedSamples] = useState<SampleItem[]>([
    { id: 'pistache', name: 'Pistache', category: 'clasicos' },
    { id: 'fresa', name: 'Fresa', category: 'clasicos' },
  ]);

  const [isSampleModalOpen, setIsSampleModalOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const hasSeenIntro = (() => {
    try { return sessionStorage.getItem('gelatieri-intro-seen') === '1'; }
    catch { return false; }
  })();
  const [showIntro, setShowIntro] = useState(!hasSeenIntro);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    try { sessionStorage.setItem('gelatieri-intro-seen', '1'); } catch {}
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleToggleSample = (flavor: Flavor) => {
    const exists = selectedSamples.some((s) => s.id === flavor.id);
    if (exists) {
      setSelectedSamples(selectedSamples.filter((s) => s.id !== flavor.id));
      showToast(`Quitaste "${flavor.name}" de tu kit de muestras.`);
    } else {
      if (selectedSamples.length >= 4) {
        showToast('Tu kit ya tiene 4 sabores. Abre el kit para cambiar alguno.');
        setIsSampleModalOpen(true);
        return;
      }
      setSelectedSamples([
        ...selectedSamples,
        { id: flavor.id, name: flavor.name, category: flavor.category },
      ]);
      showToast(`¡Agregaste "${flavor.name}" a tu kit de muestras! (${selectedSamples.length + 1}/4)`);
    }
  };

  const handleRemoveSample = (id: string) => {
    setSelectedSamples(selectedSamples.filter((s) => s.id !== id));
  };

  const handleAddSampleFromModal = (id: string, name: string, category: string) => {
    if (selectedSamples.length >= 4) return;
    setSelectedSamples([...selectedSamples, { id, name, category }]);
  };

  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3A0717] text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      <Navbar
        selectedSamples={selectedSamples}
        onOpenSampleModal={() => setIsSampleModalOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <main className="flex-1">
        <Hero
          onOpenQuote={() => setIsQuoteModalOpen(true)}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        <OurStory />

        <B2BServices
          onOpenQuote={() => setIsQuoteModalOpen(true)}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
        />

        <FeaturedFlavors
          selectedSamples={selectedSamples}
          onToggleSample={handleToggleSample}
          onOpenSampleModal={() => setIsSampleModalOpen(true)}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        <Testimonials />

        <FactoryLocation />

        <MaquilaSimulator />

        <FaqSection />
      </main>

      <Footer />

      <ThemeToggle />

      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        selectedSamples={selectedSamples}
        onRemoveSample={handleRemoveSample}
        onAddSample={handleAddSampleFromModal}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
    </ThemeProvider>
  );
}
