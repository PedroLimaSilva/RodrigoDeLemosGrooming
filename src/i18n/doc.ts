import type { SiteLocale } from './constants';

export const pageMeta: {
  title: Record<SiteLocale, string>;
  description: Record<SiteLocale, string>;
} = {
  title: {
    en: "CAN D'ORO — Dog Salon & Boutique",
    pt: "CAN D'ORO — Salão canino e boutique",
  },
  description: {
    en: 'Refined grooming for exceptional dogs. Boutique care, breed expertise, and a calm salon experience in Portugal.',
    pt: 'Estética canina refinada para cães excecionais. Cuidado de boutique, domínio de raças e uma experiência de salão serena em Portugal.',
  },
};
