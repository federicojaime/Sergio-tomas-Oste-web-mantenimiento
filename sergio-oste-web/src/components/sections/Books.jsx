import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const booksData = [
    {
        id: 1,
        title: "Dar Cuenta",
        year: "Editorial Marzo S.A - 1996",
        description: "Una obra que refleja la experiencia y visión del autor sobre la rendición de cuentas y la transparencia en la gestión pública.",
        image: "/src/assets/1.jpg",
        url: "#"
    },
    {
        id: 2,
        title: "Memorias de Villa Mercedes",
        year: "San Luis Libro - 2017",
        description: "Un recorrido por la historia y cultura de Villa Mercedes, destacando lugares emblemáticos como Caminito y la Calle Angosta.",
        image: "/src/assets/2.jpeg",
        url: "#"
    },
    {
        id: 3,
        title: "Cuentos para Valentino",
        year: "San Luis Libro - 2022",
        description: "Una colección de relatos para niños que busca transmitir valores y enseñanzas a través de historias cautivadoras.",
        image: "/src/assets/3.jpeg",
        url: "#"
    },
    {
        id: 4,
        title: "Juana Koslay - Arocena - La ultima princesa",
        year: "DUNKEN - 2024",
        description: "Su obra más reciente explora la historia de Juana Koslay y la figura de Arocena, recuperando el legado histórico y cultural de la región.",
        image: "/src/assets/4.webp",
        url: "/juana-koslay"
    }
];

const Books = () => {
    const [activeBook, setActiveBook] = useState(null);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="libros" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 md:py-24">
            <div className="section-container">
                <div className="section-title">
                    <h2>Obras Publicadas</h2>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {booksData.map((book) => (
                        <motion.div
                            key={book.id}
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            onMouseEnter={() => setActiveBook(book.id)}
                            onMouseLeave={() => setActiveBook(null)}
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                />
                                {activeBook === book.id && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30 flex items-end justify-center p-4"
                                    >
                                        <Link
                                            to={book.url}
                                            className="text-white group flex items-center gap-2 font-medium"
                                        >
                                            Ver detalles
                                            <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-secondary mb-1">{book.title}</h3>
                                <p className="text-sm text-accent mb-3">{book.year}</p>
                                <p className="text-gray-600 text-sm">{book.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Books;