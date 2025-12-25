"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ProjectCard({ project, delay = 0 }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay }}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
        >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">
                        {techItem}
                    </span>
                ))}
            </div>
            <a href={project.link} className="text-blue-600 hover:underline">
                Ver Proyecto
            </a>
        </motion.div>
    );
}
