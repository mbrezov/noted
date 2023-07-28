import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import Sidebar from "./Sidebar";

import "./global.scss";

const inter = Fredoka();

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
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
