import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    
    // Comprobar si estamos en la página de inicio
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Cerrar el menú móvil cuando cambia la ubicación
        setMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navigateToSection = (sectionId) => {
        // Si estamos en la página de inicio, usamos scrollIntoView
        if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                closeMobileMenu();
            }
        } else {
            // Si estamos en otra página, navegamos a la página de inicio y luego al section
            navigate('/', { state: { scrollTo: sectionId } });
            closeMobileMenu();
        }
    };

    const navItems = [
        { id: 'inicio', label: 'Inicio', path: '/#inicio' },
        { id: 'sobre-mi', label: 'Sobre Mí', path: '/#sobre-mi' },
        { id: 'trayectoria', label: 'Trayectoria', path: '/#trayectoria' },
        { id: 'libros', label: 'Libros', path: '/#libros' },
        { id: 'deportes', label: 'Deportes', path: '/historia-deportiva' },
        { id: 'notas-literarias', label: 'Notas Literarias', path: '/notas-literarias' },
        { id: 'contacto', label: 'Contacto', path: '/#contacto' }
    ];

    // Determinar el estilo del navbar según la página actual y el scroll
    const navbarStyle = isHomePage 
        ? (scrolled ? 'bg-primary/95 backdrop-blur-sm py-2 shadow-md' : 'bg-transparent py-5')
        : 'bg-primary py-4 shadow-md'; // Para otras páginas, siempre con fondo

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarStyle}`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo mejorado */}
                <Link to="/" className="text-white flex items-center">
                    <div className="text-3xl md:text-4xl font-bold">
                        Sergio <span className="text-accent border-b-2 border-accent pb-1">Oste</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Asegurando que todos los elementos estén alineados */}
                <ul className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <li key={item.id} className="flex items-center h-full">
                            {item.path.includes('/#') ? (
                                <button
                                    onClick={() => navigateToSection(item.id)}
                                    className="text-white font-medium text-lg hover:text-accent relative transition duration-300 py-2"
                                >
                                    <span className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
                                        {item.label}
                                    </span>
                                </button>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="text-white font-medium text-lg hover:text-accent relative transition duration-300 py-2"
                                >
                                    <span className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
                                        {item.label}
                                    </span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white text-2xl focus:outline-none"
                    aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-4/5 bg-primary z-50 md:hidden"
                        >
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-white text-2xl"
                                    aria-label="Cerrar menú"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="p-6">
                                <Link to="/" className="flex justify-center mb-10" onClick={closeMobileMenu}>
                                    <div className="text-3xl font-bold text-white">
                                        Sergio <span className="text-accent border-b-2 border-accent pb-1">Oste</span>
                                    </div>
                                </Link>
                                <ul className="space-y-6">
                                    {navItems.map((item) => (
                                        <li key={item.id}>
                                            {item.path.includes('/#') ? (
                                                <button
                                                    onClick={() => navigateToSection(item.id)}
                                                    className="text-white font-medium text-lg hover:text-accent relative transition duration-300 py-2 w-full text-left"
                                                >
                                                    <span className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
                                                        {item.label}
                                                    </span>
                                                </button>
                                            ) : (
                                                <Link
                                                    to={item.path}
                                                    className="text-white font-medium text-lg hover:text-accent relative transition duration-300 py-2 block"
                                                    onClick={closeMobileMenu}
                                                >
                                                    <span className="relative after:absolute after:content-[''] after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">
                                                        {item.label}
                                                    </span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute bottom-10 left-0 right-0 p-6">
                                <div className="flex space-x-4 justify-center">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 z-40 md:hidden"
                            onClick={closeMobileMenu}
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;