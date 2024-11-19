import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonServices from "../Services/PokemonServices";
import CanvasJSReact from '@canvasjs/react-charts';

const DetailsPokemon = () => {
  const { name } = useParams();
  const [Pokemon, setPokemon] = useState({});
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title:{
      text: "Trip Expenses"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",		
      startAngle: -90,
      dataPoints: [
        { y: 20, label: "Airfare" },
        { y: 24, label: "Food & Drinks" },
        { y: 20, label: "Accomodation" },
        { y: 14, label: "Transportation" },
        { y: 12, label: "Activities" },
        { y: 10, label: "Misc" }	
      ]
    }]
  }
  
  const fetchPokemonByID = async () => {
    try {
      const response = await PokemonServices.getAllPokemonById(name);
      const responseBis = await PokemonServices.getAllPokemonByIdBis (name)
      
      
      const responseBiss = await PokemonServices.getAllPokemonByIdBiss (responseBis.data.types[0].type.name)
      setPokemon({ ...responseBiss.data, ...responseBis.data, ...response.data});
      
      
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonByID();
  }, []);


  console.log(Pokemon);

  return (

    <Container className="d-flex align-items-center gap-3 flex-column">
     {/* logo pokemon */}
      <div className="d-flex align-items-start gap-3">

      <div className="d-flex flex-column align-items-center col-6">
      
      <h1>{Pokemon.name} N°{Pokemon.id && Pokemon.id}</h1>
      
      <img className="img-poke"
        src=
          {"https://img.pokemondb.net/artwork/"+Pokemon.name+".jpg"}
           alt={"image+" + Pokemon.name}/>
           <div>
           <h2>Localisation </h2>
           <p className="moutain">{Pokemon.habitat && Pokemon.habitat.name}</p>
           </div>
           <div>
           <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
           </div>
           <div>
           <h2>Statistique du pokemon</h2>
       <p className="Stats">{Pokemon.stats && Pokemon.stats.map((stat)=> {
        return stat.stat.name+" "
       })}</p>
           </div>
      </div>
      
      <div className="d-flex flex-column">
        <h2 className="titre-version">  Game Version</h2>
      <div className="version">{Pokemon.game_indices && Pokemon.game_indices.map((indice) => {
        return <span className={indice.version.name+" version-span"}> {indice.version.name+" "}</span>
      })}</div>
      <h3>Infos :</h3>
      <p>Type: {Pokemon.egg_groups && Pokemon.egg_groups.map((group) =>{
        return group.name+" "
    })}</p>
      <p>Description Du POKémon :   {Pokemon.flavor_text_entries && Pokemon.flavor_text_entries[16].flavor_text}</p>
      <p>Poids : {Pokemon.weight}</p>
      <p>Taille : {Pokemon.height}</p>
      <p>element pokemon : {Pokemon.types && Pokemon.types.map ((element)=>{
        return element.type.name+" "
      })}</p>
      <p>faiblesse : {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_from.map((damage) => {
             return damage.name+" "
            })}</p>
            <p>fort contre : {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_to.map((damage) => {
             return damage.name+" "
            })}</p>
      <p>Competences : {Pokemon.abilities && Pokemon.abilities.map((competence)=> {
        return competence.ability.name+" "
      })}</p>
       
     
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
      </div>
      </div>
    </Container>
  );
};

export default DetailsPokemon;