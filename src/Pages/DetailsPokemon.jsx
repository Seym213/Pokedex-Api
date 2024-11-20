import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonServices from "../Services/PokemonServices";
import CanvasJSReact from '@canvasjs/react-charts';

const DetailsPokemon = () => {
  const { name } = useParams();
  const [dataPoints,setDataPoints] = useState([])
  const [Pokemon, setPokemon] = useState({});
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light", // "light1", "dark1", "dark2"
    title:{
      text: "Statistique"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",		
      startAngle: -90,
      dataPoints: dataPoints
    }]
  }
  
  const fetchPokemonByID = async () => {
    try {
      const response = await PokemonServices.getAllPokemonById(name);
      const responseBis = await PokemonServices.getAllPokemonByIdBis (name)
      
      
      const responseBiss = await PokemonServices.getAllPokemonByIdBiss (responseBis.data.types[0].type.name)
      setPokemon({ ...responseBiss.data, ...responseBis.data, ...response.data});
      const data = [
        {y:responseBis.data.stats[0].base_stat,label:responseBis.data.stats[0].stat.name},
        {y:responseBis.data.stats[1].base_stat,label:responseBis.data.stats[1].stat.name},
        {y:responseBis.data.stats[2].base_stat,label:responseBis.data.stats[2].stat.name},
        {y:responseBis.data.stats[3].base_stat,label:responseBis.data.stats[3].stat.name},
        {y:responseBis.data.stats[4].base_stat,label:responseBis.data.stats[4].stat.name},
        {y:responseBis.data.stats[5].base_stat,label:responseBis.data.stats[5].stat.name}
      ];
      setDataPoints (data)
      
      
      
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

      <div className="d-flex flex-column align-items-start col-6">
      
      <h1 >{Pokemon.name} N°{Pokemon.id && Pokemon.id}</h1>
      
      <img className="img-poke"
        src=
          {"https://img.pokemondb.net/artwork/"+Pokemon.name+".jpg"}
           alt={"image+" + Pokemon.name}/>
            
           <div>
           <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
           </div>
      </div>
      
      <div className="d-flex flex-column">
        <h2 className="titre-version">  Game Version</h2>
      <div className="version">{Pokemon.game_indices && Pokemon.game_indices.map((indice) => {
        return <span className={indice.version.name+" version-span"}> {indice.version.name+" "}</span>
      })}</div>
      
   
      
      <p>Description Du POKémon :   {Pokemon.flavor_text_entries && Pokemon.flavor_text_entries[16].flavor_text}</p>
      
      <div id="para" className="d-flex justify-content-between flex-wrap gap-3">
       <div id="pt" className="d-flex flex-column">
       <span className="titre">Poids :</span>
       {Pokemon.weight}
      <span className="titre">Taille :</span>
      {Pokemon.height}
      </div>
      
      <div className="d-flex flex-column">
      Competences : {Pokemon.abilities && Pokemon.abilities.map((competence)=> {
        return <span className={competence.ability.name+"  competence"}>{competence.ability.name+" "}</span>
      })}
       </div>
       </div>
      <div className="element">
      
      
      element pokemon : {Pokemon.types && Pokemon.types.map ((element)=>{
        return  <span className={element.type.name+"  element-span"}>{element.type.name+" "}</span>
      })}
      </div>

      <p>faiblesse : {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_from.map((damage) => {
             return <span className={damage.name+"  faiblesse-span"}> {damage.name+" "}</span>
            })}</p>
      
      
      <div className="point-fort">
            fort contre : {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_to.map((damage) => {
             return <span className={damage.name+"  fort-span"}> {damage.name+" "}</span>
            })}
            </div>
           
 
     
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