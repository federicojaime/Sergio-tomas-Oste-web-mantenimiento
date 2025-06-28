import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LegislativeProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState('salud');
    const [expandedProject, setExpandedProject] = useState(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categories = [
        {
            id: 'salud',
            name: 'Salud Pública',
            icon: '🏥',
            color: 'from-red-500 to-red-700',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200'
        },
        {
            id: 'infraestructura',
            name: 'Infraestructura',
            icon: '🏗️',
            color: 'from-blue-500 to-blue-700',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200'
        },
        {
            id: 'procedimientos',
            name: 'Procedimientos',
            icon: '⚖️',
            color: 'from-green-500 to-green-700',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
        },
        {
            id: 'ambiente',
            name: 'Medio Ambiente',
            icon: '🌱',
            color: 'from-emerald-500 to-emerald-700',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200'
        }
    ];

    const projects = {
        salud: [
            {
                id: 1,
                title: "Creación de Unidad de Autogestión Hospitalaria",
                status: "Media Sanción",
                description: "Descentralización del hospital público, obras sociales y otros como fuentes de recursos",
                impact: "Mejora en la gestión hospitalaria y diversificación de recursos para la salud pública",
                beneficiaries: "Sistema de salud provincial"
            },
            {
                id: 2,
                title: "Sala Especial para Detenidos en Policlínicos",
                status: "Aprobado",
                description: "Creación de salas especiales para atención médica y alojamiento de detenidos procesados con prisión preventiva y/o condenados",
                impact: "Garantiza atención médica digna para población penitenciaria",
                beneficiaries: "Sistema penitenciario y de salud"
            }
        ],
        infraestructura: [
            {
                id: 3,
                title: "Gasoducto Villa Mercedes a Justo Daract",
                status: "Aprobado",
                description: "Proyecto para la extensión del gasoducto conectando Villa Mercedes con Justo Daract",
                impact: "Acceso a gas natural para el desarrollo industrial y residencial",
                beneficiaries: "Poblaciones de Villa Mercedes y Justo Daract"
            },
            {
                id: 4,
                title: "Obligatoriedad de Banderas en Reparticiones Públicas",
                status: "Ley",
                description: "Uso obligatorio de la Bandera Nacional y Provincial en todas las reparticiones públicas",
                impact: "Fortalecimiento de la identidad nacional y provincial",
                beneficiaries: "Ciudadanía en general"
            },
            {
                id: 5,
                title: "Creación de Delegación del Senado en Villa Mercedes",
                status: "Proyecto",
                description: "Establecimiento de una delegación de la Honorable Cámara de Senadores en Villa Mercedes",
                impact: "Descentralización legislativa y mayor acceso ciudadano",
                beneficiaries: "Población del Departamento Pedernera"
            }
        ],
        procedimientos: [
            {
                id: 6,
                title: "Reforma al Código de Procedimiento Laboral",
                status: "Ley",
                description: "Modificaciones a los artículos 37 y 39 del código de procedimiento laboral",
                impact: "Mejora en los procesos laborales y acceso a la justicia",
                beneficiaries: "Trabajadores y empleadores"
            },
            {
                id: 7,
                title: "Código de Procedimiento Administrativo",
                status: "Media Sanción",
                description: "Creación del Código de Procedimiento Administrativo para la Provincia de San Luis",
                impact: "Modernización y transparencia en los procesos administrativos",
                beneficiaries: "Administración pública y ciudadanía"
            },
            {
                id: 8,
                title: "Código de Procedimiento Contencioso Administrativo",
                status: "Media Sanción",
                description: "Establecimiento del marco legal para controversias entre ciudadanos y administración",
                impact: "Fortalecimiento del estado de derecho y garantías ciudadanas",
                beneficiaries: "Ciudadanos y administración pública"
            }
        ],
        ambiente: [
            {
                id: 9,
                title: "Ley 'Vida' - Preservación del Ambiente",
                status: "Proyecto",
                description: "Legislación integral para la preservación y conservación del medio ambiente",
                impact: "Protección del ecosistema provincial y desarrollo sustentable",
                beneficiaries: "Futuras generaciones y ecosistema provincial"
            },
            {
                id: 10,
                title: "Suministro de Bebidas Alcohólicas a Menores",
                status: "Ley Modificada",
                description: "Modificaciones al proyecto originario sobre restricciones de alcohol a menores",
                impact: "Protección de menores y salud pública",
                beneficiaries: "Menores de edad y familias"
            }
        ]
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Ley':
            case 'Aprobado':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Media Sanción':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Proyecto':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Ley Modificada':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-300 rounded-full blur-2xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Proyectos Legislativos
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "140px" } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-accent to-orange-500 mx-auto rounded-full"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg"
                    >
                        Iniciativas legislativas que transformaron la realidad de San Luis durante mi gestión como Senador Provincial (1993-1997)
                    </motion.p>
                </div>

                {/* Selector de categorías */}
                <motion.div
                    ref={ref}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            variants={itemVariants}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-4 rounded-2xl border-2 transition-all duration-500 flex items-center gap-3 ${selectedCategory === category.id
                                    ? `${category.bgColor} ${category.borderColor} shadow-lg scale-105`
                                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                                }`}
                            whileHover={{ scale: selectedCategory === category.id ? 1.05 : 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.span
                                className="text-2xl"
                                animate={selectedCategory === category.id ? {
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, 0]
                                } : {}}
                                transition={{ duration: 0.6 }}
                            >
                                {category.icon}
                            </motion.span>
                            <span className={`font-semibold ${selectedCategory === category.id ? 'text-primary' : 'text-gray-700'
                                }`}>
                                {category.name}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid de proyectos */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    >
                        {projects[selectedCategory]?.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden group cursor-pointer"
                                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-grow">
                                            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <motion.div
                                            className="ml-4 text-accent"
                                            animate={expandedProject === project.id ? { rotate: 180 } : { rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            ⌄
                                        </motion.div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <AnimatePresence>
                                        {expandedProject === project.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-gray-100 pt-4 mt-4 space-y-3"
                                            >
                                                <div>
                                                    <h4 className="text-sm font-semibold text-primary mb-1 flex items-center gap-2">
                                                        🎯 Impacto Esperado
                                                    </h4>
                                                    <p className="text-gray-600 text-sm">
                                                        {project.impact}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-primary mb-1 flex items-center gap-2">
                                                        👥 Beneficiarios
                                                    </h4>
                                                    <p className="text-gray-600 text-sm">
                                                        {project.beneficiaries}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <motion.button
                                            className="text-accent font-medium text-sm flex items-center gap-2 group"
                                            whileHover={{ x: 5 }}
                                        >
                                            {expandedProject === project.id ? 'Ver menos' : 'Ver detalles'}
                                            <motion.span
                                                animate={expandedProject === project.id ? { rotate: 180 } : { rotate: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Efecto hover gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${categories.find(c => c.id === selectedCategory)?.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Estadísticas finales */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Legado Legislativo</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                                <div className="text-sm opacity-90">Proyectos Presentados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                                <div className="text-sm opacity-90">Proyectos Aprobados</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                                <div className="text-sm opacity-90">Compromiso Social</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LegislativeProjects;