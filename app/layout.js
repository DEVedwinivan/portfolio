import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Edwin Rodriguez - Web Developer",
  description: "Desarrollador Web especializado en PHP y LARAVEL | Portfolio de Edwin Rodriguez",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className="bg-white text-gray-900 antialiased"
      >
        <Navbar />
        <main className="min-h-screen px-6 md:px-12">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
