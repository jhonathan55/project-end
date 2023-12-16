// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de contraseña: al menos 8 caracteres
    if (formData.password.length < 8) {
      console.error('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Validación de coincidencia de contraseñas
    if (formData.password !== formData.confirmPassword) {
      console.error('Las contraseñas no coinciden.');
      return;
    }

    try {
      // Simulación de llamada a la API para el registro
      const response = await axios.post('tu-api/register', formData);

      // Mensaje de éxito después del registro
      setSuccessMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');

      // Puedes redirigir a la página de inicio de sesión u otra página relevante
      // Ejemplo: history.push('/login');
    } catch (error) {
      console.error('Error de registro:', error.message);
      // Puedes mostrar un mensaje de error al usuario si es necesario
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Registrar</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <p className="login-link">
        ¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a>
      </p>
    </div>
  );
};

export default Register;
