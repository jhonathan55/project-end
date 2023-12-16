import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {

  const { data, loading, error } = useFetch("http://localhost:3002/posts",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiamhvbmFAZ21haWwuY29tIiwiaWF0IjoxNzAyNzU5NjEyLCJleHAiOjE3MDI3NjMyMTJ9._PQzeRHzn0kZhkTnv8cb-ZTZnryDDYERe_6WpNvGRSk');
  console.log(data);
  // [
  //   {
  //     id: 1,
  //     url: 'uploads\1700092006009-channels4_profile.jpg',
  //     description: 'dasd'
  //   }
  // ]
  return (
    <div className="product-card">
      {/* <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button onClick={() => console.log(`Añadido al carrito: ${name}`)}>
          Añadir al Carrito
        </button>
      </div> */}
      <div className="col-12">
        {loading && <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>}
        {error && <div class="alert alert-danger" role="alert">{error}</div>}
        {/* {data && (
          <div className="input-group mb-3">
            <select className="form-select" onChange={e => setSelectedPokemon(e.target.value)}>
              <option selected>Seleccionar...</option>
              {data.results.map((pokemon) => (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
            </select>
           
          </div>
        )} */}
        {data && (
          <div className="row">
            {data.map((post) => (
              <div className="col-4" key={post.id}>
                <div className="card">
                  <img src={`http://localhost:3002/uploads/${post.url}`} className="card-img-top" alt={post.description} />
                  <div className="card-body">
                    <p className="card-text">{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ProductCard.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default ProductCard;
