export type BlogCategory = 'Features' | 'Guides' | 'Setup' | 'Updates';

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogSection {
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
}

export interface CommercialBlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  /** ISO date */
  published: string;
  modified: string;
  readTime: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  /** Raster 1200×630 used for og:image, twitter:image, and BlogPosting schema. */
  ogImage: string;
  imageAlt: string;
  heroWidth: number;
  heroHeight: number;
  intro: string;
  sections: BlogSection[];
  table?: { headers: string[]; rows: string[][] };
  checklist?: string[];
  takeaways: string[];
  faqs: BlogFaq[];
  relatedSlugs: string[];
  midCtaTitle: string;
  midCtaHtml: string;
  endCtaHtml: string;
}
