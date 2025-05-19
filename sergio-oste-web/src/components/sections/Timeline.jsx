import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
    {
        date: "1988 - 1992",
        title: "Asesor Legal de la Policía Provincial",
        description: "Brindó asesoramiento jurídico a la institución policial, contribuyendo al fortalecimiento del marco legal en su actuación.",
        side: "left"
    },
    {
        date: "1991",
        title: "Profesor de Derecho Civil",
        description: "Profesor ad honorem en la escuela de Oficiales de la Policía de la Provincia, formando a los futuros oficiales en materia de derecho civil.",
        side: "right"
    },
    {
        date: "1992 - 1993",
        title: "Asesor del bloque justicialista",
        description: "Asesor en el Honorable Concejo Deliberante de Villa Mercedes, colaborando en la elaboración de proyectos y ordenanzas municipales.",
        side: "left"
    },
    {
        date: "1993 - 1997",
        title: "Senador Provincial",
        description: "Representó al Departamento Pedernera en la Legislatura Provincial, donde presidió la Comisión de Asuntos Constitucionales y la Comisión Bicameral de Enlace.",
        side: "right"
    },
    {
        date: "Posterior",
        title: "Presidente del Tribunal de Cuentas",
        description: "Ocupó el cargo de Presidente y Vocal del Honorable Tribunal de Cuentas de la Provincia de San Luis, velando por la transparencia en el manejo de los fondos públicos.",
        side: "left"
    },
    {
        date: "2022 - 2026",
        title: "Presidente SPTCRA",
        description: "Presidente del Secretariado Permanente de Tribunales de Cuentas, Órganos y Organismos Públicos de Control Externo de la República Argentina.",
        side: "right"
    }
];

const TimelineItem = ({ item, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const variants = {
        hidden: {
            opacity: 0,
            x: item.side === "left" ? -50 : 50
        },
        visible: {
            opacity: 1,
            x: 0
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-8 flex justify-between items-center w-full ${item.side === "left"
                    ? "flex-row"
                    : "flex-row-reverse"
                }`}
        >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent w-8 h-8 rounded-full">
                <div className="mx-auto w-3 h-3 bg-white rounded-full"></div>
            </div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-md bg-white border-l-4 border-accent`}
            >
                <h3 className="mb-3 font-bold text-xl text-secondary">{item.title}</h3>
                <time className="block mb-2 text-sm font-bold text-gray-700">{item.date}</time>
                <p className="text-sm md:text-base leading-snug text-gray-600">{item.description}</p>
            </motion.div>
        </motion.div>
    );
};

const Timeline = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="trayectoria" className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="section-title">
                    <h2>Trayectoria Pública</h2>
                </div>

                <div ref={ref} className="relative wrap overflow-hidden p-4 md:p-10">
                    {/* Vertical line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={inView ? { height: '100%' } : { height: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute h-full border-2 border-secondary left-1/2 transform -translate-x-1/2"
                    ></motion.div>

                    {/* Timeline items */}
                    <div className="container mx-auto w-full">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;