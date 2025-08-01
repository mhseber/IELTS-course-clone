import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/MainPage/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IELTS-course-clone",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
