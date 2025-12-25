import Link from 'next/link';

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