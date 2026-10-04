export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  applications?: string[];
  finishes?: string[];
  glassTypes?: string[];
  ceilingTypes?: string[];
  imageSrc: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  aspect: 'landscape' | 'portrait' | 'square';
  imageSrc: string;
  summary: string;
}

export const COMPANY_DETAILS = {
  name: 'ALU MIDAS (PVT) LTD',
  brandName: 'ALU MIDAS',
  tagline: 'Elegant Aluminium. Exceptional Craftsmanship.',
  experienceYears: '25+',
  address: {
    line1: 'No. 586/2/A/1, Maha Katuwana Road',
    city: 'Homagama',
    country: 'Sri Lanka',
    full: 'No. 586/2/A/1, Maha Katuwana Road, Homagama, Sri Lanka',
  },
  phone: '0777 499 322',
  phoneTel: '+94777499322',
  whatsapp: '077 218 6710',
  whatsappUrl: 'https://wa.me/94772186710',
  email: 'alumidaspvt@gmail.com',
  workingHours: 'Monday – Saturday: 8:30 AM – 5:30 PM',
  facebookUrl: 'https://www.facebook.com/share/1d8sTheTXq/',
  googleMapsUrl: 'https://maps.app.goo.gl/e7VAcU5qvswDEznF7',
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'aluminium-fabrication',
    title: 'Aluminium Fabrication',
    subtitle: 'Safe, manufacturer-specified fabrication with practical precision at the centre.',
    description:
      'We work with manufacturer-specified aluminium profile systems and recommended production methods to deliver safe, reliable and long-lasting fabrications. We collaborate closely with clients and architects to understand their designs and translate ideas into practical, buildable aluminium solutions without compromising safety or long-term reliability.',
    keyPoints: [
      'Manufacturer-specified aluminium profiles',
      'Safe, reliable production methods',
      'Accurate and meticulous fabrication',
      'Practical architectural design interpretation',
      'Reliable installation and alignment',
      'Rigorous attention to detail at every joint',
    ],
    imageSrc: '/src/assets/images/hero_architectural_aluminium_1791129172749.jpg',
  },
  {
    id: 'doors-windows',
    title: 'Aluminium Doors & Windows',
    subtitle: 'Designed Around Your Vision. Built for Long-Term Performance.',
    description:
      'From simple functional doors and windows to distinctive architectural designs, we work with clients and architects to create solutions that match the intended appearance, dimensions and practical requirements. When an exact design is not advisable because of safety, structural practicality or long-term reliability, we recommend the closest practical alternative that preserves as much of the original appearance and function as possible.',
    keyPoints: [
      'Architectural sliding, casement, folding, and pivot configurations',
      'Precision weather-stripping and durable hardware integration',
      'Custom dimensions and opening sizes using manufacturer-specified systems',
      'Structural safety evaluation for large glass and wind-load areas',
      'Smooth operation and long-term acoustic & thermal performance',
    ],
    finishes: [
      'Natural Aluminium (Anodized)',
      'Powder Coating',
      'RAL Colour Options',
      'Wood Finish Aluminium',
      'Bronze Finish',
      'Super Durable Finishes',
      'Other Manufacturer-Specified Finishes',
    ],
    imageSrc: '/src/assets/images/doors_windows_craft_1791129183953.jpg',
  },
  {
    id: 'glass-solutions',
    title: 'Glass Solutions',
    subtitle: 'Clean architectural glass applications engineered for safety and aesthetic clarity.',
    description:
      'We provide complete architectural glass solutions for interior and exterior applications, carefully balancing visual lightness with safety and practical structural support. Every solution is fabricated and installed to ensure clean lines, structural reliability, and enduring performance.',
    keyPoints: [
      'Clean appearance and high visual transparency',
      'Rigorous safety and structural considerations',
      'Practical engineering for wind, water, and load exposure',
      'Appropriate glass selection tailored to each project',
      'Professional fabrication, jointing, and weather seal installation',
    ],
    applications: [
      'Glass Roofs & Canopies',
      'Glass Partitions & Office Dividers',
      'Glass Cladding',
      'Architectural Glass Features',
      'Interior Glass Applications',
      'Exterior Glass Applications',
    ],
    glassTypes: [
      'Clear Glass',
      'Tempered Glass',
      'Double Glazing',
      'Tinted Glass',
      'Heat Control Glass',
      'Special Coloured Glass',
    ],
    imageSrc: '/src/assets/images/glass_solutions_partition_1791129198066.jpg',
  },
  {
    id: 'cladding-facades',
    title: 'Cladding & Facades',
    subtitle: 'Premium architectural exterior solutions with clean lines and refined detailing.',
    description:
      'We provide cladding and facade solutions for commercial buildings, residences, and architectural spaces. Our focus is on clean architectural lines, accurate panel alignment, durable weather-resistant exterior applications, and seamless integration with the overall building design.',
    keyPoints: [
      'Modern architectural appearance with sharp shadow reveals',
      'Clean lines and millimeter-accurate panel alignment',
      'Weather-resistant exterior applications using proven systems',
      'Professional jointing, substructure alignment, and finishing',
      'Harmonious integration with existing masonry and glazing',
    ],
    applications: [
      'Aluminium Cladding',
      'Facade Feature Work',
      'Architectural Facade Detailing',
      'Exterior Panel Applications',
      'Feature Walls',
      'Building Entrance & Frontage Treatments',
      'Custom Facade Configurations',
    ],
    imageSrc: '/src/assets/images/cladding_facade_modern_1791129210715.jpg',
  },
  {
    id: 'ceiling-works',
    title: 'Ceiling Works',
    subtitle: 'Modern interior ceiling systems with accurate levels, flush joints, and clean finishing.',
    description:
      'We provide a range of ceiling systems and finishes for residential, office, commercial, and interior spaces. We focus on clean finishing, accurate levels, practical installation, and coordination with lighting and interior design requirements.',
    keyPoints: [
      'Pristine surface finishing and sharp perimeter details',
      'Accurate laser levels and structural grid alignment',
      'Seamless coordination with recessed lighting and air distribution',
      'Durable, moisture-tolerant materials suitable for Sri Lankan climate',
      'Practical installation with long-term maintenance accessibility',
    ],
    ceilingTypes: [
      'Gypsum Ceilings',
      '2×2 Ceiling Systems',
      'Suspended Ceilings',
      'I-Panel Ceilings',
      'Feature Ceilings',
      'Custom Ceiling Designs',
      'Project-Specific Ceiling Systems',
    ],
    imageSrc: '/src/assets/images/ceiling_works_interior_1791129222716.jpg',
  },
  {
    id: 'interior-exterior',
    title: 'Interior & Exterior Solutions',
    subtitle: 'Integrated aluminium, glass, and architectural solutions tailored to client requirements.',
    description:
      'We provide integrated aluminium and glass solutions that help bring architectural and design concepts into reality. We focus strictly on aluminium, glass, ceilings, and related architectural applications—bringing customized design configurations to life with manufacturer-specified profiles.',
    keyPoints: [
      'Customized architectural configurations and spatial dividers',
      'Integrated aluminium and glass framing systems',
      'Clean interior screens and private zone transitions',
      'Exterior architectural accents and weather screens',
      'Collaborative development with clients and project architects',
    ],
    applications: [
      'Aluminium & Glass Partitions',
      'Interior & Exterior Enclosures',
      'Interior Architectural Features',
      'Exterior Architectural Features',
      'Entrance Solutions & Portals',
      'Screens & Privacy Elements',
      'Functional & Decorative Aluminium/Glass Installations',
    ],
    imageSrc: '/src/assets/images/hero_architectural_aluminium_1791129172749.jpg',
  },
];

