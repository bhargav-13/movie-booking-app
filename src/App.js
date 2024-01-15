// src/App.js
import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import SeatSelection from './components/SeatSelection';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // Fetch movies from your Django API when the component mounts
    fetch('http://localhost:8000/api/movies/')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleAddMovie = (newMovie) => {
    // Make a POST request to add the new movie
    fetch('http://localhost:8000/api/movies/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then(response => response.json())
      .then(data => {
        // Update the state with the new movie
        setMovies([...movies, data]);
      })
      .catch(error => console.error('Error adding movie:', error));
  };

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
  };

  return (
    <div className="container">
      <h1>Movies</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <SeatSelection onSeatSelect={handleSeatSelect} />
      <div>
        <h2>Selected Seats</h2>
        <p>{selectedSeats.join(', ')}</p>
      </div>
      {movies.map(movie => (
        <div key={movie.title} className="movie">
          <Movie
            title={movie.title}
            description={movie.description}
            releaseDate={movie.release_date}
            cast={movie.cast}
          />
        </div>
      ))}
    </div>
  );
};

export default App;

