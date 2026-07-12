import type { ImageMetadata } from 'astro';
import type { Album, GalleryPhoto } from './types';
import { buildAlbums, altText, titleCase } from './helpers';

/**
 * Returns gallery albums for the pages.
 *
 * Phase 1: reads local fixtures under src/data/gallery-fixtures/<album>/.
 * Phase 2 will branch on GALLERY_SOURCE === 'drive' to read the synced cache
 * (src/gallery-cache/) instead.
 */
export async function getAlbums(): Promise<Album[]> {
  return getFixtureAlbums();
}

function getFixtureAlbums(): Album[] {
  const files = import.meta.glob<{ default: ImageMetadata }>(
    '/src/data/gallery-fixtures/**/*.{jpg,jpeg,png,webp}',
    { eager: true }
  );

  const byAlbum = new Map<string, GalleryPhoto[]>();
  for (const [path, mod] of Object.entries(files)) {
    const parts = path.split('/');
    const albumDir = parts[parts.length - 2];
    const fileName = parts[parts.length - 1];
    const photos = byAlbum.get(albumDir) ?? [];
    photos.push({
      id: path,
      fileName,
      // Fixtures have no real timestamps; use the path so ordering is stable.
      createdTime: path,
      image: mod.default,
      alt: altText(titleCase(albumDir)),
    });
    byAlbum.set(albumDir, photos);
  }

  const raw = [...byAlbum.entries()].map(([name, photos]) => ({ name, photos }));
  return buildAlbums(raw);
}
