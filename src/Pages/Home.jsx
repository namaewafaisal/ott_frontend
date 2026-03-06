import React from 'react'
import Navigation_Bar from '../Components/Navigation_Bar'
import Movie_Card from '../Components/Movie_Card'
import './Home.css'

function Home() {
  const movies = [
    {
      index: 1,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 1",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },
    {
      index: 2,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 2",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },
    {
      index: 3,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 3",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },
    {
      index: 4,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 4",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },
    {
      index: 5,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 5",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },
    {
      index: 6,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 6",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },
    {
      index: 7,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 7",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },
    {
      index: 8,
      image: "https://picsum.photos/300/200",
      title: "Sample Movie 8",
      rating: "8.5",
      language: "English",
      duration: "2h 30m"
    },

  ]

  return (
    <>
      <Navigation_Bar />

      <div className="movie-section">
        {movies.map((movie,index) => (
          <Movie_Card
            key={movie.index}
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
            language={movie.language}
            duration={movie.duration}
          />
        ))}
      </div>
    </>
  )
}

export default Home