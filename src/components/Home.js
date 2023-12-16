import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; 
const Home = () => {
  // Estado para almacenar productos destacados
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // Estado para almacenar productos por categoría
  const [categoryProducts, setCategoryProducts] = useState({});

  // Simulación de llamada a la API para obtener productos destacados y por categoría
  const fetchProducts = async () => {
    try {
      // Simulamos una llamada a la API para obtener productos destacados
      const featuredResponse = await axios.get('http://localhost:3001/products/featured');
      setFeaturedProducts(featuredResponse.data);

      // Simulamos una llamada a la API para obtener productos por categoría
      const categoriesResponse = await axios.get('http://localhost:3001/products/categories');
      setCategoryProducts(categoriesResponse.data);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Bienvenido al Marketplace de Artículos Deportivos</h1>

      <section>
        <h2>Destacados</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2>Categorías</h2>
        {Object.keys(categoryProducts).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className="product-grid">
              {categoryProducts[category].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Ofertas Especiales</h2>
        {/* Agrega lógica para mostrar ofertas especiales */}
      </section>
    </div>
  );
};

export default Home;
