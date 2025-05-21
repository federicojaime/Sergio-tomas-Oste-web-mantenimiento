import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const timelineData = [
    {
        date: "1988",
        title: "Egresado en Derecho",
        description: "Egresó de la Universidad Católica de Córdoba con el título de Abogado, iniciando su carrera profesional.",
        side: "left"
    },
    {
        date: "1988 - 1992",
        title: "Asesor Legal de la Policía Provincial",
        description: "Brindó asesoramiento jurídico a la institución policial, contribuyendo al fortalecimiento del marco legal en su actuación.",
        side: "right"
    },
    {
        date: "1993 - 1997",
        title: "Senador Provincial",
        description: "Representó al Departamento Pedernera en la Legislatura Provincial, donde presidió la Comisión de Asuntos Constitucionales y la Comisión Bicameral de Enlace.",
        side: "left"
    },
    {
        date: "1999",
        title: "Certificación Internacional",
        description: "Obtuvo el título de Experto en Dirección y Gestión Pública Local por la Universidad Carlos III de Madrid, España.",
        side: "right"
    },
    {
        date: "2000 - 2013",
        title: "Campeón de Rally",
        description: "Múltiple campeón provincial de Rally en las categorías A6 (2000), A7 (2001), N2 y Campeonato Absoluto (2013).",
        side: "left"
    },
    {
        date: "2015 - 2021",
        title: "Vicepresidente SPTCRA",
        description: "Vicepresidente Primero del Secretariado Permanente de Tribunales de Cuentas, Órganos y Organismos Públicos de Control Externo de la República Argentina.",
        side: "right"
    },
    {
        date: "2022 - 2026",
        title: "Presidente SPTCRA",
        description: "Presidente del Secretariado Permanente de Tribunales de Cuentas, reelecto para el período 2024-2026, y Vocal del Honorable Tribunal de Cuentas de la Provincia de San Luis.",
        side: "left"
    }
];

const TimelineItem = ({ item, index, isMobile }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const variants = {
        hidden: {
            opacity: 0,
            x: isMobile ? 0 : (item.side === "left" ? -50 : 50),
            y: isMobile ? 30 : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-8 flex ${isMobile 
                ? "flex-col items-start" 
                : `justify-between items-center w-full ${item.side === "left" ? "flex-row" : "flex-row-reverse"}`
            }`}
        >
            {!isMobile && <div className="order-1 w-5/12"></div>}
            
            <div className={`z-20 flex items-center order-1 bg-accent w-8 h-8 rounded-full ${isMobile ? "mb-2" : ""}`}>
                <div className="mx-auto w-3 h-3 bg-white rounded-full"></div>
            </div>
            
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className={`order-1 ${isMobile ? "w-full" : "w-5/12"} px-6 py-4 rounded-lg shadow-md bg-white border-l-4 border-accent`}
            >
                <h3 className="mb-3 font-bold text-xl text-secondary">{item.title}</h3>
                <time className="block mb-2 text-sm font-bold text-gray-700">{item.date}</time>
                <p className="text-sm md:text-base leading-snug text-gray-600">{item.description}</p>
            </motion.div>
        </motion.div>
    );
};

const Timeline = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Verificar tamaño inicial
        checkScreenSize();
        
        // Agregar listener para cambios de tamaño
        window.addEventListener('resize', checkScreenSize);
        
        // Limpiar listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <section id="trayectoria" className="bg-gray-100 py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary relative inline-block pb-3">
                        Trayectoria Pública
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-accent rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Un recorrido por los principales hitos en la carrera profesional, deportiva y pública de Sergio Tomás Oste.
                    </p>
                </div>

                <div ref={ref} className="relative wrap overflow-hidden p-2 md:p-10">
                    {/* Línea vertical (visible solo en desktop) */}
                    {!isMobile && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: '100%' } : { height: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute h-full border-2 border-secondary left-1/2 transform -translate-x-1/2"
                        ></motion.div>
                    )}
                    
                    {/* Línea vertical para móvil (izquierda) */}
                    {isMobile && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: '100%' } : { height: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute h-full border-2 border-secondary left-4"
                        ></motion.div>
                    )}

                    {/* Elementos de la línea de tiempo */}
                    <div className={`container mx-auto w-full ${isMobile ? "pl-8" : ""}`}>
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} isMobile={isMobile} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;