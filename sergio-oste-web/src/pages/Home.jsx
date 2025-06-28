import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Books from '../components/sections/Books';
import SportAchievements from '../components/sections/SportAchievements';
import LiteraryNotesPreview from '../components/sections/LiteraryNotes';
import Contact from '../components/sections/Contact';
import InteractiveStats from '../components/sections/InteractiveStats';
import CurrentRoles from '../components/sections/CurrentRoles';
import LegislativeProjects from '../components/sections/LegislativeProjects';
import PublicWorks from '../components/sections/PublicWorks';

const Home = () => {
  const location = useLocation();
  const hasScrolled = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sergio Tomás Oste | Sitio Oficial";

    if (location.state && location.state.scrollTo && !hasScrolled.current) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          hasScrolled.current = true;
        }, 500);
      }
    }

    return () => {
      hasScrolled.current = false;
    };
  }, [location]);

  // Animación de contenedor padre
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-hidden"
    >
      <Hero />
      <About />
      <InteractiveStats />
      <CurrentRoles />
      <Timeline />
      <LegislativeProjects />
      {/** <PublicWorks />*/}
      <Books />
       {/**<SportAchievements />*/}
      <LiteraryNotesPreview />
      <Contact />
    </motion.div>
  );
};

export default Home;