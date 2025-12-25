"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="dots-background  min-h-screen flex items-center justify-center flex-col">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h1 
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    Edwin Rodriguez
                </motion.h1>
                <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="mt-4 text-xl md:text-2xl text-gray-600"
                >
                    Desarrollador Web y Backend
                </motion.p>
                <motion.p
                variants={fadeUp}
                initial="hidden"    
                animate="visible"
                transition={{ delay: 0.4 }}
                className="mt-6 max-2xl text-gray-700"
                >
                    Especializado en PHP, Laravel y aplicaciones orientadas a seguridad y gestión. Desarrollo soluciones funcionales y escalables con enfoque en buenas prácticas y sistemas reales.
                </motion.p>
                <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="mt-8 flex gap-4"
                >
                    <Link href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Ver Proyectos
                    </Link>
                    <Link href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                        Contactar
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}