import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { Intro } from "@/app/_components/intro";
import Container from "@/app/_components/container";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `minnysoop.github.io`,
  description: `A place for minny's thoughts.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <Container>
         <Intro />
        </Container>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
