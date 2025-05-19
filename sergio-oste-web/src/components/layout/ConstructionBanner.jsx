import { motion } from 'framer-motion';

const ConstructionBanner = () => {
  return (
    <motion.div 
      className="fixed top-0 right-0 z-50 bg-accent text-white font-bold py-2 px-4 transform rotate-45 translate-x-8 translate-y-8 shadow-md"
      animate={{ 
        opacity: [0.7, 1, 0.7],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" 
      }}
    >
      Sitio en construcción
    </motion.div>
  );
};

export default ConstructionBanner;