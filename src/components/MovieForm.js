// src/MovieForm.js
import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [cast, setCast] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!title || !description || !releaseDate || !cast) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new movie object
    const newMovie = {
      title,
      description,
      release_date: releaseDate, // match the API field name
      cast,
    };

    // Pass the new movie to the parent component
    onAddMovie(newMovie);

    // Clear the form fields
    setTitle('');
    setDescription('');
    setReleaseDate('');
    setCast('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Release Date:
        <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
      </label>
      <label>
        Cast:
        <input type="text" value={cast} onChange={(e) => setCast(e.target.value)} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
