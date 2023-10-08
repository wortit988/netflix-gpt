import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constant';
import openAI from "../utils/openAI";
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieFromTMDB = async (movieName) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieName +
          "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };

    

    const handleGptSearchClick = async () => {

      const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Hera Pheri, Dhamaal, Chup Chup Ke, Golmaal, Jane Bhi Do Yaaron";

      // const gptResults = await openAI.chat.completions.create({
      //   messages: [{ role: "user", content: gptQuery }],
      //   model: "gpt-3.5-turbo",
      // });

      // if(!gptResults.choices){
      //   //NO Response from OPEN AI GPT API
      // }

      //const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const gptMovies = ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

      const resPromiseArray = gptMovies.map((movieName) => searchMovieFromTMDB(movieName));

      const tmdbResults = await Promise.all(resPromiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );

    };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()} >
            <input 
              type="text" 
              className="p-4 m-4 col-span-9" 
              placeholder={lang[langKey].gptSearchPlaceholder} 
              ref={searchText}
            />   
            <button 
              className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar