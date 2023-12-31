import { Inter } from "next/font/google";
import "./globals.css";
import MenuSlider from "@/Components/shared/menuSlider/MenuSlider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Surya's portfolio",
  description: "This is a portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="mt-16 flex justify-center">
          <MenuSlider />
        </div>
        <div className="mx-auto w-9/12 mt-4">{children}</div>
      </body>
    </html>
  );
}
