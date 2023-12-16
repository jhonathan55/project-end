import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  // Estado para almacenar los detalles de la publicación
  const [postDetails, setPostDetails] = useState({});
  const { id } = useParams();

  // Simulación de llamada a la API para obtener detalles de la publicación
  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPostDetails(response.data);
    } catch (error) {
      console.error('Error fetching post details:', error.message);
    }
  };

  // Cargar detalles de la publicación al montar el componente
  useEffect(() => {
    fetchPostDetails();
  }, [id]);

  return (
    <div>
      <h1>Detalle de la Publicación #{id}</h1>
      <div className="post-details">
        <h2>{postDetails.title}</h2>
        <p>{postDetails.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;

