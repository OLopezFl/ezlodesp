import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}images/logo.png`;

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <img src={logoSrc} alt="Ezlo Limpiezas" className="header-logo" />
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Abrir o cerrar menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>Preguntas frecuentes</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </nav>
        <div className={`header-actions${menuOpen ? ' open' : ''}`}>
          <Link to="/login" className="login-link" onClick={() => setMenuOpen(false)}>Acceder</Link>
          <Link to="/contacto" className="work-cta" onClick={() => setMenuOpen(false)}>Presupuesto</Link>
        </div>
      </div>
    </header>
  );
}
