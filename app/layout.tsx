import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/main_components/header";
import { cn } from "@/lib/utils";

const font = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YARCO Logistic",
  description:
    "En YARCO Logistic confiamos en la seguridad y calidad de cada traslado",
  icons: [
    {
      url: "/iconyarco.png",
      href: "/iconyarco.png",
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "bg-[#f0f0f0]")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
