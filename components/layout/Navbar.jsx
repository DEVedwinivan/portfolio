import Link from 'next/link';

export const metadata = {
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

export default function Navbar() {
    return (
        <header className='w-full border-b border-gray-200'>
            <nav className='max-w7xl mx-auto flex items-center justify-between px-6 py-4'>
                <Link href="/" className='text xl font-semibold'>
                    Edwin Rodriguez
                </Link>
                <ul className='flex gap-6 text-sm font-medium'>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/projects">Proyectos</Link></li>
                    <li><Link href="/about">Sobre mí</Link></li>
                    <li><Link href="/contact">Contacto</Link></li>

                </ul>
            </nav>
        </header>
    );
}