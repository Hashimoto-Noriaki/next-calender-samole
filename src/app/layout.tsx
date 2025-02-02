import type { Metadata } from "next";
import "./globals.css";
import { NotLoginLayout } from "@/components/templates/NotLoginLayout";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <NotLoginLayout>
        {children}
        </NotLoginLayout>
      </body>  
    </html>
  );
}
