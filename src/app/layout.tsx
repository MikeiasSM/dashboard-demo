import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"
import Sidebar from "@/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "Dashboard Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">    
      <body className={cn("min-h-screen bg-background antialiased")}>
        <Sidebar/>
        {children}
      </body>
    </html>
  )
}