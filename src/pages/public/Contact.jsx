import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tipo: 'general',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setFormData({ nombre: '', telefono: '', email: '', tipo: 'general', mensaje: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <p className="contact-eyebrow">CONTACTO</p>
          <h1>Hablemos de tu espacio</h1>
          <p>Te ayudamos a definir el servicio adecuado y te respondemos en menos de 24 horas.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && <div className="success-message">✓ Mensaje enviado correctamente</div>}
            <h2>Solicita tu propuesta</h2>
            <p className="contact-form-lead">Cuanta más información nos proporciones, mejor ajustado será el presupuesto a tus necesidades.</p>
            
            <div className="form-group">
              <label htmlFor="nombre">
                <span>Nombre *</span>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label htmlFor="telefono">
                <span>Teléfono</span>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="+34 612 345 678"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                <span>Email *</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label htmlFor="tipo">
              <span>Tipo de consulta</span>
              <select name="tipo" id="tipo" value={formData.tipo} onChange={handleChange}>
                <option value="general">Consulta general</option>
                <option value="presupuesto">Solicitar presupuesto</option>
                <option value="servicio">Información de servicio</option>
                <option value="otro">Otro</option>
              </select>
            </label>

            <label htmlFor="mensaje">
              <span>Mensaje *</span>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Cuéntanos qué necesitas... (mínimo 20 caracteres)"
                value={formData.mensaje}
                onChange={handleChange}
                required
                minLength="20"
              ></textarea>
            </label>

            <button type="submit" className="button button-primary">Enviar consulta</button>
          </form>

          <aside className="contact-info">
            <div className="info-card">
              <h3>Qué esperar</h3>
              <p className="info-card-copy">Te ofrecemos una propuesta clara y personalizada, adaptada a tu espacio, con precios transparentes y sin compromisos.</p>
              <ul>
                <li>Asesoramiento claro desde el primer contacto</li>
                <li>Plan de limpieza adaptado a horario y alcance</li>
                <li>Seguimiento para dejarlo todo bien definido</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
