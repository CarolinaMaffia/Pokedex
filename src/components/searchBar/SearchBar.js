import React from 'react';
import Char from '../../assets/pokeball.png';
import './searchbar.scss';


const SearchBar = ({ value, handleChange }) => {


    return (
        <div className="searchbar-container"> 
                        <img src={Char} alt="charmander" className="ahre" />
            <input value={value} onChange={handleChange} type="text" placeholder="Gotta catch em all" >
            </input>
        </div>
    )
}

export default SearchBar;