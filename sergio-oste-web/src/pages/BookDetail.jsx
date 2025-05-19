import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';

const BookDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Juana Koslay - Arocena, la última princesa | Sergio Tomás Oste";
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 pt-24">
            <div className="max-w-4xl mx-auto p-4">
                <Link to="/" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-6">
                    <FaArrowLeft className="mr-2" /> Volver al inicio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                    <div className="bg-gray-100 p-8 text-center">
                        <h1 className="text-3xl font-bold text-primary mb-2">Juana Koslay - Arocena</h1>
                        <h2 className="text-xl text-gray-600">La última princesa</h2>
                    </div>

                    <div className="p-8 flex flex-wrap gap-6">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img
                                src="/src/assets/4.webp"
                                alt="Portada del libro Juana Koslay - Arocena"
                                className="rounded-lg shadow-md w-full max-w-xs"
                            />
                        </div>

                        <div className="w-full md:w-3/5">
                            <p className="text-gray-700 mb-6">
                                Esta obra del reconocido autor Sergio Tomás Oste explora la fascinante historia de Juana Koslay y la figura de Arocena, recuperando el legado histórico y cultural de la región de San Luis. Una narrativa cautivadora que nos transporta a través del tiempo para conocer a la última princesa.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Publicado por Editorial DUNKEN en 2024, este libro es el resultado de una exhaustiva investigación histórica combinada con la maestría narrativa que caracteriza al autor.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 text-center">
                        <motion.button
                            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-full transition-all hover:bg-accent/90 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => alert("Función de descarga simulada")}
                        >
                            <FaDownload className="mr-2" /> Descargar PDF
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookDetail;