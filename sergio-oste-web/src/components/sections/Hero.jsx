import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            id="inicio"
            className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-hero-pattern bg-cover bg-center"
        >
            <div className="z-10 px-4 max-w-5xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Sergio Tomás Oste
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xl md:text-2xl font-light mb-8"
                >
                    Comprometido con San Luis y su gente
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {['Abogado', 'Gestión Pública', 'Escritor', 'Deportista'].map((role, index) => (
                        <motion.div
                            key={role}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full"
                        >
                            {role}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollToSection('sobre-mi')}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-3xl text-white cursor-pointer"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            >
                <FaChevronDown />
            </motion.button>
        </header>
    );
};

export default Hero;