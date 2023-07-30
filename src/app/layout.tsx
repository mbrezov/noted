import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import Sidebar from "./Sidebar";

import "./global.scss";

const fredoka = Fredoka({
  weight: ["400", "600", "700"],
  subsets: ["latin", "hebrew", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noted :)",
  description: "Note app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
