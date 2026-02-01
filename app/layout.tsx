import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { Providers } from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Sahil Alam | Software Engineer",
  description:
    "Bangalore based Software Engineer building real-world full-stack products with a strong engineering mindset. Experienced with Next.js, React, Node.js, and MongoDB. (MERN stack)",
  icons: {
    icon: "/pic.jpg",
  },
  openGraph: {
    title: "Md Sahil Alam | Software Engineer",
    description:
      "Bangalore based Software Engineer building real-world full-stack products with a strong engineering mindset. Experienced with Next.js, React, Node.js, and MongoDB. (MERN stack)",
    images: [
      {
        url: "/pic.jpg",
        width: 800,
        height: 600,
        alt: "Md Sahil Alam",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
