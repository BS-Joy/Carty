import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const lato = localFont({
  src: "./fonts/Lato-Regular.ttf",
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});
const openSans = localFont({
  src: "./fonts/OpenSans-Regular.ttf",
  variable: "--font-OpenSans",
  subsets: ["latin"],
  display: "swap",
});

const JosefinSans = localFont({
  src: "./fonts/JosefinSans-VariableFont_wght.ttf",
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Carty",
  description: "Your daily online shop...",
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${lato.variable} ${openSans.variable} ${JosefinSans.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
