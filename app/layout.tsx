import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fisketur",
  description: "Finn et nytt fiskevann og se hva vi vet om adkomst, bommer og nøkkelmuligheter før dere drar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nb"
      className={geistSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        </body>
       
    </html>
  );
}
