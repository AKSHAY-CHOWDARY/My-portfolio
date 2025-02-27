import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbrainsMono'
 });

export const metadata = {
  title: "Akshay Portfolio",
  description: "Made by Akshay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header/>
        <Transition/>
        <PageTransition>
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
