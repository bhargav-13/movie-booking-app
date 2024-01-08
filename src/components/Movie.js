// src/Movie.js
import React from 'react';

const Movie = ({ title, description, releaseDate, cast }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Release Date: {releaseDate}</p>
    <p>Cast: {cast}</p>
  </div>
);

export default Movie;
