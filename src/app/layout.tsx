import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { Providers } from "./providers";

const NavComponent = dynamic(() => import("@/components/NavComponent"), {
  ssr: false,
});

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SRM Builds 4.0",
  description:
    "SRM Builds 4.0 is a 36 hour hackathon, an initiative by CIIE (Centre for Innovation, Incubation and Entrepreneurship) SRM University Sonepat. Which is being held in Sonepat, India.",
  manifest: "/manifest.json",
  creator: "Mukund Mittal",
  generator: "NextJS 14.0.3",
  icons: { apple: "/logo.png" },
  metadataBase: new URL("https://srmbuilds.vercel.app/"),
  alternates: {
    canonical: "https://srmbuilds.vercel.app/",
    languages: {
      en: "https://srmbuilds.vercel.app/",
    },
  },
  openGraph: {
    title: "SRM Builds 4.0",
    description:
      "SRM Builds 4.0 is a 36 hour hackathon, an initiative by CIIE (Centre for Innovation, Incubation and Entrepreneurship) SRM University Sonepat. Which is being held in Sonepat, India.",
    images: "/logo.png",
    url: "https://srmbuilds.vercel.app/",
    siteName: "SRM Builds 4.0",
    locale: "en",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#1c1e27",
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Providers>
          <NavComponent />
          <div className="bg-gradient-to-b from-background to-black">
            <div className="sticky z-10">{children}</div>
            <div className="fixed top-0 z-0 h-screen w-full bg-[url('/bg.jpg')] bg-cover bg-no-repeat opacity-10 blur-sm" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
