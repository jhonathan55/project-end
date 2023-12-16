import React, { useState } from 'react';

const CreatePost = () => {
  // Estado para almacenar los datos del formulario
  const [postContent, setPostContent] = useState({
    title: '',
    body: '',
  });

  // Manejador de cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value,
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario a la API
    console.log('Enviando publicación:', postContent);
    // Puedes agregar aquí una llamada a la API para enviar los datos
  };

  return (
    <div>
      <h1>Crear Publicación</h1>
      {/* Formulario para crear una publicación */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postContent.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="body">Contenido:</label>
        <textarea
          id="body"
          name="body"
          value={postContent.body}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default CreatePost;
