
import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { site } from "@/lib/site";

const description =
  "SANVEX helps businesses strengthen their digital presence through social media marketing, SEO, performance marketing, branding, content creation, lead generation, and website development.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: "SANVEX | Digital Marketing, Branding & Web Development",

  description,

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "uhCYFrJl1z39R8Lxn4PLdgR1es6QXmGXg0YPpb3hmZY",
  },

  openGraph: {
    title: "SANVEX | Digital Marketing, Branding & Web Development",
    description,
    url: site.url,
    siteName: "SANVEX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
