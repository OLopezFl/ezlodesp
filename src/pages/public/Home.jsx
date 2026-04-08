import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Tu espacio,
                <span> siempre impecable</span>
              </h1>
              <p className="hero-lead">
                Cuidamos hogares, oficinas y comunidades con un equipo estable, procesos claros y resultados constantes.
              </p>
              <div className="hero-buttons">
                <Link to="/contacto" className="btn btn-primary">Pedir presupuesto</Link>
                <Link to="/servicios" className="btn btn-secondary">Ver servicios</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/logo.png" alt="Logo principal" className="hero-main-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <p className="section-tag">Nuestros servicios</p>
          <h2>
            Todo lo que necesitas en un solo equipo
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-media">
                <img src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Servicio de limpieza para oficinas y empresas" className="feature-image" loading="lazy" />
              </div>
              <h3>Oficinas y empresas</h3>
              <p>Rutinas de limpieza para espacios de trabajo, zonas comunes y salas de reuniones.</p>
            </div>
            <div className="feature-card">
              <div className="feature-media">
                <img src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Servicio de mantenimiento para comunidades" className="feature-image" loading="lazy" />
              </div>
              <h3>Comunidades</h3>
              <p>Mantenimiento de portales, escaleras y ascensores con planificación periódica.</p>
            </div>
            <div className="feature-card">
              <div className="feature-media">
                <img src="https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Servicio de limpiezas especiales" className="feature-image" loading="lazy" />
              </div>
              <h3>Limpiezas especiales</h3>
              <p>Servicios puntuales de puesta a punto, desinfección y limpiezas en profundidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <p className="section-tag">Por qué elegirnos</p>
          <h2 className="stats-title">Limpieza que marca la diferencia</h2>
          <p className="stats-description">Trabajamos con procesos claros, seguimiento continuo y un equipo profesional enfocado en resultados estables. Nos implicamos en cada espacio para que la limpieza se note cada día, sin complicaciones para ti.</p>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <p className="section-tag">Nuestra experiencia</p>
          <h2 className="trust-title">Datos que respaldan nuestro trabajo</h2>
          <p className="trust-description">Más de 200 clientes en Navarra confían en nuestro servicio. Respondemos en menos de 24 horas y sumamos más de 14 años de experiencia en limpieza profesional de calidad.</p>
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta-inner">
          <h2>Cuéntanos qué necesitas y diseñamos tu plan</h2>
          <p>Presupuesto transparente, respuesta rápida y sin compromisos.</p>
          <Link to="/contacto" className="btn btn-secondary">Solicitar presupuesto</Link>
        </div>
      </section>
    </div>
  );
}
