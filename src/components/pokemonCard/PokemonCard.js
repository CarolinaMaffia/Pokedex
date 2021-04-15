import React from 'react';
import './pokemonCard.scss';
import pokemonType from '../../helpers/pokemonTypes';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card-container">
            <div className="aber">
                <img className="pokemon-img" src={pokemon.sprites.front_default} alt="pokemon card" />
                <h3> {pokemon.name} </h3>
                <div className="type-container">
                    {pokemon.types.map((type, i) => {
                        return <div className="card-type" style={{ backgroundColor: pokemonType[type.type.name]}} key={i}>
                            {type.type.name}
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;