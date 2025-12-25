export default function Footer() {
    return (
        <footer className='w-full border-t border-gray-200 mt-10'>
            <div className='max-w7xl mx-auto px-6 py-4 text-center text-sm text-gray-500'>
                &copy; {new Date().getFullYear()} Edwin Rodriguez. Todos los derechos reservados.
            </div>
        </footer>
    );
}