import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../component/navbar.jsx";
import Footer from "../component/Footer.jsx";
// import ContactQuery from "../components/ContactQuery";
// import FloatingContactButtons from "@/components/FloatingContactButtons";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "About Us | WeOne Aviation",
//   description: "Learn about WeOne Aviation, India’s trusted pilot training institute.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {/* <ContactQuery /> */}
        {children}
        {/* <FloatingContactButtons /> */}
        <Footer />
      </body>
    </html>
  );
}