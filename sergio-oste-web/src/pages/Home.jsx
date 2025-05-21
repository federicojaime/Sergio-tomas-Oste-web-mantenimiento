import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Books from '../components/sections/Books';
import SportAchievements from '../components/sections/SportAchievements';
import LiteraryNotesPreview from '../components/sections/LiteraryNotes';
import Contact from '../components/sections/Contact';
import Newsletter from '../components/sections/Newsletter';
import Preloader from '../components/ui/Preloader';
import ConstructionBanner from '../components/layout/ConstructionBanner';

const Home = () => {
  const location = useLocation();
  const hasScrolled = useRef(false);

  useEffect(() => {
    // Desplácese a la parte superior al cargar
    window.scrollTo(0, 0);
    document.title = "Sergio Tomás Oste | Sitio Oficial";

    // Verificar si hay un estado con scrollTo
    if (location.state && location.state.scrollTo && !hasScrolled.current) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          hasScrolled.current = true;
        }, 500); // Pequeño retraso para asegurar que la página se cargue completamente
      }
    }

    // Limpiar el estado para evitar desplazamientos no deseados en futuros renders
    return () => {
      hasScrolled.current = false;
    };
  }, [location]);

  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Timeline />
      <Books />
      <SportAchievements />
      <LiteraryNotesPreview />
      <Contact />
    </>
  );
};

export default Home;