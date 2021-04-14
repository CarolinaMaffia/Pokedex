import React from 'react';

// Components
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import SearchBar from '../../components/searchBar';

// Assets
import pokedex from '../../assets/pokedex.png';
import homePokeball from '../../assets/pokeball.png';
// import footer from '../../assets/withLove.png'

// Styles
import './home.scss';

const Home = ({ pokemonData, prev, next }) => {
    console.log('AVER', prev)
    return (
        <div className="home-container">
            <div className="main-icon-container">
                <img className="pokeball-icon" src={pokedex} alt="home pokeball" />
            </div>
            <div className="searchBar-container">
                <div className="search-bar">
                    <SearchBar pokemonData={pokemonData} />
                </div>
            </div>
            
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>next</button>
            </div>

            <div className="cards-container">
                {pokemonData.map((pokemon, i) => {
                    return <PokemonCard key={i} pokemon={pokemon} />
                })}
            </div>
            <div className="footer">
                <p> Made with <img className="footer-icon" src={homePokeball} alt="charchar"/> by Caru</p>
            </div>
        </div>
    );
}

export default Home;