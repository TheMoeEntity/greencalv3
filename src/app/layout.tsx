import type { Metadata } from "next";
import { Inter, Didact_Gothic, Montserrat, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const overpass = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greencal Foundation - Empowering Lives for a Brighter Future",
  description:
    "Greencal Foundation provides hope and support through medical assistance, education, and community outreach.",
  keywords:
    "Greencal Foundation, Adum Obinna,  Mrs. Juliana Calista Adum, charity, education, outreach, scholarships, Abakaliki, Ebonyi State, Nigeria",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Greencal Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
        <Script src="https://js.paystack.co/v1/inline.js" />
        <Analytics />
      </body>
    </html>
  );
}
