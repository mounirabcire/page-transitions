import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

function Contact() {
    const title = "Contact";

    const parent = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const children = {
        initial: {
            opacity: 0,
            rotate: 50,
            y: 50,
        },
        animate: {
            opacity: 1,
            rotate: 0,
            y: 0,
        },
    };

    return (
        <PageTransition>
            <div className="mt-20 overflow-hidden">
                <motion.h1
                    variants={parent}
                    initial="initial"
                    animate="animate"
                    className="text-8xl text-center"
                >
                    {title.split("").map((char) => (
                        <motion.span
                            className="inline-block"
                            variants={children}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
            </div>
        </PageTransition>
    );
}

export default Contact;
