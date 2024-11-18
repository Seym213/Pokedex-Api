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


export default {getAllPokemon,
    getAllPokemonById,
    getAllPokemonByIdBis
}