import '../component/Navigation.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import '../styles/commonStyles.css'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 && isMdOrLarger) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMdOrLarger(window.innerWidth >= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMdOrLarger]);

    return (
        <header className={`fixed top-6 left-0 w-full p-4 rounded-lg text-white font-bold z-50 transition-all duration-300 
        ${isMdOrLarger && isScrolled ? 'backdrop-blur-md bg-black/20' : 'md:bg-black'}`}>
            <nav className={`px-6 py-4 flex justify-between items-center relative w-full ${isMdOrLarger ? 'max-w-6xl mx-auto' : ''}`}>
                <ul className="hidden md:flex space-x-20 absolute left-1/2 transform -translate-x-1/2 mt-1">
                    <li><Link to="/home" className="font-color">Home</Link></li>
                    <li><Link to="/about" className="font-color">About</Link></li>
                    <li><Link to="/works" className="font-color">Works</Link></li>
                    <li><Link to="/contact" className="font-color">Contact me</Link></li>
                </ul>

                <div className="flex-grow flex justify-end md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBarsStaggered} size="lg" />
                    </button>
                </div>
            </nav>

            {isOpen && (
                <ul className="absolute top-full left-0 w-full bg-black text-center md:hidden flex flex-col space-y-6 p-4">
                    <li><Link to="/home" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/works" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Works</Link></li>
                    <li><Link to="/contact" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact me</Link></li>
                </ul>
            )}
        </header>
    );
}

export default Navigation;
