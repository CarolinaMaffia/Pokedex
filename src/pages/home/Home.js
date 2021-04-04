import React from 'react';

// Components
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import SearchBar from '../../components/searchBar';

// Assets
import homePokeball from '../../assets/pokeball.png';

// Styles
import './home.scss';

const Home = pokemonData => {
    console.log('AVER', pokemonData)
    return (
        <div className="home-container">
            <div className="search-container">
                <img className="pokeball-icon" src={homePokeball} alt="home pokeball" />
                <h2> Find your Pokemon! </h2>
                <div className="search-bar">
                    <SearchBar />
                </div>
            </div>

            <div className="cards-container">
                {pokemonData.pokemonData.map((pokemon, i) => {
                    return <PokemonCard key={i} pokemon={pokemon} />
                })}
            </div>
        </div>
    );
}

export default Home;