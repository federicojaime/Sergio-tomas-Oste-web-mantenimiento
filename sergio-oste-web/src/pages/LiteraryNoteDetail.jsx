// src/pages/LiteraryNoteDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchLiteraryNoteById } from '../services/api';
import { FaArrowLeft, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const LiteraryNoteDetail = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNote = async () => {
            try {
                // Temporalmente, usamos directamente los datos del JSON hasta que configures el backend
                const response = await import('../data/notes.json');
                const noteData = response.default[parseInt(id)];
                if (noteData) {
                    setNote(noteData);
                } else {
                    setError('Nota no encontrada');
                }
                setLoading(false);
            } catch (err) {
                console.error('Error loading note:', err);
                setError('No se pudo cargar la nota literaria');
                setLoading(false);
            }
        };

        loadNote();

        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 pt-24">
                <div className="max-w-4xl mx-auto p-4">
                    <div className="flex justify-center py-20">
                        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !note) {
        return (
            <div className="min-h-screen bg-gray-100 pt-24">
                <div className="max-w-4xl mx-auto p-4">
                    <Link to="/notas-literarias" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-6">
                        <FaArrowLeft className="mr-2" /> Volver a notas
                    </Link>
                    <div className="text-center py-20 text-red-600">
                        <p>{error || 'Nota no encontrada'}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-24">
            <div className="max-w-4xl mx-auto p-4">
                <Link to="/notas-literarias" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-6">
                    <FaArrowLeft className="mr-2" /> Volver a notas
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                    {note.media && (
                        <div className="w-full h-80 md:h-96 overflow-hidden">
                            <img
                                src={note.media}
                                alt={note.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-primary mb-4">{note.title}</h1>

                        <div className="flex items-center text-gray-500 mb-6">
                            <FaCalendarAlt className="mr-2" />
                            <span>2024</span>
                        </div>

                        {note.content && note.content !== 'Sin contenido' ? (
                            <div className="prose max-w-none">
                                {note.content.split('\n').map((paragraph, idx) => (
                                    <p key={idx} className="mb-4 text-gray-700">{paragraph}</p>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">No hay contenido disponible para esta nota.</p>
                        )}

                        {note.url && (
                            <div className="mt-8">
                                <a
                                    href={note.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-white bg-accent px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
                                >
                                    Ver publicación original <FaExternalLinkAlt className="ml-2" />
                                </a>
                            </div>
                        )}
                    </div>
                </motion.article>
            </div>
        </div>
    );
};

export default LiteraryNoteDetail;