import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import Container from "./_components/container";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `minnysoop`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-auto bg-darkSlate text-darkText">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn(inter.className)}>
          <section className="text-center mt-20 mb-16">
            <h1 className="text-3xl font-bold">
              minnysoop
            </h1>
            <h2 className="mt-2">
              mkang20 <b>[at]</b> depaul <b>[dot]</b> edu
            </h2>
          </section>
          <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}