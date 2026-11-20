/** Prefixes a file in /public with the site's base path (needed on GitHub Pages, where the site lives under /zaywebiste). */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
