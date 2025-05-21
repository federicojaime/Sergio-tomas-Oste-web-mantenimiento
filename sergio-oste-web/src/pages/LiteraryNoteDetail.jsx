// src/pages/LiteraryNoteDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaExternalLinkAlt, FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import profileImage from '/assets/foto-5-min.JPG';
const LiteraryNoteDetail = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedNotes, setRelatedNotes] = useState([]);
    const [allNotes, setAllNotes] = useState([]);

    useEffect(() => {
        const loadNote = async () => {
            try {
                console.log("Cargando nota con ID:", id); // Debugging

                // Temporalmente, usamos directamente los datos del JSON hasta que configures el backend
                const response = await import('../data/notes.json');
                const notesData = response.default;
                setAllNotes(notesData);

                // Verifica que id sea un número válido
                const noteIndex = parseInt(id);

                if (isNaN(noteIndex) || noteIndex < 0 || noteIndex >= notesData.length) {
                    console.error("ID inválido o fuera de rango:", id);
                    setError('Nota no encontrada - ID inválido');
                    setLoading(false);
                    return;
                }

                const noteData = notesData[noteIndex];
                console.log("Datos de la nota:", noteData); // Debugging

                if (noteData) {
                    setNote(noteData);

                    // Obtener notas relacionadas (simplemente tomamos 3 notas aleatorias diferentes a la actual)
                    const others = notesData
                        .filter((_, idx) => idx !== noteIndex)
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 3);

                    setRelatedNotes(others);
                } else {
                    console.error("Nota no encontrada para el índice:", noteIndex);
                    setError('Nota no encontrada');
                }

                setLoading(false);
            } catch (err) {
                console.error('Error loading note:', err);
                setError('No se pudo cargar la nota literaria: ' + err.message);
                setLoading(false);
            }
        };

        loadNote();

        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        document.title = "Nota Literaria | Sergio Tomás Oste";
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 pt-24">
                <div className="max-w-6xl mx-auto p-4">
                    <Link to="/notas-literarias" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-6">
                        <FaArrowLeft className="mr-2" /> Volver a notas
                    </Link>
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
                <div className="max-w-6xl mx-auto p-4">
                    <Link to="/notas-literarias" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-6">
                        <FaArrowLeft className="mr-2" /> Volver a notas
                    </Link>
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h2 className="text-2xl text-red-600 font-bold mb-4">Nota no encontrada</h2>
                        <p className="text-gray-600 mb-6">{error || 'La nota literaria solicitada no está disponible.'}</p>
                        <Link
                            to="/notas-literarias"
                            className="inline-flex items-center bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-md transition-colors"
                        >
                            Ver todas las notas
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-24">
            <div className="max-w-6xl mx-auto p-4">
                <Link to="/notas-literarias" className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-6">
                    <FaArrowLeft className="mr-2" /> Volver a notas
                </Link>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Artículo principal */}
                    <div className="w-full lg:w-2/3">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-lg overflow-hidden shadow-lg mb-8"
                        >
                            {note.media && (
                                <div className="w-full h-80 md:h-96 overflow-hidden">
                                    <img
                                        src={note.media}
                                        alt={note.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            )}

                            <div className="p-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{note.title}</h1>

                                <div className="flex flex-wrap items-center text-gray-500 mb-6 gap-6">
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>Mayo 2024</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium">Compartir:</span>
                                        <div className="flex space-x-2">
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(note.title)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Compartir en Facebook"
                                                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors hover:scale-110"
                                            >
                                                <FaFacebookF size={14} />
                                            </a>
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`${note.title} - Sergio Tomás Oste`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Compartir en Twitter"
                                                className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors hover:scale-110"
                                            >
                                                <FaTwitter size={14} />
                                            </a>
                                            <a
                                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Compartir en LinkedIn"
                                                className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-900 transition-colors hover:scale-110"
                                            >
                                                <FaLinkedinIn size={14} />
                                            </a>
                                            <button
                                                onClick={() => {
                                                    if (navigator.share) {
                                                        navigator.share({
                                                            title: note.title,
                                                            text: `${note.title} - Sergio Tomás Oste`,
                                                            url: window.location.href
                                                        })
                                                            .catch(err => console.error('Error al compartir:', err));
                                                    } else {
                                                        // Fallback: copiar al portapapeles
                                                        navigator.clipboard.writeText(window.location.href)
                                                            .then(() => alert('¡Enlace copiado al portapapeles!'))
                                                            .catch(err => console.error('Error al copiar:', err));
                                                    }
                                                }}
                                                aria-label="Compartir por otros medios"
                                                className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors hover:scale-110"
                                            >
                                                <FaShareAlt size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {note.content && note.content !== 'Sin contenido' ? (
                                    <div className="prose prose-lg max-w-none">
                                        {note.content.split('\n').map((paragraph, idx) => (
                                            <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">No hay contenido disponible para esta nota.</p>
                                )}
                                {/* 
                                {note.url && (
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <a
                                            href={note.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-white bg-accent px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
                                        >
                                            Ver publicación original <FaExternalLinkAlt className="ml-2" />
                                        </a>
                                    </div>
                                )}*/}
                            </div>
                        </motion.article>
                    </div>

                    {/* Sidebar con contenido relacionado */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-24">
                            {/* Información del autor */}
                            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src={profileImage}
                                        alt="Sergio Tomás Oste"
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">Sergio Tomás Oste</h3>
                                        <p className="text-gray-600 text-sm">Escritor y Servidor Público</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Escritor, abogado y servidor público con una larga trayectoria dedicada a San Luis.
                                    Autor de "Juana Koslay - Arocena, la última princesa" entre otras obras.
                                </p>
                            </div>

                            {/* Notas relacionadas */}
                            {relatedNotes.length > 0 && (
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-primary mb-4">Notas Relacionadas</h3>
                                    <div className="space-y-6">
                                        {relatedNotes.map((relatedNote, index) => {
                                            // Encontrar el índice de la nota relacionada en allNotes
                                            const relatedIndex = allNotes.findIndex(n =>
                                                n.title === relatedNote.title &&
                                                n.url === relatedNote.url
                                            );

                                            return (
                                                <div key={index} className="flex space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src={relatedNote.media || '/src/assets/note-placeholder.jpg'}
                                                            alt={relatedNote.title}
                                                            className="w-20 h-20 rounded object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Link
                                                            to={`/notas-literarias/${relatedIndex !== -1 ? relatedIndex : index}`}
                                                            className="font-medium text-primary hover:text-accent transition-colors line-clamp-2"
                                                        >
                                                            {relatedNote.title}
                                                        </Link>
                                                        <p className="text-gray-500 text-sm mt-1">Mayo 2024</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiteraryNoteDetail;