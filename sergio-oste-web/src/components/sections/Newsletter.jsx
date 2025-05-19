import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setEmail('');

            // Reset after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>

                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Sitio Web en Desarrollo</h2>
                    <p className="text-gray-600 mb-8">
                        Estamos trabajando para ofrecerle una experiencia completa. Muy pronto podrá descubrir más información sobre la trayectoria, obras y actividades de Sergio Tomás Oste.
                    </p>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-green-100 text-green-800 rounded-md mb-6"
                        >
                            ¡Gracias por suscribirse! Le notificaremos cuando el sitio esté completo.
                        </motion.div>
                    ) : (
                        <>
                            <p className="text-gray-600 mb-6">¿Desea recibir una notificación cuando el sitio esté completo?</p>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Su correo electrónico"
                                    required
                                    className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent/50 mb-2 sm:mb-0"
                                />
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-r-md transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Suscribirse'}
                                </motion.button>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;