import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon.js';
// import axios from 'axios';
import './App.css';
import Home from './pages/home/Home.js';

const App = ()  => {
  //Hooks para la data de los pokemon
  const [pokemonData, setPokemonData] =useState([]);
  //Hooks para el next page
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  //Loader
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  //Useeffect tiene dos argumentos, uno es una funcion y el segundo seria un dependency array??
  useEffect(() => {
//Cuando el componente se monta por primera vez se fetchea la data de la api 
//GetAllPokemon va a ser una funcion que se ocupe del fetching de la api de pokemon
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  //pagination
  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async data => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))

    setPokemonData(_pokemonData);
  }

  return (
    <div className="App">
      
        {
        // For a future loader
         loading  ? <h1> Loading... </h1> : <Home pokemonData={pokemonData} prev={prev} next={next} /> 
        }
      {/* <Home pokemonData={pokemonData} prev={prev} next={next} /> */}
    </div>
  );
}

export default App;
