import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import LenisScroll from "./component/lenis-scroll";


const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700'],
});


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <LenisScroll/>
        {children}
        
      </body>
    </html>
  );
}

export default RootLayout;
