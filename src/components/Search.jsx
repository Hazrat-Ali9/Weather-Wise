import React, { useState } from 'react'
import axios from 'axios';

const Search = ({setWeatherDetails}) => {
    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value);
        setWeatherDetails(null);
    }

    const handleKeyDown = async (e) => {
        if(e.key != 'Enter') return;

        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: search},
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            // console.log(response.data);
            setWeatherDetails(response.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='search-section'>
        <div className="search-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>

            <input 
                type="text" 
                placeholder='Search for a city' 
                onChange={handleInput}
                onKeyDown={handleKeyDown}
            />
        </div>
    </div>
  )
}

export default Search