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
            opacity: 1,
        },
        animate: {
            scale: 1,
            y: 0,
            opacity: 1,
        },
        exit: {
            scale: 0.9,
            y: -150,
            opacity: 0.5,
            transition: {
                duration: 1.2,
                ease: [0.83, 0, 0.17, 1],
            },
        },
    };

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "animate",
            exit: "exit",
            variants,
        };
    };

    return (
        <div className="bg-black">
            <motion.div
                // variants={variants}
                // initial="initial"
                // animate="animate"
                // exit="exit"
                {...anim(variants)}
                className="origin-bottom fixed top-0 left-0 w-full h-screen bg-white z-30"
            />

            <motion.div
                // variants={scale}
                // initial="initial"
                // animate="animate"
                // exit="exit"
                {...anim(scale)}
                className="bg-white"
            >
                <NavBar />
                {children}
            </motion.div>
        </div>
    );
}

export default PageTransition;
