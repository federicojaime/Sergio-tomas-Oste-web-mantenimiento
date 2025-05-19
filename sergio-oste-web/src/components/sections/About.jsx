import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="sobre-mi" className="bg-white">
            <div className="section-container">
                <div className="section-title">
                    <h2>Sobre Mí</h2>
                </div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center"
                >
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative max-w-xs mx-auto"
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-xl">
                                <img
                                    src="/src/assets/tomas.jpg"
                                    alt="Sergio Tomás Oste"
                                    className="w-full transform transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-2/3 md:pl-12">
                        {[
                            "Nacido en Villa Mercedes, provincia de San Luis, el 21 de marzo 1966. Está casado con Mariela Alexandra Mithiaux y tiene dos hijos, Franco y Nathalie.",
                            "Curso sus estudios primarios en la escuela Normal Superior Juan Llerena y luego en el colegio San Buenaventura, egresando a los 16 años con el título de Perito Mercantil. Estudió derecho en la Universidad Católica de Córdoba, egresando en 1988.",
                            "En la década de los noventa, ejerció la profesión de Abogado. Fundó la ex emisora FM: \"La Radio\" 94.5 en la ciudad de Villa Mercedes. Fue periodista y Director del diario vespertino \"La Voz del Sud en 1994\". También fundó la ex empresa familiar \"TRANSUD\" de transporte de carga de larga distancia.",
                            "A lo largo de su trayectoria, ha desempeñado diversos cargos públicos, siempre comprometido con el desarrollo y bienestar de San Luis. Como Senador Provincial (1993-1997), impulsó numerosos proyectos de ley que han tenido un impacto significativo en la vida de los sanluiseños."
                        ].map((paragraph, index) => (
                            <motion.p
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="mb-4 text-base md:text-lg text-gray-700 leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;