import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { roboto } from "./_utils/fonts";
import { myStore } from "./_RTK/store";
import ReduxProvider from "./_RTK/ReduxProvider";

export const metadata = {
  title: "E-Commerce Courses",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <ReduxProvider>
        {/* I create this component to wrap in the server layout because redux only work in client side */}
        <html lang="en">
          <body className={roboto.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}

/*
to know how clerk visit =>  https://clerk.com/docs/quickstarts/nextjs
*/
