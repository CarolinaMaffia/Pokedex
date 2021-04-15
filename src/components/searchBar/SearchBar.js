import React from 'react';
// import PokemonCard from '../pokemonCard/PokemonCard';
import './searchbar.scss';


const SearchBar = ({ value, handleChange }) => {


    return (
        <div className="searchbar-container"> 
            <input value={value} onChange={handleChange} type="text" placeholder="search your pokemon" />
        </div>
    )
}

export default SearchBar;