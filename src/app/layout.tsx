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

export const metadata: Metadata = {
  title: "Beacon Auto Care - NAPA AutoCare Center",
  description: "Beacon Auto Care — NAPA AutoCare Center in Doral, FL. Expert car maintenance & tire services built on integrity, reliability & affordability. Visit us at 8701 NW 13th Terrace.",
  openGraph: {
    title: "Beacon Auto Care - NAPA AutoCare Center",
    description: "Beacon Auto Care — NAPA AutoCare Center in Doral, FL. Expert car maintenance & tire services built on integrity, reliability & affordability. Visit us at 8701 NW 13th Terrace.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Beacon Auto Care - NAPA AutoCare Center",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/beaconauto.firebasestorage.app/o/metadata%2Fog-image.webp?alt=media&token=ba67e22f-4672-42bf-b884-50df6043fa06",
        width: 1200,
        height: 1200,
        alt: "Beacon Auto Care - NAPA AutoCare Center",
      },
    ],
  }
};

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});



export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${rubik.variable}`}>
      <head>
        {/* Initialize GA consent mode — defaults to denied until user accepts */}
        <script dangerouslySetInnerHTML={{ __html: `
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