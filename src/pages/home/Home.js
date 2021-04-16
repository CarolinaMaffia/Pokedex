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
    
   console.log('pokemon', pokemonData); 
    const handleChange = e => {
        setSearchPokemon(e.target.value);
    };

    useEffect(() => {
        const results = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemon)
        );
        setSearchResult(results);
        console.log('searchPoke', searchPokemon);
    }, [searchPokemon]);

    console.log('sResult', searchResult);

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
        <div className="cont-del-cont">   
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
                <p> Made with <img className="footer-icon" src={homePokeball} alt="charchar"/> by <a href="https://github.com/CarolinaMaffia" target="_blank" rel="noreferrer"> Caru </a> </p>
            </div>
        </div>
    );
}

export default Home;