export interface FinishOption {
  name: string;
  subtitle: string;
  description: string;
  colorCode: string;
  sampleImage: string;
  sampleTitle: string;
}

export const FINISH_OPTIONS: FinishOption[] = [
  {
    name: 'Natural Aluminium',
    subtitle: 'Classic Anodized',
    description: 'Clean metallic appearance highlighting the raw industrial elegance and natural corrosion resistance of aluminium.',
    colorCode: '#D1D5DB',
    sampleImage: '/src/assets/images/finish_natural_anodized_1791132852925.jpg',
    sampleTitle: 'Natural Anodized Aluminium Casement Window Sample',
  },
  {
    name: 'Powder Coating',
    subtitle: 'Durable Solid Finish',
    description: 'Electrostatic powder finish providing robust protection against humidity, UV exposure, and everyday wear.',
    colorCode: '#1E293B',
    sampleImage: '/src/assets/images/finish_powder_coated_black_1791132868678.jpg',
    sampleTitle: 'Matte Black Powder-Coated Sliding Door System Sample',
  },
  {
    name: 'RAL Colour Options',
    subtitle: 'Tailored Palette',
    description: 'Wide spectrum of standardized RAL architectural shades to match interior design themes and exterior building elevations.',
    colorCode: '#0B1340',
    sampleImage: '/src/assets/images/finish_ral_custom_colour_1791132915015.jpg',
    sampleTitle: 'Architectural Anthracite Grey RAL Powder-Coated Window Sample',
  },
  {
    name: 'Wood Finish',
    subtitle: 'Sublimated Timber Grain',
    description: 'The organic warmth of timber combined with the maintenance-free, termite-proof durability of aluminium.',
    colorCode: '#78350F',
    sampleImage: '/src/assets/images/finish_wood_grain_aluminium_1791132888736.jpg',
    sampleTitle: 'Sublimated Wood-Grain Timber Aluminium Door & Window Sample',
  },
  {
    name: 'Bronze Finish',
    subtitle: 'Architectural Tone',
    description: 'Subtle metallic bronze tone conveying quiet prestige and timeless architectural character.',
    colorCode: '#451A03',
    sampleImage: '/src/assets/images/finish_bronze_metallic_1791132900571.jpg',
    sampleTitle: 'Architectural Dark Bronze Finished Casement Window Sample',
  },
  {
    name: 'Super Durable Finishes',
    subtitle: 'Extreme Weathering',
    description: 'Advanced coating technologies formulated for high-exposure environments and lasting exterior resistance.',
    colorCode: '#334155',
    sampleImage: '/src/assets/images/doors_windows_craft_1791129183953.jpg',
    sampleTitle: 'Super Durable High-Exposure Architectural Sliding Door Sample',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: '25+ Years of Experience',
    description: 'More than 25 years of hands-on practical experience in aluminium fabrication and related architectural work across Sri Lanka.',
  },
  {
    number: '02',
    title: 'Custom Designs',
    description: 'Custom designs, dimensions, and configurations developed around client and architect requirements without compromise.',
  },
  {
    number: '03',
    title: 'Manufacturer-Specified Systems',
    description: 'Reliable fabrication using appropriate manufacturer-specified aluminium profiles and proven production methods.',
  },
  {
    number: '04',
    title: 'Safety & Long-Term Reliability',
    description: 'We prioritize structural safety, wind load resistance, and long-term durability rather than focusing only on initial appearance.',
  },
  {
    number: '05',
    title: 'Quality Over Quantity',
    description: 'Our core philosophy has always been craftsmanship and dependable results rather than rushing mass-volume output.',
  },
  {
    number: '06',
    title: 'Classic. Modern. Luxury.',
    description: 'We develop tailored solutions across diverse architectural styles—from minimalist modern to classic elegance.',
  },
  {
    number: '07',
    title: 'Manufacturing Warranty',
    description: 'Where applicable, we provide manufacturing warranty according to the relevant product and workmanship terms.',
  },
  {
    number: '08',
    title: 'After-Service Support',
    description: 'We value long-term client relationships and provide responsive after-service support even long after installation.',
  },
];

