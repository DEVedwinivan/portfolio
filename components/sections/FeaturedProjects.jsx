"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Proyectos destacados
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl">
        Algunos de los proyectos en los que he trabajado, enfocados en sistemas
        reales, backend y seguridad.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
