import React from 'react';
import './searchbar.scss';


const SearchBar = () => {
    return (
        <div className="searchbar-container">
            <input type="text" placeholder="search your pokemon" />
        </div>
    )
}

export default SearchBar;