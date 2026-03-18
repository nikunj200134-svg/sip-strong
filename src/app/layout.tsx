import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LenisScroll from '../components/LenisScroll';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' });

export const metadata: Metadata = {
  title: 'SipStrong | Elite Performance Nutrition',
  description: 'Scientifically backed supplements for the modern athlete.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans bg-black text-white antialiased flex flex-col min-h-screen">
        <Script src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js" strategy="beforeInteractive" />
        <AnnouncementBar />
        <Header />
        <LenisScroll>
          <main className="flex-1 pt-20">
            {children}
          </main>
        </LenisScroll>
        <Footer />
      </body>
    </html>
  );
}
