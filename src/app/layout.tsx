import "./globals.css";
import { Header } from "@/components/index";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BookMark Manager ",
  description: "A simple and easy to use book mark ",
  icons: "./icon.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={
          montserrat.className +
          " w-full bg-slate-50 scroll-smooth selection:text-[#5368df] selection:bg-slate-950"
        }>
        <Header />
        {children}
      </body>
    </html>
  );
}
