import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaFileAlt, FaTimes, FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const CVDownloadWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [showWidget, setShowWidget] = useState(false);

    useEffect(() => {
        // Mostrar el widget después de 3 segundos
        const timer = setTimeout(() => {
            setShowWidget(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleDownload = async () => {
        setIsDownloading(true);
        
        try {
            const link = document.createElement('a');
            link.href = '/assets/cv-sergio-tomas-oste.pdf';
            link.download = 'CV-Sergio-Tomas-Oste.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            setTimeout(() => {
                setIsDownloading(false);
                setIsExpanded(false);
            }, 2500);
        } catch (error) {
            console.error('Error al descargar el CV:', error);
            setIsDownloading(false);
        }
    };

    const highlights = [
        { icon: FaGraduationCap, text: "Abogado - UC Córdoba" },
        { icon: FaBriefcase, text: "Senador Provincial" },
        { icon: FaUser, text: "Escritor y Deportista" }
    ];

    return (
        <AnimatePresence>
            {showWidget && (
                <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.8 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 20 
                                }}
                                className="mb-4 sm:mb-6 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-64 sm:w-72 md:w-80 max-w-[calc(100vw-2rem)]"
                                style={{
                                    backdropFilter: 'blur(20px)',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.8)'
                                }}
                            >
                                {/* Header con gradiente */}
                                <div className="relative bg-gradient-to-r from-primary via-primary to-secondary p-4 sm:p-5 md:p-6 text-white overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                    <FaFileAlt className="text-white text-base sm:text-lg md:text-xl" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-sm sm:text-base md:text-lg">Curriculum Vitae</h3>
                                                    <p className="text-white/80 text-xs sm:text-sm">Sergio Tomás Oste</p>
                                                </div>
                                            </div>
                                            <motion.button
                                                onClick={() => setIsExpanded(false)}
                                                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <FaTimes className="text-xs sm:text-sm" />
                                            </motion.button>
                                        </div>
                                        
                                        {/* Highlights */}
                                        <div className="space-y-1.5 sm:space-y-2">
                                            {highlights.map((highlight, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90"
                                                >
                                                    <highlight.icon className="text-accent text-sm" />
                                                    <span>{highlight.text}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full"></div>
                                    <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full"></div>
                                </div>

                                {/* Body */}
                                <div className="p-4 sm:p-5 md:p-6">
                                    <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                                        Descarga el curriculum completo con toda la trayectoria profesional, académica y deportiva de más de 30 años de experiencia.
                                    </p>
                                    
                                    {/* Download button */}
                                    <motion.button
                                        onClick={handleDownload}
                                        disabled={isDownloading}
                                        className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
                                        whileHover={{ scale: isDownloading ? 1 : 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isDownloading ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                <span>Descargando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaDownload className="text-base sm:text-lg" />
                                                <span>Descargar CV Completo</span>
                                            </>
                                        )}
                                    </motion.button>

                                    {/* File info */}
                                    <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                                        <div className="flex justify-between items-center text-xs text-gray-500">
                                            <div className="flex items-center gap-2 sm:gap-4">
                                                <span className="bg-red-100 text-red-600 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded font-medium text-xs">PDF</span>
                                                <span>Actualizado 2025</span>
                                            </div>
                                            <span className="font-medium">2.1 MB</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating button - más espectacular */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 15,
                            delay: 0.5
                        }}
                        className="relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-lg opacity-70 animate-pulse"></div>
                        
                        {/* Main button */}
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-accent via-accent to-primary text-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: [
                                    '0 10px 30px rgba(220, 38, 127, 0.3)',
                                    '0 20px 40px rgba(220, 38, 127, 0.4)',
                                    '0 10px 30px rgba(220, 38, 127, 0.3)'
                                ]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }
                            }}
                        >
                            {/* Background animation */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            
                            {/* Icon */}
                            <motion.div
                                animate={{ 
                                    rotate: isExpanded ? 135 : 0,
                                    scale: isExpanded ? 0.8 : 1
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                {isExpanded ? (
                                    <FaTimes className="text-base sm:text-lg md:text-xl" />
                                ) : (
                                    <FaDownload className="text-base sm:text-lg md:text-xl" />
                                )}
                            </motion.div>
                            
                            {/* Ripple effect */}
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white animate-ping"></div>
                        </motion.button>

                        {/* Floating particles - solo en desktop */}
                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                                x: [-2, 2, -2]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }}
                            className="hidden sm:block absolute -top-2 -right-2 w-3 h-3 bg-accent/60 rounded-full"
                        ></motion.div>
                        
                        <motion.div
                            animate={{
                                y: [5, -5, 5],
                                x: [2, -2, 2]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                delay: 1
                            }}
                            className="hidden sm:block absolute -bottom-1 -left-1 w-2 h-2 bg-primary/60 rounded-full"
                        ></motion.div>

                        {/* Tooltip mejorado - solo en desktop */}
                        <AnimatePresence>
                            {!isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="hidden md:block absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap pointer-events-none shadow-lg"
                                >
                                    <div className="flex items-center gap-2">
                                        <FaFileAlt className="text-accent" />
                                        <span className="font-medium">Descargar CV</span>
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-8 border-l-secondary border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CVDownloadWidget;