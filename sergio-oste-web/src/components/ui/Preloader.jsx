import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => {
                if (!isLoading) {
                    document.body.style.overflow = 'visible';
                }
            }}
            className={`fixed inset-0 bg-primary flex justify-center items-center z-[9999] ${isLoading ? '' : 'pointer-events-none'}`}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-white/30 border-t-accent rounded-full"
            />
        </motion.div>
    );
};

export default Preloader;