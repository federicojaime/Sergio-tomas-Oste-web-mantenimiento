import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary py-2 shadow-md' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">
                    Sergio <span className="text-accent">Oste</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8">
                    {['inicio', 'sobre-mi', 'trayectoria', 'libros', 'deportes', 'contacto'].map((item) => (
                        <li key={item}>
                            <Link
                                to={`/#${item}`}
                                className="text-white font-medium text-lg hover:text-accent relative transition duration-300 py-2"
                                onClick={closeMobileMenu}
                            >
                                <span className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
                                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white text-2xl focus:outline-none"
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: mobileMenuOpen ? '0%' : '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-screen w-4/5 bg-primary z-50 md:hidden"
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleMobileMenu} className="text-white text-2xl">
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-6 mt-10">
                    {[
                        { id: 'inicio', label: 'Inicio', path: '/#inicio' },
                        { id: 'sobre-mi', label: 'Sobre Mí', path: '/#sobre-mi' },
                        { id: 'trayectoria', label: 'Trayectoria', path: '/#trayectoria' },
                        { id: 'libros', label: 'Libros', path: '/#libros' },
                        { id: 'deportes', label: 'Deportes', path: '/#deportes' },
                        { id: 'notas-literarias', label: 'Notas Literarias', path: '/notas-literarias' },
                        { id: 'contacto', label: 'Contacto', path: '/#contacto' }
                    ].map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.path}
                                className="text-white font-medium text-lg hover:text-accent relative transition duration-300 py-2"
                                onClick={closeMobileMenu}
                            >
                                <span className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Overlay when mobile menu is open */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}
        </nav>
    );
};

export default NavBar;