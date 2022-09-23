import React, { useEffect, useState } from 'react';
import GetList from './GetList';
import axios from 'axios';

function Home() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() =>{
      async function fetchPokemonList(){
        try {
          const requestURL = 'https://pokeapi.co/api/v2/pokemon?limit=25';
          const response = await fetch(requestURL);
          const responsejson = await response.json();
          const results=responsejson.results;
          console.log(results);
          
          for(let i=0; i<results.length; i++) {
            await axios.get(results[i].url)
              .then(pokemon=>{
                //console.log(pokemon.data.id);
                setPokemonList(prevArray=>[...prevArray, pokemon.data]);
              });
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchPokemonList();
    },[]);

    return (
        <div>
            <h1>This is the Pokemon page</h1>
            
            <GetList pokemonList={pokemonList} />
        </div>
    );
}

export default Home;