import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Notion Clone by CV",
  description:
    "A powerful productivity tool that combines notes, tasks, and project management in an intuitive and customizable interface, designed to optimize organization and efficiency for your business.",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg"
      },
      {
        media:"(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg"
      }
    ]
  }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="notion-clone-by-cv-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
