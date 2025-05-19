// src/components/sections/LiteraryNotesPreview.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LiteraryNotesPreview = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const loadNotes = async () => {
      try {
        // Temporalmente, usamos directamente los datos del JSON
        const response = await import('../../data/notes.json');
        // Solo mostramos las primeras 3 notas en la vista previa
        setNotes(response.default.slice(0, 3));
        setLoading(false);
      } catch (err) {
        console.error('Error loading notes preview:', err);
        setLoading(false);
      }
    };

    loadNotes();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading || notes.length === 0) {
    return null; // No mostramos nada si está cargando o no hay notas
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="section-container">
        <div className="section-title">
          <h2>Últimas Notas Literarias</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {notes.map((note, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {note.media && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={note.media} 
                    alt={note.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                  {note.title}
                </h3>
                
                {note.content && note.content !== 'Sin contenido' && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {note.content}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link 
            to="/notas-literarias"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-md hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            Ver todas las notas
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiteraryNotesPreview;