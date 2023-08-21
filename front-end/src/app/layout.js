import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Alnnex Quiwag Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-screen-2xl mx-auto relative bg-[url('/bg.svg')] bg-no-repeat bg-cover bg-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
