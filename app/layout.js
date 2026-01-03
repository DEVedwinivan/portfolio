import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export const metadata = {
    viewport : "width=device-width, initial-scale=1",
    title:{
        default: 'Edwin Rodríguez - Desarrollador Web y BackEnd',
        template: '%s - Edwin Rodríguez',
    },
    description: 'Portafolio de Edwin Rodríguez, desarrollador web y backend especializado en LARAVEL, PHP y aplicaciones modernas',
    openGraph: {
        title: 'Edwin Rodríguez - Desarrollador Web y BackEnd',
        description: 'Portafolio profesional de Edwin Rodríguez, mostrando proyectos y habilidades en desarrollo web y backend.',
        url: 'https://portfolio-ten-henna-pvkh2ge8el.vercel.app/',
        siteName: 'Portafolio Edwin Rodríguez',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Portafolio de Edwin Rodríguez',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
};

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