export const GALLERY_ITEMS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Architectural Facade & Window Mullions',
    category: 'cladding-facades',
    aspect: 'landscape',
    imageSrc: '/src/assets/images/hero_architectural_aluminium_1791129172749.jpg',
    summary: 'Precision aluminium mullions with high-transparency glass facade configuration.',
  },
  {
    id: 'proj-2',
    title: 'Custom Aluminium Sliding & Casement Doors',
    category: 'doors-windows',
    aspect: 'landscape',
    imageSrc: '/src/assets/images/doors_windows_craft_1791129183953.jpg',
    summary: 'Smooth sliding multi-track aluminium door system opening into an open courtyard.',
  },
  {
    id: 'proj-3',
    title: 'Tempered Glass Acoustic Partitions',
    category: 'glass-solutions',
    aspect: 'landscape',
    imageSrc: '/src/assets/images/glass_solutions_partition_1791129198066.jpg',
    summary: 'Frameless tempered glass partitions with minimalist structural aluminium base channels.',
  },
  {
    id: 'proj-4',
    title: 'Aluminium Cladding & Geometric Entrance',
    category: 'cladding-facades',
    aspect: 'landscape',
    imageSrc: '/src/assets/images/cladding_facade_modern_1791129210715.jpg',
    summary: 'Clean exterior aluminium cladding panels with precise hairline reveals.',
  },
  {
    id: 'proj-5',
    title: 'Integrated Suspended Ceiling & Lighting System',
    category: 'ceiling-works',
    aspect: 'landscape',
    imageSrc: '/src/assets/images/ceiling_works_interior_1791129222716.jpg',
    summary: 'Suspended ceiling grid with flush gypsum transitions and integrated linear lighting.',
  },
  {
    id: 'proj-6',
    title: 'Commercial Interior Glass Enclosure',
    category: 'interior-exterior',
    aspect: 'landscape',
    imageSrc: '/src/assets/images/glass_solutions_partition_1791129198066.jpg',
    summary: 'Aluminium framed glass enclosure providing acoustic separation with visual connection.',
  },
];
