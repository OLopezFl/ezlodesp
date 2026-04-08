import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-title">Ezlo Limpiezas</p>
          <p className="footer-subtitle">Limpieza profesional para hogares y empresas</p>
        </div>
        <div className="footer-meta">
          <p>&copy; {currentYear} Ezlo Limpiezas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
