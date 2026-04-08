import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: '¿Qué servicios de limpieza ofrecen?',
      answer: 'Ofrecemos limpieza profesional para oficinas y empresas, mantenimiento de comunidades, limpiezas especiales y personalizadas según tus necesidades. Todos nuestros servicios se adaptan a tu frecuencia y tipo de espacio.'
    },
    {
      id: 2,
      question: '¿Cuál es el área de cobertura?',
      answer: 'Operamos en toda Navarra. Contamos con más de 200 clientes en la región y nos comprometemos con respuesta rápida en 24 horas para presupuestos y consultas.'
    },
    {
      id: 3,
      question: '¿Puedo personalizar la frecuencia de limpieza?',
      answer: 'Completamente. Cada cliente tiene un plan personalizado. Desde limpiezas diarias, dos veces por semana, semanales o puntuales, según tus necesidades específicas.'
    },
    {
      id: 4,
      question: '¿Qué métodos de desinfección utilizan?',
      answer: 'Utilizamos productos certificados y métodos profesionales de desinfección. Nuestro equipo está capacitado en protocolos de sanitización según los estándares más altos de seguridad.'
    },
    {
      id: 5,
      question: '¿Cómo funciona el presupuesto?',
      answer: 'El presupuesto es totalmente transparente y sin compromiso. Analizamos tu espacio, frecuencia de limpieza necesaria y tipo de actividad para ofrecerte un plan adaptado a tu presupuesto.'
    },
    {
      id: 6,
      question: '¿Qué garantías ofrecen en su trabajo?',
      answer: 'Garantizamos calidad en cada servicio. Si no quedas satisfecho, lo corregimos sin costo adicional. Nuestro equipo se implica como si fuera su propio espacio.'
    },
    {
      id: 7,
      question: '¿Pueden trabajar fuera de horario?',
      answer: 'Sí, nos adaptamos a tus horarios. Muchos clientes prefieren limpieza fuera del horario laboral. Coordina con nosotros tu disponibilidad.'
    },
    {
      id: 8,
      question: '¿Cuánto tiempo tarda en obtener una respuesta?',
      answer: 'Respondemos en menos de 24 horas a todas las consultas. Si es urgente, puedes contactarnos directamente y nos coordinaremos lo antes posible.'
    },
    {
      id: 9,
      question: '¿Qué incluye una limpieza profunda?',
      answer: 'Una limpieza profunda incluye desinfección de todas las superficies, pisos, sanitarios, cristales, eliminación de polvo en detalles, y tratamiento especializado según el tipo de espacio.'
    },
    {
      id: 10,
      question: '¿Tienen equipo para limpiezas post-obra?',
      answer: 'Sí, disponemos de equipo especializado para limpiezas post-obra. Eliminamos polvo, residuos y dejamos el espacio completamente impecable para su ocupación.'
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq">
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content">
            <h1>Preguntas Frecuentes</h1>
            <p>Las respuestas que necesitas sobre nuestros servicios</p>
          </div>
        </div>
      </section>

      <section className="faq-intro">
        <div className="container">
          <p className="section-tag">Dudas comunes</p>
          <h2>Resolvemos tus preguntas</h2>
          <p className="faq-lead">
            Aquí encontrarás respuestas a las preguntas más frecuentes sobre nuestros servicios de limpieza profesional. Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
        </div>
      </section>

      <section className="faq-items-section">
        <div className="container">
          <div className="faq-items">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${expandedId === faq.id ? 'expanded' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={expandedId === faq.id}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 8L10 11L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="container faq-cta-inner">
          <h2>¿Tienes más preguntas?</h2>
          <p>Contáctanos directamente, estamos aquí para ayudarte con lo que necesites.</p>
          <Link to="/contacto" className="btn btn-secondary">Contactar ahora</Link>
        </div>
      </section>
    </div>
  );
}
