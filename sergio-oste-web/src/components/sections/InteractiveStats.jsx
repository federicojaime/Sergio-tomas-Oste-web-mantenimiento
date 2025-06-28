import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InteractiveStats = () => {
    const [hoveredStat, setHoveredStat] = useState(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        {
            id: 1,
            number: "35+",
            label: "Años de Experiencia",
            description: "Más de tres décadas dedicado al servicio público, la abogacía y la escritura",
            icon: "⚖️",
            color: "from-blue-500 to-blue-700"
        },
        {
            id: 2,
            number: "4",
            label: "Libros Publicados",
            description: "Obras literarias que exploran la historia y cultura de San Luis",
            icon: "📚",
            color: "from-green-500 to-green-700"
        },
        {
            id: 3,
            number: "6",
            label: "Campeonatos de Rally",
            description: "Múltiple campeón provincial en diferentes categorías",
            icon: "🏆",
            color: "from-yellow-500 to-orange-600"
        },
        {
            id: 4,
            number: "50+",
            label: "Proyectos de Ley",
            description: "Iniciativas legislativas que mejoraron la vida de los sanluiseños",
            icon: "📋",
            color: "from-purple-500 to-purple-700"
        },
        {
            id: 5,
            number: "15+",
            label: "Obras Públicas",
            description: "Propuestas de infraestructura para el desarrollo provincial",
            icon: "🏗️",
            color: "from-red-500 to-red-700"
        },
        {
            id: 6,
            number: "20+",
            label: "Años en Control Público",
            description: "Experiencia en tribunales de cuentas y control externo",
            icon: "🔍",
            color: "from-indigo-500 to-indigo-700"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full blur-xl"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-purple-300 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-32 w-24 h-24 bg-green-300 rounded-full blur-xl"></div>
                <div className="absolute bottom-40 right-10 w-18 h-18 bg-orange-300 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Una Vida de Logros
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "96px" } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
                    >
                        Descubrí los números que respaldan una trayectoria excepcional
                    </motion.p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={itemVariants}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredStat(stat.id)}
                            onMouseLeave={() => setHoveredStat(null)}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                                {/* Fondo degradado animado */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    initial={false}
                                ></motion.div>

                                {/* Icono animado */}
                                <motion.div
                                    className="text-4xl mb-4 relative z-10"
                                    animate={hoveredStat === stat.id ? {
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 10, 0]
                                    } : {}}
                                    transition={{ duration: 0.6 }}
                                >
                                    {stat.icon}
                                </motion.div>

                                {/* Número principal */}
                                <motion.div
                                    className="relative z-10"
                                    animate={hoveredStat === stat.id ? { y: -2 } : { y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                        {stat.number}
                                    </h3>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</h4>
                                </motion.div>

                                {/* Descripción expandible */}
                                <motion.div
                                    className="relative z-10 overflow-hidden"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={hoveredStat === stat.id ?
                                        { height: "auto", opacity: 1 } :
                                        { height: 0, opacity: 0 }
                                    }
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-200">
                                        {stat.description}
                                    </p>
                                </motion.div>

                                {/* Efecto de brillo en hover */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60"
                                    animate={hoveredStat === stat.id ? {
                                        x: ['-100%', '100%']
                                    } : {}}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                ></motion.div>

                                {/* Indicador de interactividad */}
                                <motion.div
                                    className="absolute bottom-4 right-4 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100"
                                    animate={hoveredStat === stat.id ? {
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    } : {}}
                                    transition={{ duration: 1, repeat: Infinity }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Texto motivacional */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto">
                        <p className="text-xl text-gray-700 italic leading-relaxed">
                            "Cada número cuenta una historia, cada logro representa el compromiso
                            inquebrantable con San Luis y su gente."
                        </p>
                        <div className="mt-4 text-accent font-semibold">— Sergio Tomás Oste</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveStats;