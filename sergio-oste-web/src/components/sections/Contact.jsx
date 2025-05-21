import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulando envío de formulario
        setTimeout(() => {
            setFormStatus({
                type: 'success',
                message: 'Gracias por su mensaje. Le responderemos a la brevedad.'
            });
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);

            // Reset after 5 seconds
            setTimeout(() => setFormStatus(null), 5000);
        }, 1500);
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="contacto" className="bg-primary text-white py-16 md:py-24">
            <div className="section-container">
                <div className="section-title">
                    <h2 className="text-white">Contacto</h2>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-wrap -mx-4"
                >
                    {/* Contact Info */}
                    <motion.div
                        variants={itemVariants}
                        transition={{ duration: 0.6 }}
                        /* Continuación de Contact.jsx */

                        className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
                    >
                        <h3 className="text-2xl font-bold mb-8 relative inline-block">
                            Información de Contacto
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent -mb-2"></span>
                        </h3>

                        <div className="space-y-6">
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                                    <FaEnvelope className="text-xl text-accent" />
                                </div>
                                <p>
                                    <a
                                        href="mailto:contacto@sergiotomasoste.com"
                                        className="hover:text-accent transition-colors duration-300"
                                    >
                                        contacto@sergiotomasoste.com
                                    </a>
                                </p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-center"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                                    <FaMapMarkerAlt className="text-xl text-accent" />
                                </div>
                                <p>San Luis, Argentina</p>
                            </motion.div>
                        </div>
                        {/** 
                        <motion.div
                            variants={itemVariants}
                            className="mt-10"
                        >
                            <h4 className="text-lg font-medium mb-4">Redes Sociales</h4>
                            <div className="flex space-x-4">
                                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:-translate-y-1 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>*/}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={itemVariants}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full lg:w-1/2 px-4"
                    >
                        <h3 className="text-2xl font-bold mb-8 relative inline-block">
                            Envíe un Mensaje
                            <span className="absolute bottom-0 left-0 w-12 h-1 bg-accent -mb-2"></span>
                        </h3>

                        {formStatus && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 mb-6 rounded-md ${formStatus.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
                                    }`}
                            >
                                {formStatus.message}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    required
                                    className="w-full p-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Correo Electrónico"
                                    required
                                    className="w-full p-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Mensaje"
                                    required
                                    rows="5"
                                    className="w-full p-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                                ></textarea>
                            </div>
                            <div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;