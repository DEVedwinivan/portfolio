"use client";

import { skills } from "@/data/skills";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Habilidades
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl">
        Tecnologías y herramientas con las que he trabajado en proyectos reales.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.category}
            category={skill.category}
            items={skill.items}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
