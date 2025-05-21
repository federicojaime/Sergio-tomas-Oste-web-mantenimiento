// src/pages/SportHistory.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaCar, FaFlagCheckered, FaHistory, FaUsers, FaTools } from 'react-icons/fa';
import deporteImage from '/assets/deporte.jpg';

const achievementsData = [
    {
        id: 1,
        title: "Rally - Categoría A6",
        description: "Campeón Provincial de San Luis (2000)",
        icon: FaTrophy
    },
    {
        id: 2,
        title: "Rally - Categoría A7",
        description: "Campeón Provincial de San Luis (2001)",
        icon: FaMedal
    },
    {
        id: 3,
        title: "Rally - Categoría N2",
        description: "Campeón Provincial de San Luis (2013)",
        icon: FaCar
    },
    {
        id: 4,
        title: "Campeonato Absoluto",
        description: "Campeón Provincial de San Luis (2013)",
        icon: FaFlagCheckered
    }
];

const SportHistory = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [historyRef, historyInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [teamRef, teamInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Historia Deportiva | Sergio Tomás Oste";
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative h-96 bg-cover bg-center bg-fixed flex items-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${deporteImage}")` }}>
                <div className="container mx-auto text-white text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Historia Deportiva
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-xl max-w-3xl mx-auto"
                    >
                        Oste Rally Team: Más de 40 años de pasión por el automovilismo
                    </motion.p>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-gradient-to-b from-primary/95 to-primary/80 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Principales Logros</h2>
                        <div className="w-24 h-1 bg-accent mx-auto"></div>
                    </div>

                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                    >
                        {achievementsData.map((achievement) => (
                            <motion.div
                                key={achievement.id}
                                variants={itemVariants}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    duration: 0.6
                                }}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-3 hover:bg-white/20 border border-white/10"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex justify-center mb-6">
                                    <achievement.icon className="text-5xl text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                                <p className="text-white/90">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 items-center">
                        <motion.div
                            ref={historyRef}
                            initial={{ opacity: 0, x: -50 }}
                            animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src={deporteImage}
                                    alt="Equipo Oste Rally Team"
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                                <FaHistory className="mr-3 text-accent" /> Historia del Equipo
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Sergio Oste debutó en el Rally de la Falda, provincia de Córdoba en 1987, y en el mismo año en el Rally Codasur internacional, 24 horas de Tanti, provincia de Córdoba.</p>

                                <p>En el año 1988 compitió en el rally Zonal de Córdoba, y en el Gran Premio Nacional, disputado en la provincia de San Luis.</p>

                                <p>A partir de allí comenzó una dilatada trayectoria en el mundo del automovilismo Zonal, alternando entre la pista y el Rally en su provincia natal, participando en distintas categorías 1100 cm³ y A6 en Rally, 850 cm³; TC 4000 cm³, en pista.</p>

                                <p>En 1996, tras armar un equipo propio, disputó el Campeonato Argentino de Rally en la categoría A6.</p>

                                <p>En el año 2000 se consagró campeón de la categoría A6 y Sub campeón absoluto del Rally de la provincia de San Luis, navegado por Jorge Oste quien logra el título de Campeón absoluto, con un VW gol 1.6 cm³.</p>

                                <p>En el año 2001 se consagró campeón de la categoría A7 del Rally de la provincia de San Luis, navegado por Jorge Oste con un VW gol 1.8 cm³.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-12 border-l-4 border-accent pl-6 ml-4">
                        <div className="space-y-4 text-gray-700">
                            <p>En el año 2008 se incorpora al equipo de Rally, primero como navegante y al año siguiente debuta como piloto, su hijo Franco Oste, quien obtiene los títulos de campeón de la categoría N7 y sub campeón absoluto en el año 2012 y su navegante Luis Gutierrez logra el campeonato absoluto.</p>

                            <p>En el año 2013 Sergio se consagró campeón de la categoría N2 del Rally de la provincia de San Luis, navegado por su hija Nathalie Oste, conquistando además el máximo trofeo que otorga el campeonato <span className="font-bold">absoluto</span> de todas las categorías de la provincia.</p>

                            <p>En el año 2015 Franco Oste, navegado por Marcos Saco, obtienen el título de Campeones de la categoría N7 y el <span className="font-bold">absoluto</span> del Rally de La Provincia de San Luis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">El Equipo</h2>
                        <div className="w-24 h-1 bg-accent mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        <motion.div
                            ref={teamRef}
                            initial={{ opacity: 0, y: 30 }}
                            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7 }}
                            className="md:w-1/2"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                                    <FaUsers className="mr-3 text-accent" /> Navegantes
                                </h3>
                                <p className="mb-4 text-gray-700">Navegantes que pasaron por la butaca derecha del Oste Rally Team:</p>
                                <p className="text-gray-700">
                                    Roberto Cabrera, Gustavo Losser, Mariela Mithiaux, Jorge Oste, Luis Gutierrez, Marcos Saco,
                                    Luciano Gomez, Arturo Dana, Hernan Fernandez, Carlos Suarez, Silvio Montenegro, Alejandra Baroja,
                                    Oscar Berdugo, Horacio Escudero, Francisco Gutierrez, Nicolle Oste Jones, Nathalie Oste.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="md:w-1/2"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                                    <FaTools className="mr-3 text-accent" /> Mecánicos y Colaboradores
                                </h3>
                                <p className="mb-4 text-gray-700">A lo largo de estos 40 años, pasaron un gran número de Mecánicos y colaboradores, solo basta nombrar a quienes mayor tiempo han dedicado al equipo:</p>
                                <p className="text-gray-700">
                                    Ángel Miranda, José Yocco, Fernando Oste, Aníbal Castro, Jorge Mignan, Perico Perez, Raúl Delay,
                                    Miranda, Quico Yocco, Luis De Haro, Ariel Yubero, Orlando Baroja, Mauricio Rosales, Claudio Lucero.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Línea de Tiempo</h2>
                        <div className="w-24 h-1 bg-accent mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {[
                            { year: "1987", event: "Debut en Rally de la Falda y Rally Codasur internacional" },
                            { year: "1988", event: "Competición en Rally Zonal de Córdoba y Gran Premio Nacional" },
                            { year: "1996", event: "Creación del equipo propio y disputa del Campeonato Argentino de Rally" },
                            { year: "2000", event: "Campeón categoría A6 y Sub campeón absoluto de San Luis" },
                            { year: "2001", event: "Campeón categoría A7 del Rally de San Luis" },
                            { year: "2008", event: "Incorporación de Franco Oste al equipo como navegante" },
                            { year: "2012", event: "Franco Oste obtiene títulos de campeón N7 y subcampeón absoluto" },
                            { year: "2013", event: "Campeón categoría N2 y Campeón Absoluto de San Luis" },
                            { year: "2015", event: "Franco Oste obtiene título de Campeón N7 y Absoluto de San Luis" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-center mb-8"
                            >
                                <div className="w-24 md:w-32 flex-shrink-0 text-center">
                                    <span className="text-accent font-bold text-xl">{item.year}</span>
                                </div>
                                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-accent mx-4"></div>
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex-grow border border-white/10">
                                    <p className="text-white">{item.event}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SportHistory;