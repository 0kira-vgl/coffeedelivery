import type { Metadata } from "next";
import { Baloo_2, Roboto } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Coffee Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth antialiased ${baloo2.variable}`}>
      <body className={`bg-base-background text-base-text ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}

// mx-auto w-full max-w-[70rem]
