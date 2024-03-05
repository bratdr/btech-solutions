import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navigation from "@/app/components/navigation/Navbar";

import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/icon2.png",
  },
  title: "B-Tech Solutions",
  description:
    "B.tech adalah perusahaan yang berjalan di bidang “Business solution providers”.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navigation />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
