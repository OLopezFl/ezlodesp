import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <img src="/images/logo.png" alt="Ezlo Limpiezas" className="header-logo" />
        </div>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/faq">Preguntas frecuentes</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <div className="header-actions">
          <Link to="/login" className="login-link">Acceder</Link>
          <Link to="/contacto" className="work-cta">Presupuesto</Link>
        </div>
      </div>
    </header>
  );
}
