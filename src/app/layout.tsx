import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Dziura - Solo Developer & Entrepreneur",
  description: "Building digital products and solutions. Focused on clean code, user experience, and turning ideas into reality.",
  keywords: ["Max Dziura", "developer", "entrepreneur", "web development", "product strategy", "UI/UX design", "ideaharvester"],
  authors: [{ name: "Max Dziura" }],
  creator: "Max Dziura",
  openGraph: {
    title: "Max Dziura - Solo Developer & Entrepreneur",
    description: "Building digital products and solutions. Focused on clean code, user experience, and turning ideas into reality.",
    url: "https://dziura.online",
    siteName: "Max Dziura Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Max Dziura - Solo Developer & Entrepreneur",
    description: "Building digital products and solutions. Focused on clean code, user experience, and turning ideas into reality.",
    creator: "@MaxDziura",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#252423" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q33338ZBVT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q33338ZBVT');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
