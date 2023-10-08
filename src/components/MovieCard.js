import React from 'react'
import { TMDB_IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;
  return (
    <div  className="w-40 pr-2">
        <img 
            alt={title}
            src={TMDB_IMG_CDN_URL + posterPath}
        />
    </div>
  )
};

export default MovieCard;