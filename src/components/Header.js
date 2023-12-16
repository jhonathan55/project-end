import React from 'react';
import React, { useState } from 'react';

function Header() {
    const [user, setUser] = useState(null);

  
    return (
      <header>
        <h1>BODYBUILDING</h1>
        {user ? (
          <p>Bienvenido, {user.nombre}</p>
        ) : (
          <p>Inicia sesión o regístrate</p>
        )}
      </header>
    );
  }
  

  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <header>
      <h1>Header</h1>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </header>
  );





export default Header;
