import { motion } from "framer-motion";
import NavBar from "./NavBar";

function PageTransition({ children }) {
    const variants = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 0,
        },
        exit: {
            scaleY: 1,
            transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
            },
        },
    };

    const scale = {
        initial: {
            scale: 1,
            y: 0,
        },
        animate: {
            scale: 1,
            y: 0,
        },
        exit: {
            scale: 0.3,
            y: -150,
            transition: {
                duration: 1.3,
                ease: [0.83, 0, 0.17, 1],
            },
        },
    };
    return (
        <div className="bg-slate-900">
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="origin-bottom fixed top-0 left-0 w-full h-screen bg-slate-100 z-30"
            />

            <motion.div
                variants={scale}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-slate-100"
            >
                <NavBar />
                {children}
            </motion.div>
        </div>
    );
}

export default PageTransition;
