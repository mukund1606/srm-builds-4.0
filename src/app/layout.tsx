import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";

import NavComponent from "@/components/NavComponent";

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
