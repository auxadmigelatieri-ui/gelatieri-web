export type FlavorCategory = 'clasicos' | 'frutas' | 'bienestar' | 'gastronomicos';

export interface Flavor {
  id: string;
  name: string;
  italianName: string;
  category: FlavorCategory;
  description: string;
  ingredients: string[];
  tastingNotes: string[];
  allergens: string[];
  fatContent: string;
  sugarProfile: string;
  image: string;
  isBestseller?: boolean;
  isNew?: boolean;
  isVegan?: boolean;
  isSugarFree?: boolean;
  recommendedPairing?: string;
  availableFormats: string[];
}

export interface QuoteCalculation {
  businessType: 'restaurante' | 'marca_privada' | 'cafeteria' | 'evento' | 'retail';
  monthlyVolumeLiters: number;
  productLine: 'clasica' | 'sorbetto' | 'sin_azucar' | 'personalizada';
  packaging: 'cubeta_4l' | 'cubeta_5l' | 'pinta_473ml' | 'litro' | 'vasito_120ml';
  customRecipe: boolean;
  deliveryZone: 'cdmx' | 'edomex' | 'republica';
}

export interface SampleItem {
  id: string;
  name: string;
  category: string;
}

export interface SampleRequest {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  location: string;
  selectedFlavors: string[];
  preferredDate?: string;
  notes?: string;
}
