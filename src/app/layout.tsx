import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme } from "@mui/material";
import theme from "@/theme";
import NavBar from "@/components/NavBar/NavBar";
import { AuthProvider } from "@/components/contextos/AuthContext";
import { CarritoProvider } from "@/components/contextos/CarritoContext";
import Footer from "@/components/NavBar/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ébano",
  description: "Clothes store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <AuthProvider>
            <CarritoProvider>
              <NavBar />

              <main className="flex-grow">{children}</main>

              <Footer/>
            </CarritoProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
