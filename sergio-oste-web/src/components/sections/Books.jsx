import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBookOpen } from 'react-icons/fa';

// Importar imágenes
import darCuentaImage from '/assets/dar_cuenta.jpg';
import image2 from '/assets/2.jpeg';
import image3 from '/assets/3.jpeg';
import arocenaImage from '/assets/arocena.jpg';

const booksData = [
    {
        id: 1,
        title: "Dar Cuenta",
        year: "Editorial Marzo S.A - 1996",
        description: "Una obra que refleja la experiencia y visión del autor sobre la rendición de cuentas y la transparencia en la gestión pública.",
        image: darCuentaImage,
        url: "#"
    },
    {
        id: 2,
        title: "Memorias de Villa Mercedes",
        year: "San Luis Libro - 2017",
        description: "Un recorrido por la historia y cultura de Villa Mercedes, destacando lugares emblemáticos como Caminito y la Calle Angosta.",
        image: image2,
        url: "https://7d35ffdc-b7a2-4be0-80db-bd2572608891.filesusr.com/ugd/9f3609_bfe647e4ada84f2c9be5ba6bad2a6122.pdf"
    },
    {
        id: 3,
        title: "Cuentos para Valentino",
        year: "San Luis Libro - 2022",
        description: "Una colección de relatos para niños que busca transmitir valores y enseñanzas a través de historias cautivadoras.",
        image: image3,
        url: "https://7d35ffdc-b7a2-4be0-80db-bd2572608891.filesusr.com/ugd/9f3609_cd9422e4169e4058b3ad6548304ef31c.pdf"
    },
    {
        id: 4,
        title: "Juana Koslay - Arocena - La ultima princesa",
        year: "DUNKEN - 2024",
        description: "Su obra más reciente explora la historia de Juana Koslay y la figura de Arocena, recuperando el legado histórico y cultural de la región.",
        image: arocenaImage,
        url: "https://7d35ffdc-b7a2-4be0-80db-bd2572608891.filesusr.com/ugd/9f3609_468300ee5e264b8ea1a9bf20dc1f78f2.pdf"
    }
];

const Books = () => {
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
        <section id="libros" className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary relative inline-block pb-3">
                        Obras Publicadas
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-accent rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explora las obras literarias de Sergio Tomás Oste, disponibles para descarga gratuita.
                    </p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {booksData.map((book) => (
                        <motion.div
                            key={book.id}
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 flex flex-col"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                                />
                                {/* Capa de gradiente siempre visible */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-70"></div>
                            </div>

                            <div className="p-5 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-secondary mb-1">{book.title}</h3>
                                <p className="text-sm text-accent font-medium mb-3">{book.year}</p>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{book.description}</p>

                                {book.url && book.url !== "#" ? (
                                    <a
                                        href={book.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-md transition-all"
                                    >
                                        <FaBookOpen />
                                        Leerlo gratis
                                    </a>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Books;