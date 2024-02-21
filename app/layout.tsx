import "./globals.css";
import { Montserrat } from "next/font/google";
import Cysk from "./cysklogo.png"
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "olus | OFFICIAL PAGE",
  description: "Cześć! Jestem Olivier, mam 16 lat. W wolnym czasie lubię grać w gry komputerowe i programować, choć programowanie naprawdę mnie urzekło. Programuję od 2021 roku (3 lata) i nadal sprawia mi to dużo radości.",
  Image: Cysk,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
