import "public/assets/styles/globals.css";
import "public/assets/styles/theme.scss";
import "public/assets/styles/tailwind.scss";
import { Open_Sans } from "@next/font/google";
import { GlobalNav } from "@/ui/global-nav";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${openSans.variable} font-sans`}>
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
