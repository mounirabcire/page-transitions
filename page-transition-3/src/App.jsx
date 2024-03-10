import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index path="/" element={<Home />} />
                    <Route index path="/about" element={<About />} />
                    <Route index path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
