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
