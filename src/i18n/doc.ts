import type { SiteLocale } from './constants';

export const pageMeta: {
  title: Record<SiteLocale, string>;
  description: Record<SiteLocale, string>;
} = {
  title: {
    en: "CAN D'ORO — Dog Groomer in Lisbon | Boutique Dog Salon",
    pt: "CAN D'ORO — Estética Canina em Lisboa | Salão Canino",
  },
  description: {
    en: 'Dog grooming in Lisbon at a boutique salon. Breed styling, refined care, and a calm experience — by appointment.',
    pt: 'Estética canina em Lisboa num salão boutique. Estética de raça, cuidado refinado e ambiente sereno — com marcação.',
  },
};
