import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import tomasImage from '/assets/tomas.jpg';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="sobre-mi" className="bg-white py-20">
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
                    className="flex flex-wrap items-start"
                >
                    {/* Imagen y datos básicos */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative max-w-xs mx-auto mb-6"
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-xl">
                                <img
                                    src={tomasImage}
                                    alt="Sergio Tomás Oste"
                                    className="w-full transform transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-primary mb-4">Contacto</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p><strong>Teléfono:</strong> +54 9 2664010384</p>
                                <p><strong>Email:</strong> sergiooste@yahoo.com.ar</p>
                                <p><strong>Dirección:</strong> Ayacucho 1076, San Luis - Argentina</p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-primary text-white p-6 rounded-lg shadow-sm mt-4"
                        >
                            <h3 className="text-lg font-semibold mb-4">Actualidad</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• Presidente SPTCRA</li>
                                <li>• Vocal HTC San Luis</li>
                                <li>• Autor de "Juana Koslay, Arocena la última princesa"</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contenido principal */}
                    <div className="w-full lg:w-2/3 lg:pl-12">
                        {/* Información personal */}
                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-4">Información Personal</h3>
                            <p className="mb-4 text-base text-gray-700 leading-relaxed">
                                Nació en Villa Mercedes, provincia de San Luis, el 21 de marzo 1966. Es hijo de Isabel Evelia Oste, está casado con Mariela Alexandra Mithiaux y tiene dos hijos Franco y Nathalie.
                            </p>
                            <p className="mb-4 text-base text-gray-700 leading-relaxed">
                                Cursó sus estudios primarios en la escuela Normal Superior Juan Llerena y luego en el colegio San Buenaventura, egresando a los 16 años con el título de Perito Mercantil. Estudió derecho en la Universidad Católica de Córdoba, egresando en 1988.
                            </p>
                        </motion.div>

                        {/* Datos académicos */}
                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-4">Datos Académicos</h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Experto en Dirección y Gestión Pública Local, de Sol-Ciudad 2000 con Dirección Académica de la Universidad Carlos III de Madrid. Certificado extendido en Granada (España), 26 de febrero Año 1999.
                            </p>
                        </motion.div>

                        {/* Actividad privada */}
                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-4">Actividad Privada</h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                En la década de los noventa, ejerció la profesión de Abogado. Fundó la ex emisora FM: "La Radio" 94.5 en la ciudad de Villa Mercedes. Fue periodista y Director del diario vespertino "La Voz del Sud" en 1994. También fundó la ex empresa familiar "TRANSUD" de transporte de carga de larga distancia.
                            </p>
                        </motion.div>

                        {/* Cargos públicos ocupados */}
                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-4">Cargos Públicos Ocupados</h3>
                            <div className="space-y-2 text-base text-gray-700">
                                <p>• Asesor Legal de la Policía de la Provincia - 1989 a 1992.</p>
                                <p>• Profesor ad honorem en Derecho Civil de la escuela de Oficiales de la Policía de la Provincia - 1991.</p>
                                <p>• Asesor del bloque justicialista de concejales del Honorable Concejo deliberante de Villa Mercedes - 1992 a 1993.</p>
                                <p>• Senador Provincial (MC) - 1993 a 1997.</p>
                                <p>• Presidente de la Comisión de Asuntos Constitucionales.</p>
                                <p>• Presidente de la Comisión Bicameral de Enlace.</p>
                                <p>• Ex miembro del comité de legisladores del Nuevo Cuyo por San Luis.</p>
                                <p>• Presidente y Vocal del Honorable Tribunal de Cuentas de la Provincia de San Luis.</p>
                                <p>• Miembro, por la provincia de San Luis del comité directivo de la Red Federal de Control Público.</p>
                                <p>• Ex integrante de la ASUR, entidad que congrega las asociaciones de Organismos de control externo de la República Argentina y República Federativa del Brasil.</p>
                                <p>• Expositor en congresos de capacitación, en el orden Nacional e Internacional, en la temática relacionada al Control de los Fondos Públicos (ASUR, ATRICON, REOGCI, SPTCRA).</p>
                                <p>• Vicepresidente Primero del Secretariado Permanente de Tribunales de Cuentas, Órganos y Organismos Público de Control Externo de la República Argentina, periodo 2015-2017; 2017-2019; 2019-2021.</p>
                                <p>• Presidente del Secretariado Permanente de Tribunales de Cuentas, Órganos y Organismos Públicos de Control Externo de la República Argentina, periodo 2022-2024.</p>
                                <p>• Reelecto para el periodo 2024-2026.</p>
                            </div>
                        </motion.div>

                        {/* Desempeño deportivo */}
                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-4">Desempeño Deportivo</h3>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Piloto de Rally y Pista en competencias regionales y nacionales. Múltiple campeón de la provincia de San Luis en la especialidad de Rally, en las categorías A6 (año 2000), A7 (año 2001), N2 y Campeonato Absoluto (año 2013).
                            </p>
                        </motion.div>

                        {/* Publicaciones */}
                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mb-8"
                        >
                            <h3 className="text-xl font-semibold text-primary mb-4">Publicaciones</h3>
                            <div className="space-y-2 text-base text-gray-700">
                                <p>• "Dar Cuenta" (Editorial Marzo S.A - año 1996).</p>
                                <p>• "Memorias de Villa Mercedes. Caminito y la Calle Angosta" (San Luis Libro - año 2017).</p>
                                <p>• "Cuentos para Valentino" (San Luis Libro - año 2022).</p>
                                <p>• "Juana Koslay – Arocena - La ultima princesa" (DUNKEN - año 2024).</p>
                            </div>
                        </motion.div>

                        {/* Cita inspiracional */}
                        <motion.div
                            variants={sectionVariants}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary"
                        >
                            <blockquote className="text-lg italic text-primary font-medium">
                                "Vuela alto; que te asistan las plumas del pasado; no te arrastres; ni como serpiente venenosa, ni como gusano impávido"
                            </blockquote>
                            <cite className="text-sm text-gray-600 mt-2 block">Del libro "Juana Koslay, Arocena la última princesa"</cite>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;