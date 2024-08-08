import { useState } from 'react'
import './Styles/SearchMovie.css'

export const MoviesSearh = () => {

  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const API_KEY = 'f7457ac50b5582ad2cae24724fcb7d3a'

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const handleInputChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fecthMovies()
  }
  //?query=Jack+Reacher&api_key=API_KEY
  const fecthMovies = async () => {
    try {
      const response = await fetch(`${(urlBase)}?query=${search}&api_key=${API_KEY}`)
      const data = await response.json()
      console.log(data.results)
      setMovies(data.results)
    } catch (error) {
      console.error('Ha ocurrido un error ', error)
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Movies Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Write the title of movie'
          value={search}
          onChange={handleInputChange}
        />
        <button type="submit" className='searh-button'> Searching </button>
      </form>

      {/* <div className="movie-list">
        {movies.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
          </div>
        ))}
      </div> */}
      {/* <div className="movie-list">
        {movies.map((pelicula) => (
          <div key={pelicula.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
            <p>{pelicula.overview}</p>
          </div>

        ))}

      </div> */}

      <div className="movie-list">
        {movies.map((x) => (
          <div key={x.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${x.poster_path}`} alt={x.title} />    
            <h2>{x.title}</h2>
            <p>{x.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
