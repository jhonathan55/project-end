import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Gallery = () => {
  // Estado para almacenar la lista de publicaciones
  const [posts, setPosts] = useState([]);

  // Simulación de llamada a la API para obtener la lista de publicaciones
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  // Cargar publicaciones al montar el componente
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Galería de Publicaciones</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/detalle-publicacion/${post.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
