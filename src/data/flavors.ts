import type { Flavor } from '../types';

const img = (name: string) => `${import.meta.env.BASE_URL}images/flavors/${name}.webp`;

// Category dot colours follow the brand rule: vanilla = Miele, pistachio = Pistacchio,
// chocolate = Cacao, citrus and red fruit = Arancia.
export const FLAVORS: Flavor[] = [
  { id: 'pistache', name: 'Pistache', italian: 'Pistacchio', dot: 'var(--color-pistacchio)', image: img('pistache') },
  { id: 'vainilla', name: 'Vainilla', italian: 'Vaniglia', dot: 'var(--color-miele)', image: img('vainilla') },
  { id: 'chocolate', name: 'Chocolate', italian: 'Cioccolato', dot: 'var(--color-cacao)', image: img('chocolate') },
  { id: 'fresa', name: 'Fresa', italian: 'Fragola', dot: 'var(--color-arancia)', image: img('fresa') },
  { id: 'limon', name: 'Limón', italian: 'Limone', dot: 'var(--color-arancia)', image: img('limon') },
  { id: 'ferrero', name: 'Ferrero', italian: 'Nocciola e cioccolato', dot: 'var(--color-cacao)', image: img('ferrero') },
];

export const MAX_SAMPLES = 4;
