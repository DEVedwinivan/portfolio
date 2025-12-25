import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Skills from '@/components/sections/Skills';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <FeaturedProjects />
            <Skills />
        </main>
    );
}