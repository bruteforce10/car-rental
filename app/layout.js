import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import "./globals.css";
import { Outfit } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Car Rental Firdi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <Navbar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
