import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="mt-2 flex items-center justify-center">
            <ul className="flex items-center space-x-3 font-medium">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
