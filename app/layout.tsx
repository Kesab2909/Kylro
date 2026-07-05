import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Suspense } from "react";

import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Loading } from "@/components/auth/loading";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kylro — The Luxury Workspace for Visual Thinkers",
  description: "Premium real-time collaborative infinite workspace. Less interface. More experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.className} ${cormorant.variable}`}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
