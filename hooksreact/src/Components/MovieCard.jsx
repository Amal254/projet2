import React from "react";
import EditMovie from "./EditMovie";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie ,handleDelete,handleEdit}) => {
  return (
    <div className="movie-card">
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} /> 
      <p>{movie.date}</p>
      <div className="groupe">
          <button className="btn" onClick={()=>handleDelete(movie.id)}>Delete</button>
          <EditMovie movie={movie} handleEdit={handleEdit}/>

          <Link to ={`/Detail/${movie.id}`}>
          <button className="btn" variant="primary">info</button>
          </Link>
      </div>
    </div>
  );
};

export default MovieCard;