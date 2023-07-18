import React from 'react'
import StarRating from './StarRating'

const Search = ({textSearch,rating,handleSearch,handleRating}) => {
  return (
    <div>
        <form >
            <input type="text" value={textSearch} onChange={e=>handleSearch(e.target.value)} />
            <StarRating rating={rating} handleRating={handleRating}/>
        </form>
    </div>
  )
}

export default Search
