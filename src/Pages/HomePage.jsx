import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import PokemonCard from "../Components/PokemonCard";
import Pokemonservices from "../Services/Pokemonservices";
import { useLocation, useParams } from "react-router-dom";

const HomePage = () => {
    const [Pokemons, setPokemons] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searching, setSearching] = useState(false);
    const {id} = useParams();
    const location = useLocation();

    const [filteredPokemons, setFilteredPokemons] = useState([])
   const handlechange = (e) => {
    setSearchValue(e.currentTarget.value);
    
   }


    const fetchPokemons = async () => {
        try {
            const response = await Pokemonservices.getAllPokemon();
           setPokemons(response.data.results);
           
        } catch (error) {
            console.log(error);
        }
    }
   
    useEffect(() => {
        fetchPokemons();
    }, [])
   
    useEffect (() =>{
        setFilteredPokemons(Pokemons.filter((pokemon) => {
            return pokemon[1].name.toLowerCase().startsWith(searchValue.toLowerCase());
            
        }))
            },[searchValue])
           
   
   return<Container className="d-flex flex-column align-items-center">
    <h1>Pokémon</h1>
    <Form className="col-12" onSubmit={(e)=>{
            e.preventDefault();
            setCurrentPage(1);
            setSearching(true); 
            searchFilm();
        }}>
            <Form.Label htmlFor="search">Chercher un pokemon</Form.Label>
            <Form.Control
                type="text"
                id="search"
                aria-describedby="search"
                placeholder="ex : Rayqaza"
                className="mb-3"
                
                value ={searchValue} onChange={handlechange}
            />
        </Form>
       
        <Button variant="primary" className="col-12 mb-3" onClick={() => {
            setCurrentPage(1);
            setSearching(true); 
            searchpokemon();
        }}>Rechercher</Button>
        <div className="d-flex justify-content-center flex-wrap gap-4">
        {Pokemons.map((pokemon) => {
                return <PokemonCard pokemonCard={pokemon} key={pokemon.name}></PokemonCard>
            })}
        </div>
    
    </Container>




}

export default HomePage;