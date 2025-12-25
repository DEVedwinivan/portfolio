"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ProjectItem({ project, delay = 0 }) {
    return (
        <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay }}
            className="border border-gray-200 rounded-xl p-6"
        >   
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.longdescription}</p>
            <p className="mb-4 text-gray-500"><strong>Rol:</strong> {project.role}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-4">
                {project.github && (
                    <a href={project.github} target="_blank" className="text-blue-500 hover:underline">
                        GitHub
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" className="text-blue-500 hover:underline">
                        Demo
                    </a>
                )}
            </div>
        </motion.article>
    );
}