import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
