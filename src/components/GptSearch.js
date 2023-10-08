import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchResults from './GptSearchResults'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img className="h-screen object-cover w-screen" src={BG_URL} alt="background" />
    </div>
    <div className="">
      <GptSearchBar />
      <GptSearchResults />
    </div>
  </>
  )
}

export default GptSearch