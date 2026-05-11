import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Preloader } from "@/components/layout/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL("https://axiontechnology.com"),
  title: {
    default: "Axion Technology Co Ltd | Visual Systems for Modern Experiences",
    template: "%s | Axion Technology",
  },
  description:
    "Axion Technology Co Ltd is a global visual technology engineering company specializing in LED display systems, interactive technologies, stage lighting, professional audio, and integrated AV infrastructure. Trusted across the Middle East and Europe for 20+ years.",
  keywords: [
    "LED display systems", "AV solutions", "stage lighting", "professional audio",
    "interactive kiosks", "digital signage", "Bahrain", "Hong Kong", "Dubai", "visual technology",
    "COB LED", "line array", "moving head lights", "power distribution",
  ],
  authors: [{ name: "Axion Technology Co Ltd", url: "https://axiontechnology.com" }],
  creator: "Axion Technology Co Ltd",
  openGraph: {
    type:      "website",
    locale:    "en_US",
    url:       "https://axiontechnology.com",
    siteName:  "Axion Technology",
    title:     "Axion Technology Co Ltd | Visual Systems for Modern Experiences",
    description:"Global visual technology engineering — LED displays, AV systems, lighting, audio. 20+ years. Middle East & Europe.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Axion Technology Co Ltd" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Axion Technology Co Ltd",
    description: "Visual Systems for Modern Experiences",
    images:      ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,800,900&display=swap" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Teko:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-blue-500/30">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Preloader />
          {/* Cinematic Grain Overlay */}
          <div className="fixed inset-0 pointer-events-none z-[9999] dark:opacity-[0.03] opacity-0 mix-blend-overlay">
            <svg className="h-full w-full">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
