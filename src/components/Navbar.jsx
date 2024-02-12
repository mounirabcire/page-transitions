import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="pt-5 space-x-5 flex justify-center items-center">
            <Link to="/" className="font-bold text-lg">
                Home
            </Link>
            <Link to="about" className="font-bold text-lg">
                About
            </Link>
            <Link to="contact" className="font-bold text-lg">
                Contact
            </Link>
        </div>
    );
}

export default Navbar;
