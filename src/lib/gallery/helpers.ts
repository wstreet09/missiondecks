import type { Album, GalleryPhoto } from './types';

const ORDER_PREFIX = /^\d+\s+/;

/**
 * Folder name -> display name: strip a leading numeric ordering prefix
 * (e.g. "01 Decks") and capitalize each word so lowercase folder names
 * ("outdoor kitchens") render correctly ("Outdoor Kitchens").
 */
export function titleCase(folderName: string): string {
  return folderName
    .replace(ORDER_PREFIX, '')
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Folder name -> kebab-case URL slug. */
export function slugify(folderName: string): string {
  return titleCase(folderName)
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function isImageMime(mime: string): boolean {
  return mime.startsWith('image/');
}

/** Descriptive, SEO-friendly alt text for a gallery photo. */
export function altText(albumName: string): string {
  return `${albumName} project in Holly Springs NC by Mission Decks & Design`;
}

/** Newest first by ISO createdTime. Non-mutating. */
export function sortPhotos<T extends Pick<GalleryPhoto, 'createdTime'>>(
  photos: T[]
): T[] {
  return [...photos].sort((a, b) => b.createdTime.localeCompare(a.createdTime));
}

interface RawAlbum {
  name: string;
  photos: GalleryPhoto[];
}

/** Build display-ready albums: drop empties, sort photos, set cover/count, sort albums by name. */
export function buildAlbums(raw: RawAlbum[]): Album[] {
  return raw
    .filter((a) => a.photos.length > 0)
    .map((a) => {
      const photos = sortPhotos(a.photos);
      return {
        slug: slugify(a.name),
        name: titleCase(a.name),
        photos,
        cover: photos[0],
        count: photos.length,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
