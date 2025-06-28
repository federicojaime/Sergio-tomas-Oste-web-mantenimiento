import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PublicWorks = () => {
    const [selectedRegion, setSelectedRegion] = useState('villa-mercedes');
    const [hoveredWork, setHoveredWork] = useState(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const regions = [
        {
            id: 'villa-mercedes',
            name: 'Villa Mercedes',
            icon: '🏙️',
            color: 'from-blue-500 to-blue-700',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200'
        },
        {
            id: 'pedernera',
            name: 'Depto. Pedernera',
            icon: '🏘️',
            color: 'from-green-500 to-green-700',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
        },
        {
            id: 'provincial',
            name: 'Nivel Provincial',
            icon: '🏛️',
            color: 'from-purple-500 to-purple-700',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200'
        }
    ];

    const works = {
        'villa-mercedes': [
            {
                id: 1,
                title: "Creación del Autódromo Provincial 'Río Quinto'",
                type: "Deportiva",
                description: "Construcción de un autódromo moderno para competencias automovilísticas en Villa Mercedes",
                status: "Propuesta Elevada",
                impact: "Desarrollo del deporte motor y turismo deportivo",
                icon: "🏁"
            },
            {
                id: 2,
                title: "Acueducto Norte para Villa Mercedes",
                type: "Infraestructura",
                description: "Desde Planta Potabilizadora hasta el sector Norte de la ciudad",
                status: "Propuesta Elevada",
                impact: "Mejora del suministro de agua potable",
                icon: "💧"
            },
            {
                id: 3,
                title: "Puente Accesorio para Peatones y Ciclistas",
                type: "Vial",
                description: "Ensanchamiento y construcción de puente accesorio sobre Río V en Ruta Nacional N°148",
                status: "Propuesta Elevada",
                impact: "Mayor seguridad vial y movilidad urbana",
                icon: "🌉"
            },
            {
                id: 4,
                title: "Autopista Villa Mercedes - San Luis",
                type: "Vial",
                description: "Construcción de autopista para conectar ambas ciudades",
                status: "Propuesta Elevada",
                impact: "Reducción de tiempos de viaje y desarrollo económico",
                icon: "🛣️"
            }
        ],
        'pedernera': [
            {
                id: 5,
                title: "Ruta Provincial N° 1 - Tramo Juan Jorba - La Punilla",
                type: "Vial",
                description: "Construcción de carpeta asfáltica en el tramo entre ambas localidades",
                status: "Propuesta Elevada",
                impact: "Conectividad rural y acceso a servicios",
                icon: "🛤️"
            },
            {
                id: 6,
                title: "Centro de Salud La Esquina",
                type: "Salud",
                description: "Terminación de obras y equipamiento de sala de primeros auxilios",
                status: "Propuesta Elevada",
                impact: "Atención médica en zona rural",
                icon: "🏥"
            },
            {
                id: 7,
                title: "Escuela Albergue El Morro",
                type: "Educativa",
                description: "Proyecto de creación y construcción de Escuela Albergue",
                status: "Propuesta Elevada",
                impact: "Acceso a educación en zona rural",
                icon: "🎓"
            },
            {
                id: 8,
                title: "Balneario del Morro - Ampliación",
                type: "Turística",
                description: "Ampliación del balneario para desarrollo turístico local",
                status: "Propuesta Elevada",
                impact: "Turismo y recreación regional",
                icon: "🏖️"
            },
            {
                id: 9,
                title: "Planta Potabilizadora Justo Daract",
                type: "Infraestructura",
                description: "Construcción de planta potabilizadora de agua",
                status: "Propuesta Elevada",
                impact: "Acceso a agua potable segura",
                icon: "🏭"
            },
            {
                id: 10,
                title: "Gasoducto Villa Mercedes - Justo Daract",
                type: "Energética",
                description: "Extensión del gasoducto entre ambas localidades",
                status: "Incluido en Presupuesto 1995",
                impact: "Acceso a gas natural",
                icon: "⛽"
            }
        ],
        'provincial': [
            {
                id: 11,
                title: "Ruta Provincial N°2 - Ruta N°7 a La Toma",
                type: "Vial",
                description: "Construcción de carpeta asfáltica en el tramo provincial",
                status: "Propuesta Elevada",
                impact: "Conectividad interprovincial",
                icon: "🗺️"
            },
            {
                id: 12,
                title: "Ruta Provincial N°17 - Desagües Pluviales",
                type: "Infraestructura",
                description: "Estudio técnico y ejecución de obras de desagüe pluviales (El Morro-Juan Llerena)",
                status: "Propuesta Elevada",
                impact: "Prevención de inundaciones",
                icon: "🌧️"
            },
            {
                id: 13,
                title: "Plan de Crecimiento Productivo y Empleo",
                type: "Económica",
                description: "Propuesta de Plan de Crecimiento de Producción y Empleo 1997-1999",
                status: "Coparticipado",
                impact: "Desarrollo económico provincial",
                icon: "📈"
            }
        ]
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Vial':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Salud':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'Educativa':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Infraestructura':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'Deportiva':
                return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'Turística':
                return 'bg-cyan-100 text-cyan-800 border-cyan-200';
            case 'Energética':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Económica':
                return 'bg-indigo-100 text-indigo-800 border-indigo-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
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
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-16 w-28 h-28 bg-blue-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-32 right-20 w-36 h-36 bg-green-300 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-300 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Obras Públicas Propuestas
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "160px" } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg"
                    >
                        Propuestas de infraestructura elevadas al Poder Ejecutivo para el desarrollo integral de San Luis
                    </motion.p>
                </div>

                {/* Selector de regiones */}
                <motion.div
                    ref={ref}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {regions.map((region) => (
                        <motion.button
                            key={region.id}
                            variants={itemVariants}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-8 py-4 rounded-2xl border-2 transition-all duration-500 flex items-center gap-4 ${selectedRegion === region.id
                                    ? `${region.bgColor} ${region.borderColor} shadow-xl scale-105`
                                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                                }`}
                            whileHover={{ scale: selectedRegion === region.id ? 1.05 : 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.span
                                className="text-3xl"
                                animate={selectedRegion === region.id ? {
                                    scale: [1, 1.3, 1],
                                    rotate: [0, 15, 0]
                                } : {}}
                                transition={{ duration: 0.6 }}
                            >
                                {region.icon}
                            </motion.span>
                            <span className={`font-bold text-lg ${selectedRegion === region.id ? 'text-primary' : 'text-gray-700'
                                }`}>
                                {region.name}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid de obras */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedRegion}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    >
                        {works[selectedRegion]?.map((work, index) => (
                            <motion.div
                                key={work.id}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 120
                                }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group relative"
                                onMouseEnter={() => setHoveredWork(work.id)}
                                onMouseLeave={() => setHoveredWork(null)}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                {/* Efecto de gradiente en hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${regions.find(r => r.id === selectedRegion)?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></motion.div>

                                <div className="p-6 relative z-10">
                                    <div className="flex items-start gap-4 mb-4">
                                        <motion.div
                                            className="text-3xl"
                                            animate={hoveredWork === work.id ? {
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 10, 0]
                                            } : {}}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {work.icon}
                                        </motion.div>
                                        <div className="flex-grow">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(work.type)}`}>
                                                    {work.type}
                                                </span>
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                                                    {work.status}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                                {work.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                                        {work.description}
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-primary mb-1">Impacto Esperado</h4>
                                                <p className="text-gray-600 text-sm">{work.impact}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Indicador de hover */}
                                    <motion.div
                                        className="absolute bottom-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100"
                                        animate={hoveredWork === work.id ? {
                                            scale: [1, 1.5, 1],
                                            opacity: [0.5, 1, 0.5]
                                        } : {}}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    ></motion.div>

                                    {/* Efecto de brillo */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-70"
                                        animate={hoveredWork === work.id ? {
                                            x: ['-100%', '100%']
                                        } : {}}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Estadísticas y llamada a la acción */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-20"
                >
                    <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-8 md:p-12 text-white shadow-2xl max-w-5xl mx-auto relative overflow-hidden">
                        {/* Elementos decorativos */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">Visión de Desarrollo</h3>
                                <p className="text-white/90 text-lg max-w-3xl mx-auto">
                                    Cada propuesta de obra pública representa un compromiso con el crecimiento sostenible
                                    y la mejora de la calidad de vida de todos los sanluiseños
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
                                    <div className="text-sm text-white/80">Obras Propuestas</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">3</div>
                                    <div className="text-sm text-white/80">Regiones Beneficiadas</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">8</div>
                                    <div className="text-sm text-white/80">Áreas de Desarrollo</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
                                    <div className="text-sm text-white/80">Compromiso Social</div>
                                </motion.div>
                            </div>

                            <div className="mt-8 text-center">
                                <motion.div
                                    className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/30"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <p className="text-white font-medium text-lg">
                                        💡 "El desarrollo de una provincia se mide por las obras que transforman
                                        la vida de su gente"
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PublicWorks;