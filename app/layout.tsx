import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./_components/LayoutWrapper";
import Navbar from "./_components/Navbar";
import NotificationsWrapper from "./_components/NotificationsWrapper";
import BackgroundPaper from "./_components/BackgroundPaper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galco | 💻 Coding Challenge #2️⃣  ☑️",
  description: "Maliek Davis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <LayoutWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiasedh-screen max-h-screen`}
        >
          <BackgroundPaper>
            <NotificationsWrapper>
              <Navbar />
              {children}
            </NotificationsWrapper>
          </BackgroundPaper>
        </body>
      </LayoutWrapper>

    </html>
  );
}
