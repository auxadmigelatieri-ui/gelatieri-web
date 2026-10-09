import { Flavor } from '../types';

export const FLAVORS_DATA: Flavor[] = [
  {
    id: 'vainilla',
    name: 'Vainilla',
    italianName: 'Vaniglia',
    category: 'clasicos',
    description: '',
    ingredients: [],
    tastingNotes: [],
    allergens: [],
    fatContent: '',
    sugarProfile: '',
    image: '/images/flavors/vainilla.jpg',
    isBestseller: true,
    availableFormats: []
  },
  {
    id: 'fresa',
    name: 'Fresa',
    italianName: 'Fragola',
    category: 'clasicos',
    description: '',
    ingredients: [],
    tastingNotes: [],
    allergens: [],
    fatContent: '',
    sugarProfile: '',
    image: '/images/flavors/fresa.jpg',
    isBestseller: true,
    availableFormats: []
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    italianName: 'Cioccolato',
    category: 'clasicos',
    description: '',
    ingredients: [],
    tastingNotes: [],
    allergens: [],
    fatContent: '',
    sugarProfile: '',
    image: '/images/flavors/chocolate.jpg',
    isBestseller: true,
    availableFormats: []
  },
  {
    id: 'pistache',
    name: 'Pistache',
    italianName: 'Pistacchio',
    category: 'clasicos',
    description: '',
    ingredients: [],
    tastingNotes: [],
    allergens: [],
    fatContent: '',
    sugarProfile: '',
    image: '/images/flavors/pistache.jpg',
    isBestseller: true,
    availableFormats: []
  },
  {
    id: 'limon',
    name: 'Limón',
    italianName: 'Limone',
    category: 'frutas',
    description: '',
    ingredients: [],
    tastingNotes: [],
    allergens: [],
    fatContent: '',
    sugarProfile: '',
    image: '/images/flavors/limon.jpg',
    isBestseller: true,
    availableFormats: []
  },
  {
    id: 'ferrero',
    name: 'Ferrero',
    italianName: 'Ferrero',
    category: 'clasicos',
    description: '',
    ingredients: [],
    tastingNotes: [],
    allergens: [],
    fatContent: '',
    sugarProfile: '',
    image: '/images/flavors/ferrero.jpg',
    isBestseller: true,
    availableFormats: []
  }
];

export const CATEGORY_LABELS: Record<string, { title: string; subtitle: string }> = {
  todos: {
    title: 'Catálogo Completo',
    subtitle: 'Más de 35 formulaciones disponibles y desarrollo a medida para tu carta'
  },
  clasicos: {
    title: 'Tradizione Italiana',
    subtitle: 'Clásicos eternos formulados con pastas puras italianas y leche fresca'
  },
  frutas: {
    title: 'Sorbettos & Veganos (0% Lácteos)',
    subtitle: 'Fruta fresca de temporada, base agua purificada y textura cremosa natural'
  }
};
