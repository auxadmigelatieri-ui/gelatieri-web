export const CONTACT = {
  whatsapp: '525530491823',
  phoneDisplay: '+52 55 3049 1823',
  emails: ['cliente@gelatieri.com', 'rodolfo@gelatieri.com'],
  addressLines: ['Norte 79 B No. 117, Col. Un Hogar Para Cada Trabajador', 'Azcapotzalco, C.P. 02060, Ciudad de México'],
  hours: 'Lunes a viernes, 8:00 a 17:30 h',
} as const;

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const NAV = [
  { id: 'historia', label: 'Historia' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'sabores', label: 'Sabores' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'contacto', label: 'Contacto' },
] as const;

export const HERO = {
  tagline: 'Gelato artesanal, listo para tu negocio.',
  text: 'Elaboramos helado con recetas italianas e ingredientes naturales. Surtimos a restaurantes, hoteles y cadenas, y fabricamos helado con tu propia marca.',
  benefits: [
    'Ingredientes 100 % naturales',
    'Sin grasas vegetales',
    'Recetas italianas',
    'Fruta fresca mexicana',
    'Opciones sin azúcar',
    'Entrega en frío',
  ],
  note: 'Atención directa desde nuestra fábrica en Azcapotzalco, Ciudad de México.',
  cards: [
    { label: '20 años de oficio', title: 'Desde 2006', text: 'Gelato con técnica italiana hecho en México' },
    { label: 'Entrega refrigerada', title: 'Siempre en frío', text: 'Entregas programadas en CDMX y envíos a toda la República' },
  ],
} as const;

export const STORY = {
  lead: 'Nacimos con una idea sencilla: que los restaurantes de México tuvieran un helado de verdad, hecho con ingredientes reales y recetas italianas.',
  kicker: 'Cómo empezó',
  title: 'De una fábrica a cerca de 200 clientes',
  statement:
    'En 2006, casi todos los restaurantes de la Ciudad de México servían helado lleno de aire, con saborizantes y grasas vegetales. Abrimos una fábrica para hacer lo contrario.',
  body: [
    'Elaboramos con el método del gelato: mezcla lenta, poco aire y una textura densa que se distingue al primer bocado. Lo producimos en Azcapotzalco y lo entregamos en frío, listo para servir.',
    'Hoy abastecemos a cerca de 200 restaurantes, hoteles, cafeterías y marcas en todo el país.',
  ],
  stats: [
    { value: 20, label: 'Años elaborando gelato', suffix: '' },
    { value: 200, prefix: '~', label: 'Clientes activos en México' },
    { value: 35, suffix: '+', label: 'Sabores en catálogo' },
    { value: 100000, suffix: ' L', label: 'Capacidad mensual en dos plantas' },
  ],
  values: [
    {
      title: 'Ingredientes puros',
      text: 'Leche fresca, fruta de temporada y pastas importadas de Italia. Sin grasas vegetales ni colorantes.',
    },
    {
      title: 'Calidad constante',
      text: 'Misma fórmula y mismo control en cada lote. El helado que pruebas hoy es el que recibes siempre.',
    },
    {
      title: 'Ritmo de cocina',
      text: 'Cumplimos horarios, cuidamos la cadena de frío y nos ajustamos a tu volumen.',
    },
    {
      title: 'Técnica italiana, origen mexicano',
      text: 'Recetas de la tradición heladera italiana con fruta de productores locales.',
    },
  ],
} as const;

export const PRODUCT_LINES = [
  {
    id: 'premium',
    name: 'Premium',
    title: 'Línea Premium',
    seal: 'Más solicitada',
    text: 'Pastas importadas de Italia, fruta fresca de temporada y vainilla de Madagascar en vaina. Para menús de autor y hoteles boutique.',
    points: ['Ingredientes de origen importado', 'Sabores exclusivos a medida', 'Ideal para menús de autor y hoteles boutique', 'Densidad y textura de gelato auténtico'],
    cta: { label: 'Cotizar línea Premium', action: 'quote' },
  },
  {
    id: 'comercial',
    name: 'Comercial',
    title: 'Línea Comercial',
    text: 'El equilibrio entre calidad y costo. La elección de restaurantes y cafeterías que quieren servir algo superior sin complicarse.',
    points: ['Ingredientes naturales', 'Más de 25 sabores disponibles', 'Buena relación calidad-precio'],
    cta: { label: 'Pedir muestras', action: 'samples' },
  },
  {
    id: 'industrial',
    name: 'Industrial',
    title: 'Línea Industrial',
    text: 'Para negocios de alto volumen que necesitan un helado confiable a precio competitivo. Sabores clásicos con textura consistente.',
    points: ['Precio por volumen', 'Sabores populares siempre disponibles'],
    cta: { label: 'Solicitar cotización', action: 'quote' },
  },
] as const;

