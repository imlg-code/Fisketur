import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fisketur",
  description: "Finn et nytt fiskevann og les om adkomst, bommer og nøkkelmuligheter før dere drar.",
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
