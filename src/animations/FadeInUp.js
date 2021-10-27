import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function FadeInUp({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.25 }}
            variants={{
                visible: { opacity: 1, translateY: 0 },
                hidden: { opacity: 0, translateY: 50 },
            }}
        >
            {children}
        </motion.div>
    );
}
