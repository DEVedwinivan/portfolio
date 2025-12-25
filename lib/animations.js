import { easeOut } from "framer-motion";

export const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.6, ease: "easeOut", } },
};