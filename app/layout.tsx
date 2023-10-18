import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import QueryClientProvider from "./QueryClientProvider";
import AuthProvider from "./auth/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider>
        <AuthProvider>
          <body className={`${inter.className} scrollbar-hide scroll-smooth`}>
            <Theme>
              <Navbar />
              <main className="mt-32 md:mt-20 ">
                <ToastContainer />
                {children}
              </main>
            </Theme>
          </body>
        </AuthProvider>
      </QueryClientProvider>
    </html>
  );
}
