/**
 * SINGLE SOURCE OF TRUTH for Book My CharDham.
 * Every page, FAQ answer, metadata block and JSON-LD Offer reads from here.
 * Never hardcode a price, phone number or date anywhere else in the codebase.
 */

export const SITE = {
  name: 'Book My CharDham',
  legalName: 'Book My CharDham',
  url: 'https://www.bookmychardham.in',
  logo: 'https://www.bookmychardham.in/logo.png',
  description:
    'Independent helicopter charter operator for Kedarnath, Badrinath and Char Dham yatra, aerial flower dropping and VIP charter flights.',
  locale: 'en_IN',
  languages: ['English', 'Hindi'],
  priceRange: '₹₹₹',
};

export const CONTACT = {
  phone: '+919355611996',
  phoneDisplay: '+91 93556 11996',
  whatsapp: '919355611996',
  whatsappUrl: 'https://wa.me/919355611996',
  email: 'charters@bookmychardham.in',
};

export const ADDRESS = {
  street: 'C-705, Sector 7, Dwarka',
  locality: 'New Delhi',
  region: 'Delhi',
  postalCode: '110077',
  country: 'IN',
  geo: { lat: 28.6149, lng: 77.0218 },
};

export const AREA_SERVED = [
  'Delhi NCR',
  'Dehradun',
  'Haridwar',
  'Rishikesh',
  'Uttarakhand',
];

/** Yatra season. Kapat closed Nov-Apr. */
export const SEASON = {
  year: 2027,
  windows: ['May-June', 'September-October'],
  priceValidUntil: '2027-10-31',
  /** null until officially announced. Never invent these. */
  kedarnathOpening: null,
  badrinathOpening: null,
};

/**
 * Prices in INR. `null` means not published yet -> page shows
 * "Enquire on WhatsApp" instead of a number. Never publish a guessed price.
 */
export const PRICING = {
  'kedarnath-same-day': { perSeat: 95000, charter: 480000 },
  'chardham-4-dham-package': { perSeat: 210000, charter: 1250000 },
  'do-dham-kedarnath-badrinath': { perSeat: 135000, charter: 680000 },
  'badrinath-same-day': { perSeat: 85000, charter: 420000 },
  'flower-royal-wedding': { perSeat: null, charter: 275000 },
  'flower-temple-inauguration': { perSeat: null, charter: 350000 },
  'flower-vip-rally-event': { perSeat: null, charter: null },
};

/** Format an INR figure the Indian way, or fall back to an enquiry prompt. */
export function formatPrice(value) {
  if (value == null) return 'Enquire on WhatsApp';
  return `₹${value.toLocaleString('en-IN')}`;
}

/** Build a wa.me link with a page-specific prefilled message. */
export function whatsappLink(message) {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/** Real per-page last-modified dates. Update when you edit a page. */
export const LAST_MODIFIED = {
  '/': '2026-09-02',
  '/kedarnath-helicopter-yatra': '2026-09-02',
  '/char-dham-yatra-by-helicopter': '2026-09-02',
  '/private-helicopter-charter': '2026-09-02',
  '/helicopter-flower-dropping': '2026-09-02',
  '/fleet': '2026-09-03',
  '/fleet/avanti-180': '2026-09-07',
  '/fleet/cessna-caravan-208b': '2026-09-07',
  '/fleet/cessna-citation-mustang': '2026-09-07',
  '/fleet/challenger-604': '2026-09-07',
  '/fleet/challenger-605': '2026-09-07',
  '/fleet/citation-525-a': '2026-09-07',
  '/about': '2026-09-02',
  '/contact': '2026-09-02',
  '/booking': '2026-09-02',
};

export const SOCIAL = [];

export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Book My CharDham — helicopter charter for Kedarnath and Char Dham yatra',
};

/**
 * Build a page's metadata. Next.js REPLACES the parent `openGraph` object
 * rather than merging it, so the image must be restated on every page or
 * og:image silently disappears. Always build page metadata through this.
 */
export function pageMetadata({ title, description, path, index = true }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    ...(index ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName: SITE.name,
      locale: SITE.locale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
