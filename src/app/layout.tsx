import React from "react";
import "./globals.css"; // Import global CSS
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

// Define TypeScript interface for props
interface RootLayoutProps {
  children: React.ReactNode;
}

// Metadata for the application
export const metadata = {
  title: "Smart Choice Rental Management",
  description: "Your trusted partner in rental success.",
};

// Viewport export for responsive settings
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/lucide-static@0.428.0/font/lucide.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Smart Choice Rental Management</title>
        <meta
          name="description"
          content="Your trusted partner in rental success."
        />
      </head>
      <body>
        <Navbar />
        <Sidebar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}