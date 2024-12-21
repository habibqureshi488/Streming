import React, { useState, useEffect } from 'react';
import './Card.css';

function API() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=Marvel&apikey=2e1bec79')
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setData(data.Search); // Set the array of movies
        } else {
          setError('No movies found');
        }
      })
      .catch(error => setError(error.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div className="rooms-suites-container">
      <header className="header">
        <h1>Movies</h1>
        <p>Explore our Movies</p>
      </header>
      <section className="rooms-list">
        {data.map((item, index) => (
          <div className="room-card" key={index}>
            <img src={item.Poster} alt={item.Title} />
            <div className="room-info">
              <h2>{item.Title}</h2>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default API;
