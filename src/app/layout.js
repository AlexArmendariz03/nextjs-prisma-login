import { Inter } from "next/font/google";
import "./globals.css";
import Naver from "next-auth/providers/naver";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth",
  description: "Administrador de Finanzas ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
