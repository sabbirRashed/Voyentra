import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playFair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Voyentra | Your Gateway to Unforgettable Adventures",
  description: "Voyentra is a modern travel and tourism platform where you can discover stunning destinations, explore unique experiences, and plan your next unforgettable adventure.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playFair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <ToastContainer />
      </body>
    </html>
  );
}
