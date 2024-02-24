import Link from "next/link";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stakodon",
  description: "Generated your Lean Canvas with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body className={`${inter.className} scrollbar-none`}>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}

export function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container flex min-h-dvh">
      <div className="flex-col items-center justify-center hidden md:flex sign:w-100">
        <Link
          href="/"
          className="absolute z-10 text-xl italic font-bold text-white top-10 left-10"
        >
          Stakodon
        </Link>
        <div className="h-full w-112">
          <video
            tabIndex={-1}
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          >
            <source src="https://img.stakodon.com/webm2.webm" />
          </video>
        </div>
        <div className="absolute z-10 text-xs text-gray-500 bottom-5 left-5">
          <Link
            tabIndex={-1}
            href="https://www.youtube.com/watch?v=rSt1UXNxilw"
            target="_blank"
            rel="noopener"
          >
            @FunnyThreads
          </Link>
          {" | "}
          <Link
            tabIndex={-1}
            href="https://creativecommons.org/licenses/by/3.0/legalcode"
            target="_blank"
            rel="noopener"
          >
            CC BY License
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 w-full md:max-w-200">
        <div className="px-6 phone:px-0 w-104">{children}</div>
      </div>
    </main>
  );
}
