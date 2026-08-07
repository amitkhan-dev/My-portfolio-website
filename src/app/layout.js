
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amit Hasan | Full Stack Web Developer",
  description: "Portfolio of Amit Hasan - Full Stack Developer & MERN Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-[#F9FAFB] selection:bg-[#10B981] selection:text-[#030712]">
        {children}
      </body>
    </html>
  );
}