import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CurrentRoles = () => {
    const [selectedRole, setSelectedRole] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const roles = [
        {
            id: 1,
            title: "Presidente SPTCRA",
            subtitle: "Secretariado Permanente de Tribunales de Cuentas",
            period: "2022-2026",
            description: "Lidera el Secretariado Permanente de Tribunales de Cuentas, Órganos y Organismos Públicos de Control Externo de la República Argentina, promoviendo la transparencia y el control de fondos públicos.",
            achievements: [
                "Reelecto para el período 2024-2026",
                "Coordinación de organismos de control a nivel nacional",
                "Fortalecimiento de la cooperación internacional",
                "Implementación de nuevas metodologías de control"
            ],
            icon: "🏛️",
            color: "from-blue-600 to-blue-800",
            bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100"
        },
        {
            id: 2,
            title: "Vocal HTC San Luis",
            subtitle: "Honorable Tribunal de Cuentas de San Luis",
            period: "Actualidad",
            description: "Miembro del Honorable Tribunal de Cuentas de la Provincia de San Luis, ejerciendo el control externo de la gestión pública provincial y velando por el uso correcto de los recursos públicos.",
            achievements: [
                "Control y auditoría de cuentas públicas provinciales",
                "Supervisión de la ejecución presupuestaria",
                "Promoción de la transparencia gubernamental",
                "Capacitación en control público"
            ],
            icon: "⚖️",
            color: "from-green-600 to-green-800",
            bgPattern: "bg-gradient-to-br from-green-50 to-emerald-100"
        },
        {
            id: 3,
            title: "Autor y Escritor",
            subtitle: "Literatura e Investigación Histórica",
            period: "Actualidad",
            description: "Continúa su labor como escritor e investigador, explorando la historia y cultura de San Luis a través de obras que rescatan el patrimonio cultural de la región.",
            achievements: [
                "Autor de 'Juana Koslay, Arocena la última princesa' (2024)",
                "Participación en ferias internacionales del libro",
                "Investigación histórica sobre San Luis",
                "Promoción de la cultura puntana"
            ],
            icon: "📖",
            color: "from-purple-600 to-purple-800",
            bgPattern: "bg-gradient-to-br from-purple-50 to-violet-100"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const detailVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Cargos Actuales
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "120px" } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
                    >
                        Responsabilidades actuales en el servicio público y la cultura
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                    {/* Panel de selección de roles */}
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="lg:w-1/3 space-y-4"
                    >
                        {roles.map((role, index) => (
                            <motion.div
                                key={role.id}
                                variants={cardVariants}
                                className={`cursor-pointer transition-all duration-500 ${selectedRole === index
                                        ? 'scale-105 shadow-xl'
                                        : 'hover:scale-102 shadow-lg hover:shadow-xl'
                                    }`}
                                onClick={() => setSelectedRole(index)}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`p-6 rounded-2xl border-2 transition-all duration-500 ${selectedRole === index
                                        ? `${roles[index].bgPattern} border-accent shadow-accent/20`
                                        : 'bg-white border-gray-200 hover:border-gray-300'
                                    }`}>
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className="text-3xl"
                                            animate={selectedRole === index ? {
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 5, 0]
                                            } : {}}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {role.icon}
                                        </motion.div>
                                        <div className="flex-grow">
                                            <h3 className={`font-bold text-lg transition-colors duration-300 ${selectedRole === index ? 'text-primary' : 'text-gray-800'
                                                }`}>
                                                {role.title}
                                            </h3>
                                            <p className={`text-sm transition-colors duration-300 ${selectedRole === index ? 'text-gray-700' : 'text-gray-600'
                                                }`}>
                                                {role.period}
                                            </p>
                                        </div>
                                        <motion.div
                                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${selectedRole === index ? 'bg-accent' : 'bg-gray-300'
                                                }`}
                                            animate={selectedRole === index ? {
                                                scale: [1, 1.5, 1],
                                                opacity: [0.7, 1, 0.7]
                                            } : {}}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        ></motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Panel de detalles */}
                    <motion.div
                        className="lg:w-2/3"
                        key={selectedRole}
                        variants={detailVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className={`${roles[selectedRole].bgPattern} rounded-3xl p-8 shadow-2xl border border-gray-200 relative overflow-hidden`}>
                            {/* Patrón de fondo decorativo */}
                            <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                                <div className={`w-full h-full bg-gradient-to-br ${roles[selectedRole].color} rounded-full blur-3xl`}></div>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-6 mb-6">
                                    <motion.div
                                        className="text-5xl"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15
                                        }}
                                    >
                                        {roles[selectedRole].icon}
                                    </motion.div>
                                    <div className="flex-grow">
                                        <motion.h3
                                            className="text-3xl font-bold text-primary mb-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {roles[selectedRole].title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-lg text-gray-700 mb-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {roles[selectedRole].subtitle}
                                        </motion.p>
                                        <motion.span
                                            className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${roles[selectedRole].color}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {roles[selectedRole].period}
                                        </motion.span>
                                    </div>
                                </div>

                                <motion.p
                                    className="text-gray-700 text-lg leading-relaxed mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {roles[selectedRole].description}
                                </motion.p>

                                <div>
                                    <motion.h4
                                        className="text-xl font-bold text-primary mb-4 flex items-center gap-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        ✨ Principales Responsabilidades
                                    </motion.h4>
                                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {roles[selectedRole].achievements.map((achievement, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + index * 0.1 }}
                                                whileHover={{ scale: 1.02, x: 5 }}
                                            >
                                                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                                                <span className="text-gray-700">{achievement}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CurrentRoles;