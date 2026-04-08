import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Oficinas y empresas',
      description: 'Espacios de trabajo profesionales, higieneados y organizados para máxima productividad.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Mantenimiento de comunidades',
      description: 'Conservación de zonas comunes con programas de limpieza regulares y adaptados.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Servicios personalizados',
      description: 'Soluciones flexibles de limpieza según tu horario, necesidad y tipo de espacio.'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/4107108/pexels-photo-4107108.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Desinfección especializada',
      description: 'Tratamientos avanzados con productos certificados para máxima salubridad.'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/4239139/pexels-photo-4239139.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Servicio de urgencia',
      description: 'Disponibilidad inmediata para eventos especiales, limpiezas excepcionales y emergencias.'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/7641859/pexels-photo-7641859.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Asesoramiento',
      description: 'Consultoría profesional en estándares de higiene y organización de espacios empresariales.'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content container">
          <p className="services-breadcrumb">Servicios de limpieza</p>
          <h1>Soluciones profesionales para cada espacio</h1>
          <p>Combinamos equipo profesional, método de trabajo y seguimiento para resultados impecables.</p>
          <p className="services-trust-copy">+14 años de experiencia y más de 200 clientes en Navarra.</p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid container">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-media">
                <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/contacto" className="service-link">Solicitar servicio</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content container">
          <h2>¿Necesitas una propuesta personalizada?</h2>
          <p>Analizamos tus espacios, frecuencia de limpieza y tipo de actividad para ofrecerte el plan ideal.</p>
          <Link to="/contacto" className="services-cta-btn">Solicitar presupuesto</Link>
        </div>
      </section>
    </div>
  );
}
