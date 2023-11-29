import "@/styles/globals.css";

import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { Providers } from "./providers";

const NavComponent = dynamic(() => import("@/components/NavComponent"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SRM Builds 4.0",
  description: "This is the website for SRM Builds 4.0",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <NavComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
