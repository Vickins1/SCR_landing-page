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
  title: "Smart Choice Rental Management | Property Management Services",
  description:
    "Smart Choice Rental Management offers expert property management services to maximize your rental success. Trusted solutions for landlords and tenants.",
  keywords:
    "property management, rental management, landlord services, tenant services, Smart Choice Rental Management",
  author: "Smart Choice Rental Management",
};

// Viewport export for responsive settings
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: RootLayoutProps) {
  // Structured data for Organization schema
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Choice Rental Management",
    url: "https://www.smartchoicerentalmanagement.com",
    logo: "https://www.smartchoicerentalmanagement.com/icon.png",
    description:
      "Smart Choice Rental Management provides professional property management services to landlords and tenants, ensuring seamless rental experiences.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567", // Replace with actual phone number
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/smartchoicerentalmanagement",
      "https://www.twitter.com/smartchoicerent",
      "https://www.linkedin.com/company/smartchoicerentalmanagement",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.smartchoicerentalmanagement.com" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.smartchoicerentalmanagement.com" />
        <meta property="og:image" content="https://www.smartchoicerentalmanagement.com/og-image.jpg" />
        <meta property="og:site_name" content="Smart Choice Rental Management" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.smartchoicerentalmanagement.com/og-image.jpg" />
        <meta name="twitter:site" content="@smartchoicerent" />

        {/* Favicon and Icon */}
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        
        {/* Lucide Icons */}
        <link
          href="https://unpkg.com/lucide-static@0.428.0/font/lucide.css"
          rel="stylesheet"
        />
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
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