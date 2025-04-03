import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Fonts
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

// Metadata
export const metadata: Metadata = {
  title: "Hirwa Cyuzuzo Willy | Portfolio",
  description: "Explore the innovative projects and expertise of Hirwa Cyuzuzo Willy, a skilled Fullstack developer, delivering scalable solutions and creative designs.",
  authors: [{ name: "Hirwa Cyuzuzo Willy" }],
  keywords: [
    "Hirwa Cyuzuzo Willy",
    "Developer Portfolio",
    "React Native Developer",
    "Tailwind CSS Expert",
    "Mobile App Developer",
    "Website Developer",
    "Scalable Solutions"
  ],
  creator: "Hirwa Cyuzuzo Willy",
  applicationName: "Hirwa | Portfolio",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  themeColor: "#313133",
};

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
