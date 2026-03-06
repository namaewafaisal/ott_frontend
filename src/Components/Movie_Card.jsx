import React from 'react'
import './Movie_Card.css'

function Movie_Card( {image, title, rating, language, duration} ) {
  return (
    <div className="movie-card">
      <div className="banner">
        <img className="img" src={image} alt="Movie Banner" />
      </div>
      <div className="movie-info">
        <div className="title-rating">
          <h3>{title}</h3>
          </div>
          <p className="meta">{language} | {duration} | {rating}</p>
        
        <div className="button">
            <button className="play-button">Play</button>
            <button className="watchlater-button">Watch Later</button>
        </div>
      </div>
    </div>
  )
}

export default Movie_Card