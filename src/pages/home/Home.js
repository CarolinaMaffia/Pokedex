import React, { useState, useEffect, useLayoutEffect } from 'react';

// Components
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import SearchBar from '../../components/searchBar';

// Assets
import pokedex from '../../assets/pokedex.png';
import homePokeball from '../../assets/pokeball.png';

// Styles
import './home.scss';

const Home = ({ pokemonData, prev, next }) => {

    const [searchPokemon, setSearchPokemon] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    
    const handleChange = e => {
        setSearchPokemon(e.target.value);
    };

    useEffect(() => {
        const results = pokemonData.filter(pokemon => searchPokemon.toLowerCase()
        .includes(pokemon.name.toLowerCase().substring(0, searchPokemon.length))
        );
        setSearchResult(results);
    }, [searchPokemon]);

    return (
        <div className="home-container">        
            <div className="main-icon-container">
                <img className="pokeball-icon" src={pokedex} alt="home pokeball" />
            </div>
            <div className="searchBar-container">
                <div className="search-bar">
                    <SearchBar value={searchPokemon} handleChange={handleChange} />
                </div>
            </div>
        <div className="cards-section">   
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>next</button>
            </div>

            <div className="cards-container">
                {searchResult.map((pokemon, i) => {
                    return <PokemonCard key={i}  pokemon={pokemon} />
                })}
            </div>
        </div>
            <div className="footer">
                <p> Made with 💖 by <a href="https://github.com/CarolinaMaffia" target="_blank" rel="noreferrer"> Caru </a> </p>
            </div>
        </div>
    );
}

export default Home;