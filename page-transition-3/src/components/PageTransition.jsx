import { motion } from "framer-motion";

const anim = (variants, custom) => {
    return {
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants,
        custom,
    };
};

const scale = {
    initial: { scaleY: 1, transformOrigin: "bottom" },
    animate: (i) => ({
        scaleY: 0,
        transition: {
            delay: 0.055 * i,
            ease: [0.16, 1, 0.3, 1],
            duration: 0.6,
        },
        transitionEnd: {
            scaleY: 0,
            transformOrigin: "top",
        },
    }),
    exit: (i) => ({
        scaleY: 1,
        transition: {
            delay: 0.06 * i,
            ease: [0.16, 1, 0.3, 1],
            duration: 0.6,
        },
    }),
};

function PageTransition({ children }) {
    return (
        <>
            <div className="absolute top-0 left-0 flex w-full h-screen bg-transparent pointer-events-none">
                {Array.from({ length: 6 }, (curr, i) => (
                    <motion.div
                        key={i}
                        {...anim(scale, 6 - i)}
                        className="w-10 h-full flex-1 bg-black"
                    ></motion.div>
                ))}
            </div>
            {children}
        </>
    );
}

export default PageTransition;
