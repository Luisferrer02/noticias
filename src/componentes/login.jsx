import React, { useState } from 'react';
import './general.css';

const LoginForm = ({volver }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación simple del formulario
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes realizar la lógica de autenticación
    // Por ahora, simulamos un inicio de sesión exitoso
    alert(`Inicio de sesión exitoso con email: ${email}`);
    volver(); // Regresa al Main
  };

  const handleGoBack = () => {
    window.history.back(); // Esto regresa a la página anterior en el historial
  };

  return (
    <div id="login-page">
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button id="loginboton" type="submit">Iniciar sesión</button>
          {/* Botón de volver */}
          <button type="button" className="back-button" onClick={volver}>
            Volver
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
