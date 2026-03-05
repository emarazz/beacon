import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Rubik } from 'next/font/google';
import { CssBaseline } from '@mui/material';
import theme from '../../theme';
import '../../globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/ui/Footer';
import CookieBanner from '@/ui/CookieBanner';

const BASE = process.env.NEXT_PUBLIC_URL || "https://beaconauto.net"
const OG_IMAGE = "https://firebasestorage.googleapis.com/v0/b/beaconauto.firebasestorage.app/o/metadata%2Fog-image.webp?alt=media&token=ba67e22f-4672-42bf-b884-50df6043fa06"

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Beacon Auto Care | NAPA AutoCare Center — Doral, FL",
    template: "%s | Beacon Auto Care",
  },
  description: "Beacon Auto Care is a NAPA AutoCare Center in Doral, FL. Expert car maintenance, tire services, brakes, AC, and diagnostics. Serving Doral, Miami & surrounding areas. Call (305) 471-8400.",
  keywords: ["auto repair Doral FL", "NAPA AutoCare Doral", "car maintenance Doral", "tire service Doral", "oil change Doral", "brake repair Doral FL", "auto shop Miami"],
  openGraph: {
    title: "Beacon Auto Care | NAPA AutoCare Center — Doral, FL",
    description: "Expert car maintenance, tire services & auto repair in Doral, FL. NAPA AutoCare Center. Mon–Fri 7am–6pm. (305) 471-8400.",
    url: BASE,
    siteName: "Beacon Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, alt: "Beacon Auto Care - NAPA AutoCare Center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beacon Auto Care | NAPA AutoCare Center — Doral, FL",
    description: "Expert car maintenance, tire services & auto repair in Doral, FL.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: BASE,
  },
};

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});



export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${rubik.variable}`}>
      <head>
        {/* LocalBusiness structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Beacon Auto Care",
            "alternateName": "Beacon Auto Care NAPA AutoCare Center",
            "url": BASE,
            "logo": `${BASE}/img/beacon-napa-01.webp`,
            "image": `${BASE}/img/beacon-sunset-01.webp`,
            "description": "NAPA AutoCare Center in Doral, FL offering car maintenance, tire services, brake repair, diagnostics, AC service, and more.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8701 NW 13th Terrace",
              "addressLocality": "Doral",
              "addressRegion": "FL",
              "postalCode": "33172",
              "addressCountry": "US",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.7855,
              "longitude": -80.3397,
            },
            "telephone": "+13054718400",
            "email": "service@beaconauto.net",
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "07:00",
              "closes": "18:00",
            }],
            "priceRange": "$$",
            "areaServed": ["Doral", "Miami", "Hialeah", "Miami Lakes", "Miami-Dade County"],
            "hasMap": "https://goo.gl/maps/6tNDNvLRrgVAR2z27",
            "sameAs": [],
          })
        }} />

        {/* Initialize GA consent mode — defaults to denied until user accepts */}
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: localStorage.getItem('cookieConsent') === 'accepted' ? 'granted' : 'denied'
          });
        `}} />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            <Footer />
            <CookieBanner />
          </ThemeProvider>
        </AppRouterCacheProvider>

        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        )}
      </body>
    </html>
  );
}