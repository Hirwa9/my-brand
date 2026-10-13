import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Data
import { siteUrl } from "@/app/data";

// Fonts
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

// Metadata
const description = "Hirwa Cyuzuzo Willy is a fullstack and mobile developer in Kigali, Rwanda, building web and mobile products with Next.js, React Native, Django and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | Hirwa`,
    default: "Hirwa Cyuzuzo Willy | Portfolio",
  },
  description,
  authors: [{ name: "Hirwa Cyuzuzo Willy" }],
  keywords: [
    "Hirwa Cyuzuzo Willy",
    "Developer Portfolio",
    "Fullstack Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Next.js Developer",
    "Django Developer",
    "Python Developer",
    "Node.js Developer",
    "Software Developer Rwanda",
    "Kigali"
  ],
  creator: "Hirwa Cyuzuzo Willy",
  applicationName: "Hirwa | Portfolio",
  robots: "index, follow",
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hirwa | Portfolio",
    title: "Hirwa Cyuzuzo Willy | Fullstack & Mobile Developer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hirwa Cyuzuzo Willy | Fullstack & Mobile Developer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#313133",
}

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
