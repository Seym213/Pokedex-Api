import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonServices from "../Services/PokemonServices";

const DetailsPokemon = () => {
  const { name } = useParams();
  const [Pokemon, setPokemon] = useState({});

  const fetchPokemonByID = async () => {
    try {
      const response = await PokemonServices.getAllPokemonById(name);
      const responseBis = await PokemonServices.getAllPokemonByIdBis (name)
      setPokemon({...responseBis.data, ...response.data});
      
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonByID();
  }, []);

  console.log(Pokemon);

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>{Pokemon.name}</h1>
      <img
        src=
          {"https://img.pokemondb.net/artwork/"+Pokemon.name+".jpg"}
          
          
        

        alt={"image+" + Pokemon.name}
      />
      <h2>Habitat:</h2>
      <p>{Pokemon.habitat && Pokemon.habitat.name}</p>
      <h3>Infos :</h3>
      <p>Numero Pokemon : {Pokemon.id && Pokemon.id}</p>
      <p>Type: {Pokemon.egg_groups && Pokemon.egg_groups.map((group) =>{
        return group.name+" "
    })}</p>
      <p>Description Du POKémon :   {Pokemon.flavor_text_entries && Pokemon.flavor_text_entries[0].flavor_text}</p>
      {/* <h2>passif :</h2>
      {Pokemon.passive && (
        <>
          <h3>{Pokemon.passive.name}</h3>
          <div className="d-flex">
            <img
              src={
                "" +
                Pokemon.passive.image.full
              }
              alt=""
            />
            <p>{Pokemon.passive.description}</p>
          </div>
        </>
      )}
      <div className="d-flex">
        <div className="col-6">
          <h2>Conseil pour les alliés</h2>
          {Pokemon.allytips &&
            Pokemon.allytips.map((tip) => {
              return <p key={tip}>{tip}</p>;
            })}
        </div>
        <div className="col-6">
          <h2>Conseil pour les ennemis</h2>
          {Pokemon.enemytips &&
            Pokemon.enemytips.map((tip) => {
              return <p key={tip}>{tip}</p>;
            })}
        </div>
      </div>
      {Pokemon.spells && Pokemon.spells.map((spell) => {
        return <> 
        <h3>{spell.name}</h3>
                        <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/"+spell.image.full} alt="" />
                        <p>{spell.description}</p>
        </>
      })}

      {Pokemon.stats && Object.entries(Pokemon.stats).map((key) => {
        return <span>{key[0]} ={">"} {key[1]}</span>
      })} */}
    </Container>
  );
};

export default DetailsPokemon;