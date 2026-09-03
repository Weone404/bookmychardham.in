/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // Sep 2026 slug realignment. Old paths -> the pages that own each cluster.
      { source: '/chardham', destination: '/char-dham-yatra-by-helicopter', permanent: true },
      { source: '/charter', destination: '/private-helicopter-charter', permanent: true },
      { source: '/flower-dropping', destination: '/helicopter-flower-dropping', permanent: true },

      // Variants people type or link to.
      { source: '/char-dham', destination: '/char-dham-yatra-by-helicopter', permanent: true },
      { source: '/chardham-yatra', destination: '/char-dham-yatra-by-helicopter', permanent: true },
      { source: '/char-dham-yatra', destination: '/char-dham-yatra-by-helicopter', permanent: true },
      { source: '/kedarnath', destination: '/kedarnath-helicopter-yatra', permanent: true },
      { source: '/kedarnath-helicopter', destination: '/kedarnath-helicopter-yatra', permanent: true },
      { source: '/flower-drop', destination: '/helicopter-flower-dropping', permanent: true },
      { source: '/flower-dropping-kedarnath', destination: '/helicopter-flower-dropping', permanent: true },
      { source: '/helicopter-charter', destination: '/private-helicopter-charter', permanent: true },
    ];
  },
};

export default nextConfig;
