import Head from 'next/head';
import "./globals.css";
import "./styles/colors.css";
import "./styles/text.css";
import "./styles/effects.css";
import "./styles/containers.css";
import GoogleAnalytics from './components/GoogleAnalytics';
import { Source_Serif_4, Merriweather } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "600"],
  display: "swap",
  variable: "--font-body",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-header",
});


export const metadata = {
  title: 'Roaming Studio | Travel Focused BC-Based Media Company Offering Photography, UG Video, & Drone Travel Content',
  description: 'Roaming Studio is a media company that creates story-driven content for tourism, hospitality, and destination brands. Based in BC, available worldwide.',
  keywords: [
    'BC travel photographer',
    'BC videographer',
    'Vancouver travel content',
    'tourism board content creator',
    'drone photography British Columbia',
    'UGC travel creators Canada',
    'travel brand visuals',
    'destination marketing agency BC',
    'Roaming Studio',
    'travel video production Vancouver',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Roaming Studio | BC Travel Photography & Video Production',
    description: 'Hire us to elevate your tourism brand with cinematic visuals. Based in Vancouver, we partner with BC tourism boards and travel brands to create unforgettable content.',
    url: 'https://res.cloudinary.com/dqiq7slio/image/upload/v1749761120/background%20images/main/Hiriketiya-verticalcut_mwrxbo.jpg',
    siteName: 'Roaming Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roaming Studio - BC Travel Photo and Video',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roaming Studio | BC Travel Photography & Video',
    description: 'Cinematic video and photography for BC tourism boards and travel brands. Based in Vancouver.',
    images: ['/og-image.jpg'],
  },
  other: {
    'geo.region': 'CA-BC',
    'geo.placename': 'Vancouver',
    'geo.position': '49.2827;-123.1207',
    'ICBM': '49.2827, -123.1207',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
           <html lang="en" className={`${sourceSerif.variable} ${merriweather.variable}`}>

     <Head>
    
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
      <body className="font-[var(--font-body)]">
      {children}
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID!} />
    </body>
  </html>
  );
}
