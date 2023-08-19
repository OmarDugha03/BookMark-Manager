import "./globals.css";
import { Header } from "@/components/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"w-full bg-slate-50"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
