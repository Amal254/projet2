import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({list,handleDelete,handleEdit}) => {
  return (
    <div className='movie-list'>
      {
        React.Children.toArray(list.map(movie => <MovieCard movie={movie} handleDelete={handleDelete} handleEdit={handleEdit}/>))
      }
    </div>
  )
}

export default MovieList
