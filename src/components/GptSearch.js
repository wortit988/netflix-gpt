import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchResults from './GptSearchResults'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img src={BG_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GptSearchResults />
    </div>
  )
}

export default GptSearch