export const SERVICES = [
  {
    id: 'suministro',
    label: 'Suministro',
    title: 'Restaurantes, hoteles y cadenas',
    text: 'Te surtimos helado listo para servir en cubetas profesionales. Tú solo necesitas un congelador; nosotros cuidamos la producción, la calidad y la entrega en frío.',
    points: [
      ['Entregas programadas', 'Cada semana, en frío y a tiempo.'],
      ['Listo para servir', 'Sale de la cubeta con la textura correcta.'],
      ['Costo claro por porción', 'Para que el postre deje margen.'],
      ['CDMX y República', 'Valle de México y envíos refrigerados a todo el país.'],
    ],
    cta: 'samples',
  },
  {
    id: 'maquila',
    label: 'Maquila y marca propia',
    title: 'Tu marca de helado, hecha aquí',
    text: 'Desarrollamos la receta, la producimos y la envasamos con tu etiqueta, lista para vender. Todo bajo acuerdo de confidencialidad.',
    points: [
      ['Tu receta o la nuestra', 'Creamos sabores exclusivos o fabricamos tu fórmula.'],
      ['Lotes desde 50 litros', 'Empieza con un piloto y escala después.'],
      ['Etiquetado en regla', 'Asesoría para cumplir la NOM-051.'],
      ['Varios formatos', 'Vasquetas, litros, cubetas o vasos individuales.'],
    ],
    cta: 'quote',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'El pistache y la stracciatella tienen una textura que mis comensales confunden con helado importado. Desde que trabajamos con Gelatieri, el postre es de lo más comentado de la carta.',
    name: 'Chef Matteo V.',
    role: 'Chef ejecutivo',
    business: 'Trattoria di Roma · Polanco',
    since: 2019,
  },
  {
    quote:
      'Llevamos más de cuatro años usando su vainilla y su fior di latte para el affogato. Las entregas llegan a tiempo y en perfecto estado.',
    name: 'Sofía Morales',
    role: 'Directora de Alimentos y Bebidas',
    business: 'Grupo Botanica · Condesa',
    since: 2020,
  },
  {
    quote:
      'Quería lanzar mi propia marca sin tener fábrica. Gelatieri desarrolló la receta, me asesoró con el etiquetado y me entrega las pintas listas para vender.',
    name: 'Rodrigo Alarcón',
    role: 'Fundador',
    business: 'Nieve de Barrio · marca propia',
    since: 2021,
  },
  {
    quote:
      'Antes teníamos nuestra propia máquina y era un problema constante. Con el suministro de Gelatieri eliminamos la merma y el margen del postre mejoró.',
    name: 'Mauricio A.',
    role: 'Gerente de operaciones',
    business: 'Casona San Jerónimo · San Ángel',
    since: 2017,
  },
] as const;

export const FAQS = [
  {
    q: '¿Cuál es el pedido mínimo?',
    a: 'Para restaurantes y cafeterías en la Ciudad de México, dos cubetas (de 8 a 10 litros), con sabores combinados. Para maquila o marca propia empezamos con lotes de prueba desde 50 litros.',
  },
  {
    q: '¿Cómo llega el helado en buenas condiciones?',
    a: 'Sale de nuestra cámara de frío en vehículos refrigerados y se entrega en mano a tu equipo. Fuera de la Ciudad de México usamos transporte refrigerado especializado con hielo seco.',
  },
  {
    q: '¿Pueden crear un sabor exclusivo?',
    a: 'Sí. Desarrollamos sabores con ingredientes locales o recetas de autor, bajo acuerdo de confidencialidad para que la fórmula sea solo tuya.',
  },
  {
    q: '¿Cada cuánto entregan?',
    a: 'En la Ciudad de México y zona metropolitana, cada semana, con opción de entregas urgentes. En el interior de la República la frecuencia depende del volumen y la ruta; normalmente es quincenal o mensual.',
  },
  {
    q: '¿Tienen opciones sin azúcar o veganas?',
    a: 'Sí. Tenemos líneas sin azúcar, endulzadas con sucralosa, veganas y kosher, con la misma textura que el resto del catálogo.',
  },
  {
    q: '¿Qué normas cumplen?',
    a: 'Operamos bajo la NOM-243 para productos lácteos y helados, con control de calidad por lote. Si vendes al público con tu marca, te asesoramos con el etiquetado conforme a la NOM-051.',
  },
  {
    q: '¿Cómo empiezo?',
    a: 'Escríbenos por WhatsApp o con el formulario. Te enviamos un kit de muestras sin costo; eliges sabores y acordamos volumen, presentación y frecuencia. Después empezamos a surtirte.',
  },
] as const;

export const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'] as const;
