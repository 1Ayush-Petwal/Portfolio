import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushpetwal.vercel.app"),
  title: {
    default: "Ayush Petwal",
    template: "%s · Ayush Petwal",
  },
  description:
    "Engineer working across ML infrastructure, distributed systems, and onchain protocols. Building at UpValue & Kritu Capital, and contributing to Kubeflow.",
  keywords: [
    "Ayush Petwal",
    "ML Infrastructure",
    "Distributed Systems",
    "Blockchain",
    "Kubernetes",
    "Software Engineer",
  ],
  authors: [{ name: "Ayush Petwal" }],
  openGraph: {
    title: "Ayush Petwal",
    description:
      "Engineer working across ML infrastructure, distributed systems, and onchain protocols.",
    url: "https://ayushpetwal.vercel.app",
    siteName: "Ayush Petwal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Petwal",
    description:
      "Engineer working across ML infrastructure, distributed systems, and onchain protocols.",
    creator: "@Ayush_P_145",
  },
};

// Runs before first paint: applies the saved theme (or the OS preference when
// none is saved) so there's no flash of the wrong theme on load.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
