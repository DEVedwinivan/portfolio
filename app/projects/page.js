import { projects } from '@/data/projects';
import ProjectItem from '@/components/ui/ProjectItem';

export const metadata = {
    title: 'Proyectos - Edwin Rodríguez',
};

export default function ProjectsPage() {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Proyectos
            </h1>
            
            <p className="mb-12 text-gray-600 max-w-2xl">
                Aquí encontrarás una selección de proyectos en los que he trabajado, 
                destacando mis habilidades en desarrollo web, backend y seguridad.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectItem key={project.id} project={project} delay={index * 0.1} />
                ))}
            </div>
        </section>
    );
}