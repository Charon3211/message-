import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dearly — Personal messages",
  description: "A quiet corner for the people who matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
