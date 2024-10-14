import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyla Ronquillo",
  description: "This is Kyla Ronquillo's personal website.",
  icons: "./icons/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
