import Toast from "./components/atoms/Toast";
import AuthContext from "./contexts/AuthContext";
import Header from "./components/atoms/Header";
import Footer from "./components/atoms/Footer";
import QueryContext from "./contexts/QueryContext";
import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: 'Tingress.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toast />
        <AuthContext>
          <QueryContext>
            <div className="min-h-full">
              <Header title="Tingress"/>
              {children}
              <Footer />
            </div>
          </QueryContext>
        </AuthContext>
      </body>
    </html>
  );
}
