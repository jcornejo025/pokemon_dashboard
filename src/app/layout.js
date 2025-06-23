"use client"; // Required for using hooks like useSession

import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans bg-gray-50 text-gray-900`}>
        <SessionProvider>
          <nav className="bg-white shadow-md py-4 px-8 flex gap-8">
            <a href="/dashboard" className="font-bold text-lg hover:text-blue-600">Home</a>
            <a href="/cards" className="font-bold text-lg hover:text-blue-600">Pokedex</a>
          </nav>
          <main className="p-8">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
