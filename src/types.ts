export interface PricePackage {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  priceEstimate: string;
  description: string;
  inclusions: string[];
  recommendedFor?: string;
  whatsappMessage: string;
}

export interface PriceCategory {
  id: 'wedding' | 'non-wedding' | 'kelas';
  buttonLabel: string;
  modalTitle: string;
  modalSubtitle: string;
  icon: string;
  accentColor: string;
  packages: PricePackage[];
  bacaDuluPoints: {
    title: string;
    points: string[];
  };
}

export interface PortfolioLook {
  id: string;
  title: string;
  category: 'wedding' | 'engagement' | 'graduation' | 'class';
  tag: string;
  image: string;
  description: string;
}

export interface ClientReview {
  id: string;
  name: string;
  occasion: string;
  comment: string;
  rating: number;
}
