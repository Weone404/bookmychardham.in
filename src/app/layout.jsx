import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://bookmychardham.in'),
  title: 'BookMyChardham Helicopter Charters | Kedarnath, Chardham & VIP Aviation',
  description: 'BookMyChardham (bookmychardham.in) — Premier helicopter charter service for Chardham & Kedarnath pilgrimage tours, aerial flower dropping ceremonies, and luxury VIP & emergency charter flights.',
  openGraph: {
    title: 'BookMyChardham Helicopter Charters',
    description: 'Premier helicopter charter service for Chardham & Kedarnath pilgrimage tours, aerial flower dropping ceremonies, and luxury VIP & emergency charter flights.',
    url: 'https://bookmychardham.in',
    siteName: 'BookMyChardham Helicopter Charters',
    images: [
      {
        url: '/airplane-sunset-bg.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F3E9D0] text-[#6B4E3D] antialiased min-h-screen flex flex-col justify-between selection:bg-[#A67C52] selection:text-[#F3E9D0] font-sans">
        <Navbar />
        <main className="flex-1 w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
