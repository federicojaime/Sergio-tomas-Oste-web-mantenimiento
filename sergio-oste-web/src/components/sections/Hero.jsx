import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Importar imágenes
import heroImage1 from '/assets/foto-10.jpg';
import heroImage2 from '/assets/foto-11.jpg';
import heroImage3 from '/assets/foto-20.jpg';

const Hero = () => {
    // Imágenes para el slider usando las importaciones
    const heroBackgrounds = [
        heroImage1,
        heroImage2,
        heroImage3
    ];

    const [currentBg, setCurrentBg] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Comprobar si es dispositivo móvil
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        // Cambio de imagen de fondo
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
        }, 7000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', checkMobile);
        };
    }, [heroBackgrounds.length]);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            id="inicio"
            className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden"
        >
            {/* Fondos alternantes */}
            {heroBackgrounds.map((bg, index) => (
                <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: currentBg === index ? 1 : 0
                    }}
                    transition={{ duration: 1.8 }}
                >
                    <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: 'center 10%' // Ajustado para mostrar más del rostro
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/90"></div>
                </motion.div>
            ))}

            {/* Versión móvil optimizada */}
            {isMobile && (
                <div className="container mx-auto z-10 px-4 flex flex-col items-center justify-end h-full pb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-sm mx-auto mb-16"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-xl relative">
                            <FaQuoteLeft className="text-accent/50 text-3xl absolute top-3 left-3" />

                            <p className="text-lg italic font-light leading-relaxed px-6 py-3 text-center">
                                Vuela alto; que te asistan las plumas del pasado; no te arrastres; ni como serpiente venenosa, ni como gusano impávido.
                            </p>

                            <FaQuoteRight className="text-accent/50 text-3xl absolute bottom-3 right-3" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex gap-4"
                    >
                        <button
                            onClick={() => scrollToSection('libros')}
                            className="px-5 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full shadow-md"
                        >
                            Descubrir Obras
                        </button>
                        <button
                            onClick={() => scrollToSection('contacto')}
                            className="px-5 py-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-full"
                        >
                            Contactar
                        </button>
                    </motion.div>
                </div>
            )}

            {/* Versión de escritorio */}
            {!isMobile && (
                <div className="container mx-auto z-10 px-4 flex flex-col md:flex-row md:items-center h-full">
                    <div className="md:w-1/2 md:pr-12 text-left mt-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            Sergio Tomás Oste
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            {['Abogado', 'Gestión Pública', 'Escritor', 'Deportista'].map((role, index) => (
                                <motion.div
                                    key={role}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm"
                                >
                                    {role}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => scrollToSection('libros')}
                                className="px-6 py-2.5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all hover:-translate-y-1 shadow-md"
                            >
                                Descubrir Obras
                            </button>
                            <button
                                onClick={() => scrollToSection('contacto')}
                                className="px-6 py-2.5 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all hover:-translate-y-1"
                            >
                                Contactar
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="md:w-1/2 mt-12 md:mt-0 relative"
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 border border-white/20 shadow-xl relative">
                            <FaQuoteLeft className="text-accent/50 text-4xl absolute top-4 left-4" />

                            <p className="text-lg md:text-xl italic font-light leading-relaxed px-8 py-4 text-center">
                                Vuela alto; que te asistan las plumas del pasado; no te arrastres; ni como serpiente venenosa, ni como gusano impávido.
                            </p>

                            <FaQuoteRight className="text-accent/50 text-4xl absolute bottom-4 right-4" />

                            <p className="text-right mt-4 text-sm text-white/80">- Sergio Tomás Oste</p>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Flecha para desplazarse hacia abajo */}
            <motion.button
                onClick={() => scrollToSection('sobre-mi')}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-3xl text-white cursor-pointer z-10"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
                aria-label="Desplazar hacia abajo"
            >
                <FaChevronDown />
            </motion.button>
        </header>
    );
};

export default Hero;