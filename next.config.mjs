/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // Legacy paths -> the pages that own these clusters.
      { source: '/char-dham', destination: '/chardham', permanent: true },
      { source: '/chardham-yatra', destination: '/chardham', permanent: true },
      { source: '/kedarnath', destination: '/chardham', permanent: true },
      { source: '/flower-drop', destination: '/flower-dropping', permanent: true },
    ];
  },
};

export default nextConfig;
