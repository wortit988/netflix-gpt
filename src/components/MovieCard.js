import React from 'react'
import { TMDB_IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath, title }) => {
  return (
    <div  className="w-48 pr-4">
        <img 
            alt={title}
            src={TMDB_IMG_CDN_URL + posterPath}
        />
    </div>
  )
};

export default MovieCard;