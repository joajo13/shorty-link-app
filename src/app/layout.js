import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { Navbar } from "@/components/custom/navbar/navbar";
import { RootTabs } from "@/components/custom/navbar/root-tabs";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ShortyLink",
  description: "Shorten your links with ShortyLink",
};

export default function RootLayout({ children }) {


  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            "bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Navbar />

          {children}

          <Toaster richColors closeButton/>
        </body>
      </html>
    </Providers>
  );
}
