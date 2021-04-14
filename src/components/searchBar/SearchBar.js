import React, { useState } from 'react';
import PokemonCard from '../pokemonCard/PokemonCard';
import './searchbar.scss';


const SearchBar = ({pokemonData}) => {
    const [word, setWord] = useState('');

    const [filterDisplay, setFilterDisplay] = useState(pokemonData);
    console.log(pokemonData);


    const handleChange = e => {
        setWord(e);
        let oldPokemonData = pokemonData.map((pokemon, i) => {
            return pokemon;
        });

        if (word !== '' ) {
            let matchCard = []
            matchCard = oldPokemonData.filter(pokemon => pokemon.name.includes(word.toLocaleLowerCase())
            );

            setFilterDisplay(matchCard);
        } else {
            setFilterDisplay(pokemonData);
        }

    }

    return (
        <div className="searchbar-container">
            <input onChange={e => handleChange(e.target.value)} type="text" placeholder="search your pokemon" />
            {filterDisplay.map((pokemon, i) => {
                    return <PokemonCard key={i} pokemon={pokemon} />
                })}
        </div>
    )
}

export default SearchBar;