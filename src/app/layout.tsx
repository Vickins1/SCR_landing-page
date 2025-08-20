import React from "react";
import "./globals.css"; 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import Preloader from "./components/Preloader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Smart Choice Rental Management | Property Management Services",
  description:
    "Smart Choice Rental Management offers expert property management services to maximize your rental success. Trusted rental solutions for landlords and tenants in the US.",
  keywords:
    "property management, rental management, landlord services, tenant services, real estate management, rental collection, lease agreements, tenant screening, property maintenance, Smart Choice Rental Management, rental services USA, professional property managers, rent collection services, rental property advertising, trusted property management, affordable property management, best property managers in USA",
  author: "Smart Choice Rental Management",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: RootLayoutProps) {
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
      telephone: "+1-555-123-4567",
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

  // WebSite Schema for search visibility
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Smart Choice Rental Management",
    url: "https://www.smartchoicerentalmanagement.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.smartchoicerentalmanagement.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />
        <meta name="application-name" content="Smart Choice Rental Management" />
        <meta name="theme-color" content="#012a4a" />

        <link
          rel="canonical"
          href="https://www.smartchoicerentalmanagement.com"
        />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.smartchoicerentalmanagement.com"
        />
        <meta
          property="og:image"
          content="https://www.smartchoicerentalmanagement.com/og-image.jpg"
        />
        <meta
          property="og:site_name"
          content="Smart Choice Rental Management"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.smartchoicerentalmanagement.com/og-image.jpg"
        />
        <meta name="twitter:site" content="@smartchoicerent" />

        {/* Icons */}
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Lucide Icons */}
        <link
          href="https://unpkg.com/lucide-static@0.428.0/font/lucide.css"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </head>
      <body>
        <Preloader />
        <Navbar />
        <Sidebar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
