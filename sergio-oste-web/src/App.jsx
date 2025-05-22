// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import LiteraryNotes from './pages/LiteraryNotes';   // ¡CORREGIDO!
import LiteraryNoteDetail from './pages/LiteraryNoteDetail';
import SportHistory from './pages/SportHistory';
import CVDownloadWidget from './components/ui/CVDownloadWidget';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/juana-koslay" element={<BookDetail />} />
            <Route path="/notas-literarias" element={<LiteraryNotes />} />
            <Route path="/notas-literarias/:id" element={<LiteraryNoteDetail />} />
            <Route path="/historia-deportiva" element={<SportHistory />} />
          </Routes>
        </main>
        <Footer />
        <CVDownloadWidget />
      </div>
    </Router>
  );
};

export default App;