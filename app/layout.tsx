import "./globals.css";
import { Montserrat } from "next/font/google";
import Cysk from "./cysklogo.png"
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "olus | Official page",
  description: "Siema",
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
