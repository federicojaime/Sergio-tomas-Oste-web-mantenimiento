// src/pages/LiteraryNotes.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaEye, FaSearch, FaNewspaper, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

const LiteraryNotes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleNotes, setVisibleNotes] = useState(9);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('videos'); // 'videos' or 'press'

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        document.title = "Notas Literarias | Sergio Tomás Oste";

        const loadNotes = async () => {
            try {
                // Temporalmente, usamos directamente los datos del JSON
                const response = await import('../data/notes.json');
                setNotes(response.default);
                setLoading(false);
            } catch (err) {
                console.error('Error loading notes:', err);
                setLoading(false);
            }
        };

        loadNotes();
    }, []);

    const loadMore = () => {
        setVisibleNotes(prev => Math.min(prev + 6, filteredNotes.length));
    };

    // Videos destacados
    const videos = [
        {
            url: "https://www.youtube.com/watch?v=uaVlRqeqfnk",
            title: "Sergio Oste - Reunión Especializada de Organismos Gubernamentales de Control Interno del Mercosur",
            thumbnail: `https://img.youtube.com/vi/uaVlRqeqfnk/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=LrDLq6xzLyA",
            title: "Sergio Oste - Otra Visión del Control Estatal.",
            thumbnail: `https://img.youtube.com/vi/LrDLq6xzLyA/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=lq9oV07i4wI",
            title: "Crisis en América Latina - Congresso Internacional de Direito Financeiro",
            thumbnail: `https://img.youtube.com/vi/lq9oV07i4wI/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=AC8Bmy0FaVM",
            title: "Segunda Reunión del S.P.T.C.R.A. y ASUR",
            thumbnail: `https://img.youtube.com/vi/AC8Bmy0FaVM/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=JoHqSj_BHOM",
            title: "Disertación Feria del Libro 2023",
            thumbnail: `https://img.youtube.com/vi/JoHqSj_BHOM/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=MKBj58_XUZs",
            title: "Disertación en la XX Reunión Especializada de Organismos Control Interno",
            thumbnail: `https://img.youtube.com/vi/MKBj58_XUZs/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=MMQOz7wU_Ww",
            title: "III Encuentro Internacional de la red de Gobernanza de Argentina y Brasil 2023",
            thumbnail: `https://img.youtube.com/vi/MMQOz7wU_Ww/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=S29r5FLb0Vw",
            title: "Sistema de Control Externo de la República Argentina y la colaboración con la ASUR",
            thumbnail: `https://img.youtube.com/vi/S29r5FLb0Vw/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=tZop6bZOgr0",
            title: "100 años del Tribunal de Cuentas de la provincia de Córdoba",
            thumbnail: `https://img.youtube.com/vi/tZop6bZOgr0/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=CGBOQimJ1wI",
            title: "La Importancia del Control de las Cuentas Públicas",
            thumbnail: `https://img.youtube.com/vi/CGBOQimJ1wI/mqdefault.jpg`
        },
        {
            url: "https://www.youtube.com/watch?v=dhvfGCpBiRM",
            title: "La A.G.N. y el rol de los órganos de control externo",
            thumbnail: `https://img.youtube.com/vi/dhvfGCpBiRM/mqdefault.jpg`
        }
    ];

    // Notas de prensa
    const pressArticles = [
        {
            url: "https://irbcontas.org.br/reconhecimento-e-gratidao-marcam-homenagens-durante-o-ix-congresso-internacional-de-controle-e-politicas-publicas/",
            title: "Reconhecimento e gratidão marcam homenagens durante o\" IX Congresso Internacional de Controle e Políticas Públicas\"",
            source: "Instituto Rui Barbosa",
            date: "27 de mayo 2025"
        },
        {
            url: "https://atricon.org.br/atricon-participa-da-abertura-do-ix-congresso-internacional-de-controle-e-politicas-publicas/",
            title: "Atricon participa da abertura do IX Congresso Internacional de Controle e Políticas Públicas\"",
            source: "Atricon",
            date: "28 de mayo 2025"
        },
        {
            url: "https://www.to.gov.br/secom/noticias/governador-wanderlei-barbosa-recebe-conselheiros-de-tribunais-de-contas-da-argentina/6t36ww1dq58q",
            title: "Governador Wanderlei Barbosa recebe conselheiros de Tribunais de Contas da Argentina\"",
            source: "Governo do Tocantins",
            date: "4 febrero 2025"
        },
        {
            url: "https://www.eldiariodelarepublica.com/nota/2022-4-18-7-32-0-sergio-oste-presento-su-libro-cuentos-para-valentino",
            title: "Sergio Oste presentó su libro, \"cuentos para Valentino\"",
            source: "El Diario de la República",
            date: "18 Abril 2022"
        },
        {
            url: "https://www.eldiariodelarepublica.com/nota/2015-4-30-8-3-0-sergio-oste-y-su-teoria-sobre-el-origen-villamercedino-de-caminito",
            title: "Sergio Oste y su teoría sobre el origen villamercedino de \"Caminito\"",
            source: "El Diario de la República",
            date: "30 Abril 2015"
        },
        {
            url: "https://www.facebook.com/fmlatina1039/videos/646518053090246/?mibextid=oFDknk&rdid=gbR6dXwPQPbMutsc#",
            title: "Presentación del Libro \"Cuentos para Valentino\" en Salón Azul",
            source: "FM Latina",
            date: "Abril 2022"
        },
        {
            url: "https://www.eldiariodelarepublica.com/nota/2017-7-28-10-17-11--memorias-de-villa-mercedes-caminito-y-la-calle-angosta-de-sergio-oste",
            title: "\"Memorias de Villa Mercedes, Caminito y la Calle Angosta\"; de Sergio Oste",
            source: "El Diario de la República",
            date: "28 Julio 2017"
        },
        {
            url: "https://agenciasanluis.com/2019/12/03/602256-presentaron-el-libro-caminito-y-la-calle-angosta/",
            title: "Presentaron el libro \"Caminito y la Calle Angosta\"",
            source: "Agencia San Luis",
            date: "3 Diciembre 2019"
        },
        {
            url: "https://www.eldiariodelarepublica.com/nota/2024-6-19-8-15-0-sergio-oeste-presenta-su-libro-arocena-la-ultima-princesa",
            title: "Sergio Oste presenta su libro \"Arocena: la última princesa\"",
            source: "El Diario de la República",
            date: "19 Junio 2024"
        },
        {
            url: "https://elchorrillero.com/nota/2024/06/23/469722-arocena-la-ultima-princesa-un-libro-que-une-la-historia-y-la-fantasia-para-resaltar-el-valor-de-una-mujer-originaria-de-san-luis/amp/",
            title: "\"Arocena, la última princesa\", un libro que une la historia y la fantasía para resaltar el valor de una mujer originaria de San Luis",
            source: "El Chorrillero",
            date: "23 Junio 2024"
        },
        {
            url: "https://vecinosdejuanakoslay.com/index.php/2024/05/10/una-historia-de-juana-koslay-en-la-feria-del-libro/",
            title: "Una historia de Juana Koslay en la Feria del Libro",
            source: "Vecinos de Juana Koslay",
            date: "10 Mayo 2024"
        }
    ];

    // Filtrar notas basadas en búsqueda, excluyendo las que no tienen contenido
    const filteredNotes = notes.filter(note => {
        // Excluir notas que explícitamente dicen "Sin contenido" o no tienen contenido
        if (!note.content || note.content === 'Sin contenido' || note.content === 'Sin contenido disponible') {
            return false;
        }

        const matchesSearch = searchTerm === '' ||
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch;
    });

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

    if (loading) {
        return (
            <section id="notas-literarias" className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center h-64">
                        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </section>
        );
    }

    // Obtener notas válidas para el carrusel
    const validNotes = notes.filter(note => note.content && note.content !== 'Sin contenido' && note.content !== 'Sin contenido disponible');

    return (
        <section id="notas-literarias" className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen pt-24">
            <div className="container mx-auto px-4">
                <div className="section-title">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">Notas Literarias</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-center">
                        Seguí mi camino a través de encuentros con lectores, entregas de ejemplares, presentaciones de libros y momentos destacados de mi actividad cultural en San Luis y más allá.
                    </p>
                </div>

                {/* Barra de búsqueda */}
                <div className="max-w-xl mx-auto mt-8 mb-12">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar notas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar con videos y notas de prensa */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            {/* Tabs de navegación */}
                            <div className="flex border-b border-gray-200 mb-6">
                                <button
                                    onClick={() => setActiveTab('videos')}
                                    className={`flex items-center py-3 px-4 font-medium text-sm border-b-2 -mb-px ${activeTab === 'videos'
                                            ? 'border-accent text-accent'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    <FaYoutube className="mr-2" /> Videos
                                </button>
                                <button
                                    onClick={() => setActiveTab('press')}
                                    className={`flex items-center py-3 px-4 font-medium text-sm border-b-2 -mb-px ${activeTab === 'press'
                                            ? 'border-accent text-accent'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    <FaNewspaper className="mr-2" /> Prensa
                                </button>
                            </div>

                            {/* Contenido de la tab activa */}
                            {activeTab === 'videos' ? (
                                <>
                                    <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                                        <FaYoutube className="mr-2 text-red-600" /> Videos Destacados
                                    </h2>

                                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                        {videos.map((video, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="group"
                                            >
                                                <a
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex flex-col space-y-2 transition-all hover:bg-gray-50 rounded-lg p-2"
                                                >
                                                    <div className="relative rounded-md overflow-hidden">
                                                        <img
                                                            src={video.thumbnail}
                                                            alt={video.title}
                                                            className="w-full h-auto object-cover aspect-video rounded-md transition-transform duration-300 group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity">
                                                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-700 leading-tight line-clamp-2 group-hover:text-accent">
                                                        {video.title}
                                                    </p>
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                        <a
                                            href="https://www.youtube.com/results?search_query=sergio+oste"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-accent hover:underline"
                                        >
                                            Ver todos los videos
                                            <FaArrowRight className="ml-2 text-sm" />
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                                        <FaNewspaper className="mr-2 text-gray-600" /> Notas de Prensa
                                    </h2>

                                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                        {pressArticles.map((article, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <a
                                                    href={article.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors hover:border-gray-200"
                                                >
                                                    <h3 className="font-medium text-primary text-sm line-clamp-2 mb-1 hover:text-accent transition-colors">
                                                        {article.title}
                                                    </h3>
                                                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                                                        <span>{article.source}</span>
                                                        <span>{article.date}</span>
                                                    </div>
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Grid de notas */}
                    <div className="w-full md:w-3/4">
                        {filteredNotes.length > 0 ? (
                            <>
                                <motion.div
                                    ref={ref}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                >
                                    {filteredNotes.slice(0, visibleNotes).map((note, index) => (
                                        <motion.article
                                            key={index}
                                            variants={itemVariants}
                                            transition={{ duration: 0.5 }}
                                            className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                                        >
                                            <div className="h-48 overflow-hidden relative">
                                                <img
                                                    src={note.media || '/src/assets/note-placeholder.jpg'}
                                                    alt={note.title}
                                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                                                    <Link
                                                        to={`/notas-literarias/${notes.indexOf(note)}`}
                                                        className="text-white flex items-center gap-2 font-medium"
                                                    >
                                                        <FaEye /> Leer más
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="p-5 flex flex-col flex-grow">
                                                <Link to={`/notas-literarias/${notes.indexOf(note)}`}>
                                                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
                                                        {note.title}
                                                    </h3>
                                                </Link>

                                                {/* Limitar texto a 2 líneas en lugar de 3, y usar un extracto más corto */}
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
                                                    {note.content.length > 80
                                                        ? note.content.substring(0, 80) + '...'
                                                        : note.content}
                                                </p>

                                                <div className="mt-auto pt-4">
                                                    <Link
                                                        to={`/notas-literarias/${notes.indexOf(note)}`}
                                                        className="text-accent font-medium inline-flex items-center group-hover:underline"
                                                    >
                                                        Leer artículo completo
                                                        <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </motion.div>

                                {visibleNotes < filteredNotes.length && (
                                    <div className="text-center mt-12">
                                        <motion.button
                                            onClick={loadMore}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all shadow-md"
                                        >
                                            Cargar más notas
                                        </motion.button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="bg-white rounded-xl p-12 text-center">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaSearch className="text-3xl text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">No se encontraron resultados</h3>
                                <p className="text-gray-600">
                                    No se encontraron notas que coincidan con tu búsqueda "{searchTerm}".
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                    }}
                                    className="mt-6 text-accent font-medium hover:underline"
                                >
                                    Limpiar búsqueda
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiteraryNotes;