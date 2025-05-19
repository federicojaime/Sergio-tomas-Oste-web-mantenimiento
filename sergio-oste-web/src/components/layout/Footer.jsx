import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} Sergio Tomás Oste. Todos los derechos reservados.</p>
                <p className="text-sm text-gray-400">
                    Desarrollado con <FaHeart className="inline-block text-accent mx-1" /> por{" "}
                    <a
                        href="https://codeo.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline transition-colors duration-300"
                    >
                        Codeo
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;