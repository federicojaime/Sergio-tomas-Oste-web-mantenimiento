import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaCar, FaFlagCheckered } from 'react-icons/fa';

const achievementsData = [
    {
        id: 1,
        title: "Rally - Categoría A6",
        description: "Campeón Provincial de San Luis (2000)",
        icon: FaTrophy
    },
    {
        id: 2,
        title: "Rally - Categoría A7",
        description: "Campeón Provincial de San Luis (2001)",
        icon: FaMedal
    },
    {
        id: 3,
        title: "Rally - Categoría N2",
        description: "Campeón Provincial de San Luis (2013)",
        icon: FaCar
    },
    {
        id: 4,
        title: "Campeonato Absoluto",
        description: "Campeón Provincial de San Luis (2013)",
        icon: FaFlagCheckered
    }
];

const SportAchievements = () => {
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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    return (
        <section
            id="deportes"
            className="py-24 bg-achievements-pattern bg-cover bg-center bg-fixed text-white"
        >
            <div className="container mx-auto px-4">
                <div className="section-title">
                    <h2 className="text-white">Logros Deportivos</h2>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                >
                    {achievementsData.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            variants={itemVariants}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                duration: 0.6
                            }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-3 hover:bg-white/20"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex justify-center mb-6">
                                <achievement.icon className="text-5xl text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                            <p className="text-white/90">{achievement.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SportAchievements;