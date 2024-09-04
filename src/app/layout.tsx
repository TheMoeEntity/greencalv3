import type { Metadata } from "next";
import { Inter, Didact_Gothic, Montserrat, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";

const inter = Inter({ subsets: ["latin"] });
const overpass = Poppins({ subsets: ["latin"], weight: ["100","200","300","400"] });

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
      <body
      className={overpass.className}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
