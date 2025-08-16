import type { Metadata } from "next";
import { Source_Sans_3, Open_Sans } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "foodwagon: офіційни сайт",
  description: "Смачна їжа з великою кількістю пропозицій. Швидка доставка, вічливі оператори. Маємо гарні знижки для покупців, чесні відгуки.",
  icons: {
    icon: '/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${openSans.variable} antialiased text-lg`}
      >
        {children}
      </body>
    </html>
  );
}
