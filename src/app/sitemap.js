import { SITE, LAST_MODIFIED } from '../lib/site';

// Real per-page dates. Uniform "now" timestamps get discounted as fake freshness.
const PAGES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/chardham', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/flower-dropping', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/charter', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
];

export default function sitemap() {
  return PAGES.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: new Date(LAST_MODIFIED[p.path]),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
