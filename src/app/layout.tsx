import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AccessibilityToolbar from "@/components/layout/AccessibilityToolbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blind Welfare Council of Vadodara | BWC Vadodara",
    template: "%s | BWC Vadodara",
  },
  description:
    "Blind Welfare Council of Vadodara is dedicated to empowering visually impaired individuals through education, rehabilitation, sports, and livelihood programs in Gujarat, India.",
  keywords: [
    "blind welfare",
    "visually impaired",
    "NGO Vadodara",
    "disability rights Gujarat",
    "rehabilitation",
    "braille education",
    "para sports",
  ],
  authors: [{ name: "Blind Welfare Council of Vadodara" }],
  creator: "BWC Vadodara",
  metadataBase: new URL("https://bwcvadodara.org"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bwcvadodara.org",
    siteName: "Blind Welfare Council of Vadodara",
    title: "Blind Welfare Council of Vadodara | Empowering Visually Impaired Lives",
    description:
      "Empowering visually impaired individuals through education, rehabilitation, sports, and livelihood programs in Vadodara, Gujarat.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blind Welfare Council of Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blind Welfare Council of Vadodara",
    description: "Empowering visually impaired individuals in Gujarat.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <AccessibilityToolbar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
