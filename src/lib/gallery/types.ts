import type { ImageMetadata } from 'astro';

export interface GalleryPhoto {
  /** Drive fileId (Phase 2) or fixture glob path (Phase 1) — stable unique key. */
  id: string;
  /** Original Drive file name. */
  fileName: string;
  /** ISO timestamp; used for ordering (newest first). */
  createdTime: string;
  /** Optimizable image for Astro's <Image> component. */
  image?: ImageMetadata;
  /** Descriptive alt text for SEO/accessibility. */
  alt: string;
}

export interface Album {
  /** kebab-case URL segment. */
  slug: string;
  /** Display name. */
  name: string;
  photos: GalleryPhoto[];
  /** First photo by ordering (newest). */
  cover: GalleryPhoto;
  count: number;
}
