"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function SkillCard({ category, items, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="border border-gray-200 rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold">{category}</h3>

      <ul className="mt-4 space-y-2 text-gray-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
