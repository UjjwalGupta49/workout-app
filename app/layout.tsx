import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osprey | Mindful Movement",
  description: "A calming space for your daily workout routine",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Osprey",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#f5fbf9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${jakarta.variable} ${geistMono.variable} antialiased h-full overflow-hidden bg-background text-foreground selection:bg-primary/20`}
      >
        <div className="flex flex-col h-full items-center">
          <main className="w-full max-w-[428px] h-full bg-background relative overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
