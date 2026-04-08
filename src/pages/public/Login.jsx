import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Funcionalidad se implementará más adelante
    console.log('Login attempted:', { email, password });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <img src="/images/logo.png" alt="Ezlo Limpiezas" className="login-logo" />
            <h1>Acceder</h1>
            <p>Ingresa tu correo y contraseña para continuar</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-remember">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Recuérdame en este dispositivo</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-login">
              Acceder
            </button>
          </form>
        </div>
      </div>

      <div className="login-back-link">
        <Link to="/">← Volver a inicio</Link>
      </div>
    </div>
  );
}
