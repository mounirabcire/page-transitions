import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

function Contact() {
    const title = "Contact";
    const paragraph =
        " Lorem, ipsum dolor sit amet consectetur adipisicing" +
        "elit. Iste distinctio in animi labore, quidem vitae sint" +
        "at expedita veniam magnam error doloribus dolor, esse" +
        "voluptate inventore dolorum iusto. Molestiae," +
        "laboriosam!";

    const parent = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.001,
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
            <div className="mt-[70px] space-y-5">
                <div className=" overflow-hidden">
                    <motion.h1
                        variants={parent}
                        initial="initial"
                        animate="animate"
                        className="text-5xl text-center"
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
                <div className="overflow-hidden">
                    <motion.p
                        variants={parent}
                        initial="initial"
                        animate="animate"
                        className="text-center "
                    >
                        {paragraph.split("").map((char) => (
                            <motion.span
                                className="inline-block"
                                variants={children}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </div>
            </div>
        </PageTransition>
    );
}

export default Contact;
