// src/pages/Home.jsx
import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Books from '../components/sections/Books';
import SportAchievements from '../components/sections/SportAchievements';
import LiteraryNotesPreview from '../components/sections/LiteraryNotes'; // Añadir esta importación
import Contact from '../components/sections/Contact';
import Newsletter from '../components/sections/Newsletter';
import Preloader from '../components/ui/Preloader';
import ConstructionBanner from '../components/layout/ConstructionBanner';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sergio Tomás Oste | Sitio Oficial";
  }, []);

  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Timeline />
      <Books />
      <SportAchievements />
      <LiteraryNotesPreview /> {/* Añadir esta línea */}
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;