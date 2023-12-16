// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('tu-api/login', formData);

      // Aquí puedes manejar la respuesta de la API
      console.log('Respuesta de la API:', response.data);

      // Guarda el token de acceso en el estado o donde sea necesario
      const accessToken = response.data.accessToken;
      // ... (código para almacenar el token, por ejemplo, en el estado global)

      // Puedes redirigir a otra página después de una autenticación exitosa
      // Ejemplo: history.push('/dashboard');
    } catch (error) {
      console.error('Error de autenticación:', error.message);
      // Puedes mostrar un mensaje de error al usuario si es necesario
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Iniciar Sesión</button>
      </form>

      <p className="register-link">
        ¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;
