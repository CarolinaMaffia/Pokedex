import React from 'react';
import './pokemonCard.scss';

const PokemonCard = pokemon => {
    console.log('poke', pokemon)
    return (
        <div className="pokemon-card-container">
            <div>
                <img className="pokemon-img" src={pokemon.pokemon.sprites.front_default} alt="pokemon card" />
                <h3> {pokemon.pokemon.name} </h3>
                <div className="type-container">
                    <p>{pokemon.pokemon.types.map(type => {
                        return <div className="card-type">
                            {type.type.name}
                        </div>
                    })}</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;