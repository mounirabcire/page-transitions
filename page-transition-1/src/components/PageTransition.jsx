import { motion } from "framer-motion";

function PageTransition({ children }) {
    const scale1 = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 0,
        },
        exit: {
            scaleY: 1,
        },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    };

    const scale2 = {
        initial: {
            scaleY: 1,
        },
        animate: {
            scaleY: 0,
        },
        exit: {
            scaleY: 0,
        },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
        <>
            {children}
            <motion.div
                {...anim(scale1)}
                // // the initial value of the scaleY property is set to 0
                // initial={{ scaleY: 0 }}
                // // when the component mounts the div element will not be animated, because the scaleY property is still 0
                // animate={{ scaleY: 0 }}
                // // when the component unmounts the div element will be animated from scaleY set to 0 to scaleY set to 1
                // exit={{ scaleY: 1 }}
                // transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-screen w-full bg-[#0f0f0f] fixed top-0 left-0 z-10 origin-bottom"
            ></motion.div>
            <motion.div
                {...anim(scale2)}
                // // the initial value of the scaleY property is set to 1
                // initial={{ scaleY: 1 }}
                // // when the component mounts the div element will not be animated, because the scaleY property is set to 0
                // animate={{ scaleY: 0 }}
                // // before the component unmounts the div element will be animated from scaleY set to 1 to scaleY set to 0
                // exit={{ scaleY: 0 }}
                // transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-screen w-full bg-[#0f0f0f] fixed top-0 left-0 z-20 origin-top"
            ></motion.div>
        </>
    );
}

export default PageTransition;
