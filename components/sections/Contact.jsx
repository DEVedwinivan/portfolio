"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Github, Linkedin } from "lucide-react";
import {useForm, ValidationError } from "@formspree/react";


export default function Contact() {
    const [state, handleSubmit] = useForm("xjgvbpzk");
    if (state.succeeded) {
        return (<motion.div
            className="py-16 text-center"
            variants={fadeUp}
        >
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-2xl font-bold mb-4"
            >
                ¡Gracias por tu mensaje!
            </motion.h2>
            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-gray-600"
            >
                Te responderé lo antes posible.
            </motion.p>
        </motion.div>);
    }
    return (
        <section className="py-16" id="contact">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl md:text-4xl font-bold mb-4"
                >
                    Contacto
                </motion.h1>
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1}}
                    className="text-gray-600 mb-8"
                >
                    ¿Tienes alguna pregunta o proyecto en mente? ¡Contáctame!
                </motion.p>
                <motion.form
                    onSubmit={handleSubmit}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    className="grid gap-6"
                >
                    <input type="hidden" className="hidden" name="_subject" value="Mensaje enviado desde el portafolio" />
                    <div className="grid gap-4">
                        <label htmlFor="name" className="text-gray-700 font-medium">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid gap-4">
                        <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="grid gap-4">
                        <label htmlFor="message" className="text-gray-700 font-medium">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        aria-label="Boton mensaje"
                    >
                        {state.submitting ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                </motion.form>
                <ValidationError prefix="Error" field="message" errors={state.errors} />
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex gap-4"
                >
                    <a href="https://github.com/DEVedwinivan" target="_blank" className="text-gray-600 hover:underline" aria-label="Visita mi perfil de GitHub">
                        Visita mi perfil de GitHub
                        <Github className="inline-block ml-1" />
                    </a>
                    <a href="https://www.linkedin.com/in/edwin-ivan-rodriguez-velazquez-66b2a3296/" className="text-gray-600 hover:underline" aria-label="Visita mi perfil de LinkedIn">
                        Visita mi perfil de LinkedIn 
                        <Linkedin className="inline-block ml-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}