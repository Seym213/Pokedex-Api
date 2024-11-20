import axios from "axios";

function getAllPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
}

function getAllPokemonById(name){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+name)
}

function getAllPokemonByIdBis(name){
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+name)
}

function getAllPokemonByIdBiss(id){
    return axios.get(" https://pokeapi.co/api/v2/type/"+id)
}

function getPokemonByType() {
    return axios.get(" https://pokeapi.co/api/v2/type/")
  };
  
  function getPokemonType(type) {
    return axios.get(" https://pokeapi.co/api/v2/type/"+ type)
  }; 

export default {getAllPokemon,
    getAllPokemonById,
    getAllPokemonByIdBis,
    getAllPokemonByIdBiss,
    getPokemonByType,
    getPokemonType
}