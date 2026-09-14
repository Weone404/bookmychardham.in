import { SITE } from '../lib/site';

const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'anthropic-ai', 'Claude-Web',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
  'CCBot', 'Bytespider', 'Amazonbot', 'meta-externalagent',
];

const PUBLIC_ROUTES = [
  '/private-jet-charter',
  '/private-jet-charter-booking',
  '/private-jet-booking-india',
  '/charter-flight-booking',
  '/aircraft-charter-services-india',
  '/private-jet-hire',
  '/business-jet-charter',
  '/private-jet-charter-delhi',
  '/corporate-jet-charter',
  '/helicopter-charter-services',
];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: ['/', ...PUBLIC_ROUTES], disallow: ['/booking'] },
      ...AI_CRAWLERS.map((ua) => ({
        userAgent: ua,
        allow: ['/', ...PUBLIC_ROUTES],
        disallow: ['/booking'],
      })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
